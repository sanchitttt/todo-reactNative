import React from "react";
import Svg, {
    SvgProps,
    G,
    Circle,
    Path,
    Defs,
    ClipPath,
    Rect,
} from "react-native-svg";

export function ThreeVerticalDots() {
    return (
        <Svg
            fill="#fff"
            height={100}
            width={100}
            id="Capa_1"
            viewBox="0 0 32.055 32.055"
            transform="rotate(90)"
            stroke="#fff"
        >
            <G id="SVGRepo_bgCarrier" strokeWidth={0} />
            <G
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <G id="SVGRepo_iconCarrier">
                <G>
                    <Path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967 C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967 s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967 c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z" />
                </G>
            </G>
        </Svg>
    )
}

export const AddIcon = (props: SvgProps) => (
    <Svg
      width={45}
      height={45}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G id="SVGRepo_bgCarrier" strokeWidth={0} />
      <G
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G id="SVGRepo_iconCarrier">
        <G clipPath="url(#clip0_429_10970)">
          <Circle
            cx={12}
            cy={11.999}
            r={9}
            stroke="#2ca03f"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M12 9V15"
            stroke="#2ca03f"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M9 12H15"
            stroke="#2ca03f"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_429_10970">
            <Rect width={24} height={24} fill="white" />
          </ClipPath>
        </Defs>
      </G>
    </Svg>
  );

export default ThreeVerticalDots