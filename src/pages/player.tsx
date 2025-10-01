import { ChevronDown, MessageCircle } from 'lucide-react'
import { Header } from '../components/header'
import { Video } from '../components/video'
import { Modules } from '../components/modules'

export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex items-center justify-center">
      <div className="flex w-[1100px] mx-4 flex-col gap-6">
        <div className="flex items-center justify-between">
          {/* Header */}
          <Header />

          <button className='flex items-center gap-x-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600'>
            <MessageCircle className="size-4" />
            Deixar feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>

          <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            <Modules moduleIndex={0} title='Desvendando o Redux' amountOfLessons={3} />
            <Modules moduleIndex={1} title='Desvendando o Redux' amountOfLessons={3} />
            <Modules moduleIndex={2} title='Desvendando o Redux' amountOfLessons={3} />
          </aside>
        </main>
      </div>
    </div>
  )
}