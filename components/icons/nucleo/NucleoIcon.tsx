import Image from "next/image";

interface NucleoIconProps {
  name: string;
  size?: number;
  className?: string;
  style?: "outline" | "fill" | "glyph-duo" | "outline-duo";
}

export const NucleoIcon: React.FC<NucleoIconProps> = ({
  name,
  size = 40,
  className = "",
  style = "outline",
}) => {
  const iconPath = `/icons/nucleo/nucleo_ui_svg_v1.6.2/${style}/${name}`;

  return (
    <div className={`flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <Image
        src={iconPath}
        alt={name.split("/").pop()?.replace(".svg", "") || "icon"}
        width={size}
        height={size}
        className="w-full h-full"
        unoptimized
      />
    </div>
  );
};
