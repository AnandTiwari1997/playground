const PropControls = () => {
  return (
    <div>
      <h3 className="font-semibold mb-2">Props</h3>
      <label className="block mb-2">
        <span>Label:</span>
        <input type="text" className="border p-1 ml-2 rounded" />
      </label>
      <label className="block mb-2">
        <span>Disabled:</span>
        <input type="checkbox" className="ml-2" />
      </label>
    </div>
  )
}

export default PropControls