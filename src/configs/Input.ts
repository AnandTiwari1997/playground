import { Input, InputProps } from "@minimalist/ui";
import { ComponentConfig } from "../components/ComponentCard";

function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log("Input changed:", event.target.value);
}

export const configs: ComponentConfig<InputProps>[] = [
    {
        title: "Input Default",
        canvas: Input as React.ComponentType<InputProps>,
        props: { placeholder: "Enter text", onChange }
    },
    {
        title: "Input with Label",
        canvas: Input as React.ComponentType<InputProps>,
        props: { label: "Username", placeholder: "Enter username", onChange }
    },
    {
        title: "Input Disabled",
        canvas: Input as React.ComponentType<InputProps>,
        props: { disabled: true, placeholder: "Disabled input", onChange }
    },
    {
        title: "Input with Icon",
        canvas: Input as React.ComponentType<InputProps>,
        props: { icon: 'search', placeholder: "Search", onChange }
    },
    {
        title: "Input with Leading Icon",
        canvas: Input as React.ComponentType<InputProps>,
        props: { icon: 'user', label: "User", iconPlacement: 'leading', placeholder: "Enter user", onChange }
    },
    {
        title: "Input with Trailing Icon",
        canvas: Input as React.ComponentType<InputProps>,
        props: { icon: 'lock', label: "Password", iconPlacement: 'trailing', type: "password", placeholder: "Enter password", onChange }
    },
    {
        title: "Input Small",
        canvas: Input as React.ComponentType<InputProps>,
        props: { size: 'sm', placeholder: "Small input", onChange }
    },
    {
        title: "Input Medium",
        canvas: Input as React.ComponentType<InputProps>,
        props: { size: 'md', placeholder: "Medium input", onChange }
    },
    {
        title: "Input Large",
        canvas: Input as React.ComponentType<InputProps>,
        props: { size: 'lg', placeholder: "Large input", onChange }
    },
    {
        title: "Input Primary",
        canvas: Input as React.ComponentType<InputProps>,
        props: { size: 'sm', placeholder: "Placeholder", onChange }
    },
    {
        title: "Input Outline",
        canvas: Input as React.ComponentType<InputProps>,
        props: { size: 'sm', placeholder: "Placeholder", variant: "outline", onChange }
    },
    {
        title: "Input Ghost",
        canvas: Input as React.ComponentType<InputProps>,
        props: { size: 'sm', placeholder: "Placeholder", variant: "ghost", onChange }
    },
];