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
  const [viewCounts, setViewCounts] = useState({});
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPosition, setThumbnailPosition] = useState({ x: 0, y: 0 });


  const handleTimeUpdate = () => {
    const player = playerRef.current;
    const currentTime = Math.floor(player.currentTime());
    const interval = Math.floor(currentTime / 10) * 10;

    setViewCounts(prevCounts => ({
      ...prevCounts,
      [interval]: (prevCounts[interval] || 0) + 1
    }));
  };


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
      const progressControl = (player as any).controlBar.progressControl;

      // Adiciona o evento de "mousemove" para a barra de progresso
      progressControl.on('mousemove', (event) => {
        const duration = player.duration();
        const rect = progressControl.el().getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const time = (mouseX / rect.width) * duration;

        // Atualize a posição e a imagem da miniatura
        setThumbnailPosition({ x: mouseX, y: -60 }); // Ajuste a posição conforme necessário
        setThumbnail(getThumbnailImage(time)); // Função para obter a miniatura do tempo atual
      });

      progressControl.on('mouseleave', () => {
        setThumbnail(null); // Oculta a miniatura quando o mouse sai da barra
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

    player.on('timeupdate', handleTimeUpdate);

    return () => {
      if (player && !player.isDisposed()) {
        player.off('timeupdate', handleTimeUpdate);
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  const getThumbnailImage = (time) => {
    const thumbnailIndex = Math.floor(time / 10); // Exemplo: uma imagem a cada 10 segundos
    return `https://example.com/thumbnails/thumbnail-${thumbnailIndex}.jpg`; // Ajuste a URL conforme necessário
  };

  return (
    <div data-vjs-player className="custom-video-player">
      {loading && (
        <Skeleton className="bg-zinc-800 w-full h-[600px]" />
      )}
      {thumbnail && (
        <img
          src={thumbnail}
          alt="Thumbnail"
          style={{
            position: 'absolute',
            left: `${thumbnailPosition.x}px`,
            top: `${thumbnailPosition.y}px`,
            width: '120px', // Tamanho da miniatura
            height: 'auto',
            pointerEvents: 'none',
            transform: 'translateX(-50%)'
          }}
        />
      )}
      <div ref={videoRef} className="bg-black rounded-lg overflow-hidden" />
    </div>
  );
}
