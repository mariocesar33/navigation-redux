import ReactPlayer from 'react-player'
import { useDispatch } from 'react-redux'
import { next, useCurrentLesson } from '../store/slices/player'

export function Video() {
  const dispatch = useDispatch()

  const { currentLesson } = useCurrentLesson()

  function handlePlayNext() {
    dispatch(next())
  }

  return (
    <div className='w-full aspect-video bg-zinc-950'>
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        src={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        onEnded={handlePlayNext}
        playing // play automatically
      />
    </div>
  )
}