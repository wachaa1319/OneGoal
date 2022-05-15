import { ViewProps } from "../Themed";
import { View } from "react-native";

export function Column(props: ViewProps) {
  const { children, style } = props;
  return (
    <View
      style={[
        {
          flexDirection: "column",
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

export function CenteredColumn(props: ViewProps) {
  const { children, style } = props;
  return (
    <View
      style={[
        {
          justifyContent: "center",
          flexDirection: "column",
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}
