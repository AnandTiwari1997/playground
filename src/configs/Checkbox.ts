import { Checkbox, CheckboxProps } from "@minimalist/ui";
import { ComponentConfig } from "../components/ComponentCard";

function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log("Checkbox changed:", event.target.checked);
}

export const configs: ComponentConfig<CheckboxProps>[] = [
    {
        title: "Checkbox Default",
        canvas: Checkbox as React.ComponentType<CheckboxProps>,
        props: { label: "Check me", onChange }
    },
    {
        title: "Checkbox Disabled",
        canvas: Checkbox as React.ComponentType<CheckboxProps>,
        props: { disabled: true, label: "Disabled checkbox", onChange }
    },
    {
        title: "Checkbox Checked",
        canvas: Checkbox as React.ComponentType<CheckboxProps>,
        props: { defaultChecked: true, label: "Checked by default", onChange }
    },
    {
        title: "Checkbox Checked",
        canvas: Checkbox as React.ComponentType<CheckboxProps>,
        props: { indeterminate: true, label: "Indeterminate", onChange }
    },
];