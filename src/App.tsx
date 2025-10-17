import { useState } from "react";
import { Content } from "./components/Content";
import Sidebar from "./components/Sidebar";

function App() {
    const items = [
        { heading: "Button", key: "button" },
        { heading: "Input", key: "input" },
        { heading: "Badge", key: "badge" },
        { heading: "Select", key: "select" },
        { heading: "Icon", key: "icon" },
        { heading: "IconButton", key: "iconButton" },
        { heading: "Checkbox", key: "checkbox" },
        { heading: "List", key: "list" },
        { heading: "Tooltip", key: "tooltip" },
        { heading: "Tabs", key: "tabs" },
    ].sort((a, b) => a.heading.localeCompare(b.heading));
    const [activeItem, setActiveItem] = useState<{
        heading: string;
        key: string;
    }>(items[0]);

    return (
        <div className="flex h-screen">
            <Sidebar
                items={items}
                activeItem={activeItem}
                onItemSelect={setActiveItem}
            />
            <Content item={activeItem} />
        </div>
    );
}

export default App;
