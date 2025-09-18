const PropControls = () => {
  return (
    <div>
      <h3 className="font-semibold mb-2">Props</h3>
      <label className="block mb-2">
        Label:
        <input type="text" className="border p-1 ml-2 rounded" />
      </label>
      <label className="block mb-2">
        Disabled:
        <input type="checkbox" className="ml-2" />
      </label>
    </div>
  )
}

export default PropControls