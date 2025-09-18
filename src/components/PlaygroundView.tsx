import PropControls from './PropControls'
import PreviewArea from './PreviewArea'

const PlaygroundView = () => {
  return (
    <div className="flex h-full">
      <div className="w-1/3 border-r p-4">
        <PropControls />
      </div>
      <div className="flex-1 p-4">
        <PreviewArea />
      </div>
    </div>
  )
}

export default PlaygroundView