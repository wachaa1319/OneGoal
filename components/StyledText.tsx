import { Text, TextProps, useThemeColor } from "./Themed";

export function MonoText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
  );
}

export function TitleText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[
        {
          fontSize: 36,
        },
        props.style,
      ]}
    />
  );
}

export function SubtitleText(props: TextProps) {
  return <Text {...props} style={[{ fontSize: 24 }, props.style]} />;
}

export function BodyText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontSize: 16 }]} />;
}

// export function AccentText(
//   props: TextProps & { size?: "s" | "m" | "l" | "xl" }
// ) {
//   const { style, lightColor, darkColor, ...otherProps } = props;
//   const color = useThemeColor(
//     { light: lightColor, dark: darkColor },
//     "accentText"
//   );
//   const fontSize =
//     props.size === "s"
//       ? 16
//       : props.size === "m"
//       ? 20
//       : props.size === "l"
//       ? 24
//       : 30;
//   return (
//     <Text
//       {...otherProps}
//       {...shadow.glow1}
//       style={[
//         { fontSize: fontSize, fontWeight: "bold", color: color },
//         props.style,
//       ]}
//     />
//   );
// }
