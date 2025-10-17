import { Button, ButtonProps, Icon, IconProps, Tooltip, TooltipProps } from "@minimalist/ui";
import { ComponentConfig } from "../components/ComponentCard";

export const configs: ComponentConfig<any>[] = [
    {
        displayName: "Tooltip",
        title: "Tooltip Top",
        canvas: Tooltip as React.ComponentType<TooltipProps>,
        props: { content: "Tooltip content", position: { placement: 'top', anchor: 'middle' } },
        children: [
            {
                title: "Hover me",
                canvas: Button as React.ComponentType<ButtonProps>,
                props: { label: "Hover me", variant: "primary", onClick: () => { } }
            }
        ]
    },
    {
        displayName: "Tooltip",
        title: "Tooltip Left",
        canvas: Tooltip as React.ComponentType<TooltipProps>,
        props: { content: "Tooltip content", position: { placement: 'left', anchor: 'middle' } },
        children: [
            {
                title: "Hover me",
                canvas: Button as React.ComponentType<ButtonProps>,
                props: { label: "Hover me", variant: "primary", onClick: () => { } }
            }
        ]
    },
    {
        displayName: "Tooltip",
        title: "Tooltip Right",
        canvas: Tooltip as React.ComponentType<TooltipProps>,
        props: { content: "Tooltip content", position: { placement: 'right', anchor: 'middle' } },
        children: [
            {
                title: "Hover me",
                canvas: Button as React.ComponentType<ButtonProps>,
                props: { label: "Hover me", variant: "primary", onClick: () => { } }
            }
        ]
    },
    {
        displayName: "Tooltip",
        title: "Tooltip Bottom",
        canvas: Tooltip as React.ComponentType<TooltipProps>,
        props: { content: "Tooltip content", position: { placement: 'bottom', anchor: 'middle' } },
        children: [
            {
                title: "Hover me",
                canvas: Button as React.ComponentType<ButtonProps>,
                props: { label: "Hover me", variant: "primary", onClick: () => { } }
            }
        ]
    },
    {
        displayName: "Tooltip",
        title: "Tooltip on Icon",
        canvas: Tooltip as React.ComponentType<TooltipProps>,
        props: { content: "Home", position: { placement: 'bottom', anchor: 'middle' } },
        children: [
            {
                title: "",
                canvas: Icon as React.ComponentType<IconProps>,
                props: { icon: "home", variant: "solid" }
            }
        ]
    }
];