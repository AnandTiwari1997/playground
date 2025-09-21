import { useState } from "react"
import ExamplesView from "./ExamplesView"
import PlaygroundView from "./PlaygroundView"
import { configs as allConfigs } from './../configs/configs'

export interface ContentProps {
    item: { heading: string, key: string }
}

export const Content = (props: ContentProps) => {
    const [activeTab, setActiveTab] = useState<'playground' | 'examples'>('playground');
    const { item } = props;

    return (
        <div className="flex-1 flex flex-col p-4">
            <div className="flex items-end bg-transparent border-b border-gray-200">
                <button
                    className={`relative px-6 py-2 rounded-t-lg font-semibold
                        ${activeTab === 'playground'
                            ? 'bg-white text-blue-600 border-b-2 border-blue-500 z-10'
                            : 'text-gray-500 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-300'}
                    `}
                    onClick={() => setActiveTab('playground')}
                    tabIndex={0}
                >
                    Playground
                </button>
                <button
                    className={`relative px-6 py-2 rounded-t-lg font-semibold
                        ${activeTab === 'examples'
                            ? 'bg-white text-blue-600 border-b-2 border-blue-500 z-10'
                            : 'text-gray-500 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-300'}
                    `}
                    onClick={() => setActiveTab('examples')}
                    tabIndex={0}
                >
                    Examples
                </button>
            </div>
            <div className="flex-1 overflow-auto bg-white rounded-t-lg mt-0">
                {activeTab === 'playground' ? <PlaygroundView config={item.key as keyof typeof allConfigs} /> : <ExamplesView config={item.key as keyof typeof allConfigs} />}
            </div>
        </div>
    )
}