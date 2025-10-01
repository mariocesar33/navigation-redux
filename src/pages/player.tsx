import { ChevronDown, MessageCircle, Video } from 'lucide-react'
import ReactPlayer from 'react-player'

export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex items-center justify-center">
      <div className="flex w-[1100px] mx-4 flex-col gap-6">
        <div className="flex items-center justify-between">
          {/* Header */}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">Fundamentos do Redux</h1>
            <span className="text-sm text-zinc-400">Módulo "Desvendando o Redux"</span>
          </div>

          <button className='flex items-center gap-x-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600'>
            <MessageCircle className="size-4" />
            Deixar feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
          <div className="flex-1">
            <div className='w-full aspect-video bg-zinc-950'>
              <ReactPlayer
                width="100%"
                height="100%"
                controls
                src="https://www.youtube.com/watch?v=E13t4kq1VZI"
              />
            </div>
          </div>

          <aside className="w-80 border-l border-zinc-800 bg-zinc-900">
            <div>
              <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                <div className="flex size-8 rounded-full items-center justify-center bg-zinc-950 text-xs">1</div>

                <div className='flex flex-col gap-1 text-left'>
                  <strong className='text-sm'>Desvendando o Redux</strong>
                  <small className="text-xs text-zinc-400">12 aulas</small>
                </div>

                <ChevronDown  className='size-5 ml-auto text-zinc-400'/>
              </button>

              <nav className='relative flex flex-col gap-4 p-6'>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className='size-4 text-zinc-500' />
                  <span>Fundamento do Redux</span>
                  <span className='ml-auto font-mono text-xs text-zinc-500'>
                    09:13
                  </span>
                </button>

                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className='size-4 text-zinc-500' />
                  <span>Fundamento do Redux</span>
                  <span className='ml-auto font-mono text-xs text-zinc-500'>
                    09:13
                  </span>
                </button>

                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className='size-4 text-zinc-500' />
                  <span>Fundamento do Redux</span>
                  <span className='ml-auto font-mono text-xs text-zinc-500'>
                    09:13
                  </span>
                </button>
              </nav>
            </div>
          </aside>
        </main>
      </div>
    </div>
  )
}