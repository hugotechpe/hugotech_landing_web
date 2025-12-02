import type { IconSvgProps } from "@/types";
import type * as React from "react";

import MentoringCoachingIcon from "@/common/icons/custom/MentoringCoachingIcon";
import EquiposAltoRendimientoIcon from "@/common/icons/custom/EquiposAltoRendimientoIcon";
import LiderazgoAgilTransformaIcon from "@/common/icons/custom/LiderazgoAgilTransformaIcon";

export type IconComponent = React.FC<IconSvgProps>;

export enum IconKey {
  mentoring = "mentoring",
  equipos = "equipos",
  liderazgo = "liderazgo",
}

export const IconComponentMap: Record<IconKey, IconComponent> = {
  [IconKey.mentoring]: MentoringCoachingIcon,
  [IconKey.equipos]: EquiposAltoRendimientoIcon,
  [IconKey.liderazgo]: LiderazgoAgilTransformaIcon,
};
