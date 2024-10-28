import type { ComponentProps } from 'react'

import maia from '@/assets/maia.png'


export function VideoPlayer(options: ComponentProps<'video'>) {
  return (
    <video
      src={'http://example.com/video.mp4'}
      poster={maia.src}
      loop
      controls
      className="object-cover aspect-video h-full w-full"
      playsInline
      {...options}
    />
  )

}