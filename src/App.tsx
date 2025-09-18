import { useState } from 'react'
import Sidebar from './components/Sidebar'
import PlaygroundView from './components/PlaygroundView'
import ExamplesView from './components/ExamplesView'

function App() {
  const [activeTab, setActiveTab] = useState<'playground' | 'examples'>('playground')

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="flex border-b bg-gray-100">
          <button
            className={\`px-4 py-2 \${activeTab === 'playground' ? 'bg-white border-t border-x' : ''}\`}
            onClick={() => setActiveTab('playground')}
          >
            Playground
          </button>
          <button
            className={\`px-4 py-2 \${activeTab === 'examples' ? 'bg-white border-t border-x' : ''}\`}
            onClick={() => setActiveTab('examples')}
          >
            Examples
          </button>
        </div>
        <div className="flex-1 overflow-auto">
          {activeTab === 'playground' ? <PlaygroundView /> : <ExamplesView />}
        </div>
      </div>
    </div>
  )
}

export default App