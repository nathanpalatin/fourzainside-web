'use client'

import { Skeleton } from '@/components/ui/skeleton';
import { useEffect, useRef, useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export const videoJsOptions = {
  autoplay: true,
  controls: true,
  responsive: true,
  fluid: true,
  sources: [
    {
      src: 'https://82oeukjshsyauuib.public.blob.vercel-storage.com/video-EKpmqTLAaaXFH2hAa48OrjTLrZV4c5.mp4',
      type: 'video/mp4'
    }
  ]
};

export function VideoPlayer(props) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { options, onReady } = props;
  const [playbackRate, setPlaybackRate] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");
      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const player = playerRef.current = videojs(videoElement, {
        ...options,
        playbackRates: [0.5, 1, 1.5, 2, 3, 4],
      }, () => {
        onReady && onReady(player);
        setLoading(false);
      });

      player.ready(() => {
        player.playbackRate(playbackRate);
      });

      player.on('ratechange', () => {
        setPlaybackRate(player.playbackRate());
      });
      playerRef.current.el().oncontextmenu = (e) => e.preventDefault();

      player.on('loading', () => setLoading(true));
      player.on('playing', () => setLoading(false));
    }
  }, [options, videoRef, onReady]);

  useEffect(() => {
    const player = playerRef.current;
    if (player) {
      player.playbackRate(playbackRate);
    }
  }, [playbackRate]);

  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player className="custom-video-player">
      {loading && (
        <Skeleton className="bg-zinc-800 w-full h-[600px]" />
      )}
      <div ref={videoRef} className="bg-black rounded-lg overflow-hidden" />
    </div>
  );
}
