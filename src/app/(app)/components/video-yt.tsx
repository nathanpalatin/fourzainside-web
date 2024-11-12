'use client'
import { Skeleton } from '@/components/ui/skeleton';
import { useEffect, useRef, useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-youtube';

export const videoJsOptions = {
  autoplay: true,
  controls: true,
  responsive: false,
  fluid: true,
  techOrder: ['youtube'],
  sources: [
    {
      src: 'https://www.youtube.com/watch?v=5DnEg170vFg',
      type: 'video/youtube'
    }
  ],
  youtube: {
    modestbranding: 1,
    rel: 0,
    iv_load_policy: 3,
    showinfo: 0
  }
};

export function VideoPlayerYT(props) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { options, onReady } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");
      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const player = playerRef.current = videojs(videoElement, {
        ...options,
        playbackRates: [0.5, 1, 1.5, 2],
      }, () => {
        onReady && onReady(player);
        setLoading(false);
      });

      playerRef.current.el().oncontextmenu = (e: { preventDefault: () => any; }) => e.preventDefault();

      player.on('playing', () => setLoading(false));

      return () => {
        if (player) {
          player.dispose();
          playerRef.current = null;
        }
      };
    }
  }, [options, videoRef, onReady]);

  const togglePlayPause = () => {
    const player = playerRef.current;
    if (player) {
      if (player.paused()) {
        player.play();
      } else {
        player.pause();
      }
    }
  }

  return (
    <div data-vjs-player className="ml-4 custom-video-player" style={{ position: 'relative' }}>
      {loading ? (
        <Skeleton className="bg-zinc-800 w-full rounded-xl h-[600px]" />
      ) : (
        <div ref={videoRef} className="bg-black rounded-xl overflow-hidden" />
      )}

      <div
        onMouseDownCapture={togglePlayPause}
        onContextMenu={(e) => e.preventDefault()}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 30,
          backgroundColor: 'transparent',
          zIndex: 50,
          cursor: 'pointer',
        }}
      />
    </div>
  );
}
