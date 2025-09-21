import { useState } from 'react';
import { Content } from './components/Content'
import Sidebar from './components/Sidebar'

function App() {

  const items = [{ heading: "Button", key: "button" }, { heading: "Input", key: "input" }, { heading: "Card", key: "card" }];
  const [activeItem, setActiveItem] = useState<{ heading: string, key: string }>(items[0]);

  return (
    <div className="flex h-screen">
      <Sidebar items={items} activeItem={activeItem} onItemSelect={setActiveItem} />
      <Content item={activeItem}  />
    </div>
  )
}

export default App