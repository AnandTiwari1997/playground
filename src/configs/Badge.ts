import { Badge, BadgeProps } from "@minimalist/ui";
import { ComponentConfig } from "../components/ComponentCard";

export const configs: ComponentConfig<BadgeProps>[] = [
    {
        title: "Badge Solid",
        canvas: Badge as React.ComponentType<BadgeProps>,
        props: { badgeContent: "3", variant: "solid" }
    },
    {
        title: "Badge Outline",
        canvas: Badge as React.ComponentType<BadgeProps>,
        props: { badgeContent: "3", variant: "outline" }
    }
]
