import { Select, SelectedItemProps, SelectOption, SelectProps } from "@minimalist/ui";
import { ComponentConfig } from "../components/ComponentCard";

export const configs: ComponentConfig<any>[] = [
    {
        displayName: "Select",
        title: "Select Basic",
        canvas: Select as React.ComponentType<SelectProps>,
        props: {
            onChange: (value: any) => console.log(value),
        },
        children: [
            { displayName: 'SelectItem', title: "Apple", canvas: Select.Item as React.ComponentType<SelectedItemProps>, props: { value: "apple", label: "Apple", selected: true } },
            { displayName: 'SelectItem', title: "Banana", canvas: Select.Item as React.ComponentType<SelectedItemProps>, props: { value: "banana", label: "Banana" } },
            { displayName: 'SelectItem', title: "Mango", canvas: Select.Item as React.ComponentType<SelectedItemProps>, props: { value: "mango", label: "Mango" } }
        ]
    }
]