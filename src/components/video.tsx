import ReactPlayer from 'react-player'
import { useAppSelector } from '../store'

export function Video() {
  const lesson = useAppSelector(state => {
    const { currentModuleIndex, currentLessonIndex } = state.player

    const currentLesson = state.player.course.modules[currentModuleIndex].lessons[currentLessonIndex]

    return  currentLesson
  })
  
  return (
    <div className='w-full aspect-video bg-zinc-950'>
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        src={`https://www.youtube.com/watch?v=${lesson?.id}`}
      />
    </div>
  )
}