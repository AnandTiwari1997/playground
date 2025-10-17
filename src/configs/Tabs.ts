import { Tab, TabProps, Tabs, TabsProps } from "@minimalist/ui";
import { ComponentConfig } from "../components/ComponentCard";

export const configs: ComponentConfig<any>[] = [
    {
        displayName: "Tabs",
        title: "Tab List",
        canvas: Tabs as React.ComponentType<TabsProps>,
        props: {
            onTabChange: (value: any) => console.log(value),
        },
        children: [
            {
                displayName: "Tab",
                title: "Tab 1",
                canvas: Tab as React.ComponentType<TabProps>,
                props: {
                    value: 'tab1', label: 'Tab One'
                }
            },
            {
                displayName: "Tab",
                title: "Tab 1",
                canvas: Tab as React.ComponentType<TabProps>,
                props: { value: 'tab2' },
                children: "Tab Two"
            }
        ]
    }
]