const Sidebar = () => {
  return (
    <aside className="w-64 border-r bg-gray-50 p-4">
      <h2 className="font-semibold mb-4">Components</h2>
      <ul className="space-y-2">
        <li className="cursor-pointer hover:text-blue-600">Button</li>
        <li className="cursor-pointer hover:text-blue-600">Input</li>
        <li className="cursor-pointer hover:text-blue-600">Card</li>
      </ul>
    </aside>
  )
}

export default Sidebar