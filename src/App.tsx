import { useState } from 'react';
import { Content } from './components/Content'
import Sidebar from './components/Sidebar'

function App() {

  const items = ["Button", "Input", "Card"];
  const [active, setActive] = useState<string>(items[0]);

  return (
    <div className="flex h-screen">
      <Sidebar items={items} activeItem={active} onItemSelect={setActive} />
      <Content heading={active} />
    </div>
  )
}

export default App