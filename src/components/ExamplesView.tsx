import { ComponentCard, ComponentConfig } from "./ComponentCard";
import { Button, ButtonProps } from '@minimalist/ui'

const configs: ComponentConfig<ButtonProps>[] = [
    {
        title: "Button",
        canvas: Button as React.ComponentType<ButtonProps>,
        props: { label: "Click Me", variant: "primary", allowClickEffect: true }
    },
      {
        title: "Button",
        canvas: Button as React.ComponentType<ButtonProps>,
        props: { variant: "outline", size: "md" },
        children: 'Click Me'
    }
];

const ExamplesView = () => {
    return (
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(550px,1fr))]">
            {configs.map((config, idx) => (
                <ComponentCard key={idx} displayName="Button" data={config} />
            ))}
        </div>
    );
};

export default ExamplesView;
