import { ComponentCard, ComponentConfig } from "./ComponentCard";
import { configs as allConfigs } from "./../configs/configs";

export interface ExamplesViewProps {
    config: keyof typeof allConfigs;
}

const ExamplesView = (props: ExamplesViewProps) => {
    const { config } = props;
    const configs = allConfigs[config].config as Array<ComponentConfig<any>>;

    return (
        <div className="overflow-auto grid gap-6 grid-cols-[repeat(auto-fit,minmax(550px,1fr))]">
            {configs.map((config, idx) => {
                return <ComponentCard key={idx} data={config} />;
            })}
        </div>
    );
};

export default ExamplesView;
