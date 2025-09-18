import { useState } from 'react'

const ExamplesView = () => {
  const [tab, setTab] = useState<'props' | 'events' | 'code'>('props')

  return (
    <div className="p-4 space-y-4">
      <div className="border rounded bg-white">
        <div className="p-4 border-b">
          <h3 className="font-semibold">Button Example</h3>
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">Click Me</button>
        </div>
        <div className="flex border-b bg-gray-50">
          <button className={`px-3 py-2 ${tab === 'props' ? 'border-b-2 border-blue-600' : ''}`} onClick={() => setTab('props')}>Props</button>
          <button className={`px-3 py-2 ${tab === 'events' ? 'border-b-2 border-blue-600' : ''}`} onClick={() => setTab('events')}>Events</button>
          <button className={`px-3 py-2 ${tab === 'code' ? 'border-b-2 border-blue-600' : ''}`} onClick={() => setTab('code')}>Code</button>
        </div>
        <div className="p-4">
          {tab === 'props' && <p>label: "Click Me", disabled: false</p>}
          {tab === 'events' && <p>onClick: () => console.log('clicked')</p>}
          {tab === 'code' && (
            <pre className="bg-gray-100 p-2 rounded text-sm">
              {`<button className="px-4 py-2 bg-blue-600 text-white rounded">Click Me</button>`}
            </pre>
          )}
        </div>
      </div>
    </div>
  )
}

export default ExamplesView