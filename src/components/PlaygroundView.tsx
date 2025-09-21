import { PropControls } from "./PropControls";
import { PreviewArea } from "./PreviewArea";
import { configs as allConfigs } from "./../configs/configs";
import { useEffect, useState } from "react";

export interface PlaygroundViewProps {
    config: keyof typeof allConfigs;
}

const PlaygroundView = (props: PlaygroundViewProps) => {
    const { config } = props;
    const component = allConfigs[config].config[0].canvas;
    const metadata = allConfigs[config].metadata;
    const defaultValue = allConfigs[config].defaults;

    const [previewAreaProps, setPreviewAreaProps] = useState(
        {} as { [key: string]: any }
    );

    useEffect(() => {
        const initialProps: { [key: string]: any } = {};
        Object.keys(metadata).forEach((key) => {
            if (defaultValue[key as keyof typeof defaultValue]) {
                initialProps[key] =
                    defaultValue[key as keyof typeof defaultValue];
            } else if (metadata[key].defaultValue) {
                initialProps[key] = metadata[key].defaultValue
                    ? metadata[key].defaultValue.value.replaceAll("'", "")
                    : metadata[key].type === "boolean"
                    ? false
                    : undefined;
            }
        });
        setPreviewAreaProps(initialProps);
    }, [metadata]);

    return (
        <div className="flex h-full">
            <div className="overflow-auto w-1/2 border-r p-4">
                <PropControls
                    metadata={metadata}
                    defaults={defaultValue}
                    onChange={(propName: string, value: any) =>
                        setPreviewAreaProps({
                            ...previewAreaProps,
                            [propName]: value,
                        })
                    }
                />
            </div>
            <div className="flex-1 p-4 flex items-center justify-center">
                <PreviewArea
                    metadata={previewAreaProps}
                    component={component}
                />
            </div>
        </div>
    );
};

export default PlaygroundView;
