import { Button, ButtonProps } from "@minimalist/ui";
import { ComponentConfig } from "../components/ComponentCard";

function onClick() {
    console.log("Button clicked!");
}

export const configs: ComponentConfig<ButtonProps>[] = [
    {
        title: "Button Primary",
        canvas: Button as React.ComponentType<ButtonProps>,
        props: { label: "Primary", variant: "primary", onClick }
    },
    {
        title: "Button Outline",
        canvas: Button as React.ComponentType<ButtonProps>,
        props: { variant: "outline", onClick },
        children: 'Outline'
    },
    {
        title: "Button Ghost",
        canvas: Button as React.ComponentType<ButtonProps>,
        props: {
            variant: 'ghost',
            label: 'Ghost',
            onClick
        }
    },
    {
        title: "Button Flat",
        canvas: Button as React.ComponentType<ButtonProps>,
        props: {
            variant: 'flat',
            onClick
        },
        children: 'Flat'
    },
    {
        title: "Button Small",
        canvas: Button as React.ComponentType<ButtonProps>,
        props: {
            size: 'sm',
            onClick
        },
        children: 'Small'
    },
    {
        title: "Button Medium",
        canvas: Button as React.ComponentType<ButtonProps>,
        props: {
            size: 'md',
            onClick
        },
        children: 'Medium'
    },
    {
        title: "Button Large",
        canvas: Button as React.ComponentType<ButtonProps>,
        props: {
            size: 'lg',
            onClick
        },
        children: 'Large'
    },
    {
        title: "Disabled Button",
        canvas: Button as React.ComponentType<ButtonProps>,
        props: {
            disabled: true,
            onClick
        },
        children: 'Disabled'
    },
    {
        title: "Button with Effect",
        canvas: Button as React.ComponentType<ButtonProps>,
        props: {
            allowClickEffect: true,
            onClick
        },
        children: 'Button'
    },
    {
        title: "Button With Icon",
        canvas: Button as React.ComponentType<ButtonProps>,
        props: {
            icon: 'home',
            onClick
        },
        children: 'Button'
    },
    {
        title: "Button With Icon",
        canvas: Button as React.ComponentType<ButtonProps>,
        props: {
            icon: 'arrowDown',
            label: 'Download',
            iconPlacement: 'trailing',
            onClick
        }
    },
];
