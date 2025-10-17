import React, { useState } from "react";

const isEventProp = (key: string) => /^on[A-Z]/.test(key);

const formatValue = (value: unknown) => {
    if (typeof value === "string") return `"${value}"`;
    if (typeof value === "boolean" || value === null) return String(value);
    if (typeof value === "function") return "{() => {}}";
    return `{${JSON.stringify(value)}}`;
};

export interface ComponentConfig<TProps = any> {
    displayName?: string;
    title: string;
    canvas: React.ComponentType<TProps>;
    props: TProps;
    children?: (ComponentConfig<TProps> & { displayName?: string })[] | string;
}

export interface ComponentCardProps<T> {
    data: ComponentConfig<T>;
}

export const ComponentCard = <T extends object>(
    props: ComponentCardProps<T>
) => {
    const { data } = props;
    const Component = data.canvas;

    const [activeTab, setActiveTab] = useState("props");

    const propEntries = Object.entries(data.props);
    const nonEventProps = propEntries.filter(
        ([key]) => !isEventProp(key) && key !== "code"
    );
    const eventProps = propEntries.filter(([key]) => isEventProp(key));

    const componentName = data.displayName || "Component";

    const highlightJSX = (componentName: any, props: T) => {
        const formattedProps = Object.entries(props)
            .filter(([key]) => key !== "code") // Skip code key
            .map(([key, value]) => {
                const formattedVal = formatValue(value);

                const isString = typeof value === "string";
                const isBoolean = typeof value === "boolean";
                const isFunction = typeof value === "function";

                return (
                    `  ` +
                    `<span class="text-purple-500">${key}</span>=` +
                    (isString
                        ? `<span class="text-green-500">"${value}"</span>`
                        : isBoolean
                        ? `<span class="text-yellow-300">${value}</span>`
                        : isFunction
                        ? `<span class="text-pink-400">{() => {}}</span>`
                        : `<span class="text-blue-300">{${JSON.stringify(
                              value
                          )}}</span>`)
                );
            })
            .join("\n");

        return `
  <span class="text-blue-500">&lt;${componentName}</span>
  ${formattedProps}
  <span class="text-blue-500">/&gt;</span>
  `.trim();
    };

    // Recursive JSX generator
    const generateJSX = (
        component: ComponentConfig<any>,
        displayName: string = "Component",
        indentLevel = 0
    ): string => {
        const indent = "  ".repeat(indentLevel);
        const { canvas, props = {}, children } = component;

        const tag = typeof canvas === "string" ? canvas : displayName;

        const filteredProps = Object.entries(props).filter(
            ([key]) => key !== "children"
        );

        const propsString = filteredProps
            .map(([key, value]) => {
                return `${"  ".repeat(
                    indentLevel + 1
                )}<span class="text-indigo-500">${key}</span>=${formatJSXValue(
                    value
                )}`;
            })
            .join("\n");

        // If children is a string
        if (typeof children === "string") {
            return `
${indent}<span class="text-sky-500">&lt;${tag}</span>${
                propsString ? "\n" + propsString : ""
            }
${indent}<span class="text-sky-500">&gt;</span>
${"  ".repeat(indentLevel + 1)}<span class="text-amber-400">"${children}"</span>
${indent}<span class="text-sky-500">&lt;/${tag}&gt;</span>
`.trim();
        }

        // If children is array of ComponentConfig
        const childrenString = Array.isArray(children)
            ? children
                  .map((child) =>
                      generateJSX(child, child.displayName, indentLevel + 1)
                  )
                  .join("\n")
            : "";

        // If children exist, use opening/closing tags
        if (childrenString) {
            return `
${indent}<span class="text-sky-500">&lt;${tag}</span>${
                propsString ? "\n" + propsString : ""
            }
${indent}<span class="text-sky-500">&gt;</span>
${childrenString}
${indent}<span class="text-sky-500">&lt;/${tag}&gt;</span>
`.trim();
        }

        // Self-closing if no children
        return `
${indent}<span class="text-sky-500">&lt;${tag}</span>${
            propsString ? "\n" + propsString : ""
        }
${indent}<span class="text-sky-500">/&gt;</span>
`.trim();
    };

    // Helper to format values with coloring
    const formatJSXValue = (value: any): string => {
        if (typeof value === "string") {
            return `<span class="text-green-500">"${value}"</span>`;
        }
        if (typeof value === "boolean" || value === null) {
            return `<span class="text-orange-400">${value}</span>`;
        }
        if (typeof value === "function") {
            return `<span class="text-pink-400">{() => {}}</span>`;
        }
        return `<span class="text-gray-400">{${JSON.stringify(value)}}</span>`;
    };

    const renderTable = (rows: [any, any][]) => (
        <div className="overflow-x-auto rounded-sm">
            <table className="min-w-full text-sm text-left border-separate border-spacing-0">
                <tbody>
                    {rows.map(([key, value]: any, index: number) => (
                        <tr
                            key={key}
                            className={`${
                                index % 2 === 0 ? "bg-white" : "bg-gray-50"
                            }`}
                        >
                            <td className="px-4 py-3 font-mono text-gray-800 align-top">
                                {key}
                            </td>
                            <td className="px-4 py-3 font-mono text-gray-600 align-top">
                                {typeof value === "function"
                                    ? "() => {}"
                                    : String(value)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    const renderComponent = (config: ComponentConfig<any>): React.ReactNode => {
        const { canvas: Component, props = {}, children } = config;

        let resolvedChildren: React.ReactNode = null;

        if (typeof children === "string") {
            resolvedChildren = children;
        } else if (Array.isArray(children)) {
            resolvedChildren = children.map((child, index) => (
                renderComponent(child)
            ));
        }

        return <Component {...props}>{resolvedChildren}</Component>;
    };

    return (
        <div className="m-2 rounded-xl shadow-md bg-white p-6">
            {/* Title */}
            <h2 className="text-xl mb-2 font-semibold text-gray-800">
                {data.title}
            </h2>

            {/* Component Preview */}
            <div className="bg-gray-50 p-6 rounded-md flex justify-center items-center min-h-[120px] border mb-2">
                {renderComponent(data)}
            </div>

            {/* Tabs */}
            <div className="border-b mb-2 border-gray-200">
                <nav className="flex space-x-4 align-item">
                    {["props", "events", "code"].map((tab) => (
                        <button
                            key={tab}
                            className={`h-10 capitalize border-b-2 font-medium transition-all ${
                                activeTab === tab
                                    ? "border-blue-600 text-blue-600"
                                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Tab Content */}
            <div>
                {activeTab === "props" && renderTable(nonEventProps)}
                {activeTab === "events" && renderTable(eventProps)}
                {activeTab === "code" && (
                    <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm whitespace-pre">
                        <code
                            className="language-jsx"
                            dangerouslySetInnerHTML={{
                                __html: generateJSX(data, data.displayName),
                            }}
                        />
                    </pre>
                )}
            </div>
        </div>
    );
};
