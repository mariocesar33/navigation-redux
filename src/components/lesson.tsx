import { PlayCircle, Video } from "lucide-react"

interface LessonProps {
  title: string
  duration: string
  isCurrent?: boolean
  onPlay: () => void
}

export function Lesson({ title, duration, onPlay, isCurrent = false }: LessonProps) {
  
  return (
    <button
      onClick={onPlay} 
      data-active={isCurrent}
      disabled={isCurrent}
      className="flex items-center cursor-pointer rounded gap-3 text-sm p-2 text-zinc-400 data-[active=true]:text-emerald-400 enabled:hover:bg-zinc-800"
    >
      { isCurrent ? (
        <PlayCircle className="size-4 text-emerald-400" />
      ) : (
        <Video className='size-4 text-zinc-500' />
      )}
      <span>{title}</span>
      <span className='ml-auto font-mono text-xs text-zinc-500'>
        {duration}
      </span>
    </button>
  )
}