import ReactPlayer from 'react-player'

export function Video() {
  return (
    <div className='w-full aspect-video bg-zinc-950'>
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        src="https://www.youtube.com/watch?v=E13t4kq1VZI"
      />
    </div>
  )
}