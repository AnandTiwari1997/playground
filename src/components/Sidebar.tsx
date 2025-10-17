import { useState } from "react";

export interface SidebarProps {
    items: { heading: string; key: string }[];
    activeItem: { heading: string; key: string };
    onItemSelect?: (item: { heading: string; key: string }) => void;
}

const Sidebar = (props: SidebarProps) => {
    const { items, activeItem, onItemSelect } = props;

    const [search, setSearch] = useState("");
    const [active, setActive] = useState<string>(activeItem.key);

    const filteredItems = items.filter(
        (item) =>
            item.heading.toLowerCase().includes(search.toLowerCase()) ||
            item.key.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <aside className="w-64 border-r bg-gray-50 p-4">
            <h2 className="text-xl font-bold text-gray-800 px-4 pb-2 tracking-tight text-center mb-4">
                Components
            </h2>
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full mb-4 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            />
            <ul className="space-y-2 flex flex-col items-center">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                        <li key={item.key} className="w-full">
                            <button
                                type="button"
                                className={`relative cursor-pointer text-center w-full px-4 py-2 rounded-lg
                  ${
                      active === item.key
                          ? "bg-blue-100 text-blue-700 font-bold"
                          : "hover:bg-blue-50 hover:text-blue-600 text-gray-700"
                  }
                `}
                                onClick={() => {
                                    setActive(item.key);
                                    onItemSelect?.(item);
                                }}
                            >
                                {item.heading}
                            </button>
                        </li>
                    ))
                ) : (
                    <li className="text-gray-400 text-center w-full">
                        No results
                    </li>
                )}
            </ul>
        </aside>
    );
};

export default Sidebar;
