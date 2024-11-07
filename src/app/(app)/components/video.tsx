'use client'

export function VideoYT() {
  return (
    <div className="yt-embed-holder">
      <iframe
        src="https://www.youtube.com/embed/QaMMWRpwOhE?autoplay=1&mute=1&controls=0&color=white&modestbranding=0&rel=0&playsinline=1&enablejsapi=1&playlist=QaMMWRpwOhE"
        title="YouTube video player"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{ width: '100%', height: '100%', aspectRatio: '16/9' }}
      />
    </div>
  );
}
