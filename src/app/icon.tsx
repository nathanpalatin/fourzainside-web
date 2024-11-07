import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '50%',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        fi
      </div>
    ),
    {
      ...size,
    },
  )
}
