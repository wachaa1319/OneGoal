import { useContext } from "react";
import { Button, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { TitleText } from "../components/StyledText";
import { Text, View } from "../components/Themed";
import { SafeTop } from "../components/utils/SafeTop";
import { GoalContext } from "../contexts/user/GoalContext";
import { RootStackScreenProps } from "../types";

export default function SettingsScreen({
  navigation,
}: RootStackScreenProps<"GoalNow">) {
  const { goalNow } = useContext(GoalContext);
  return (
    <View style={styles.container}>
      <SafeTop />
      <Text style={styles.title}>One Goal</Text>

      <View style={styles.centerContainer}>
        {goalNow.title ? (
          <Text>goal</Text>
        ) : (
          <View>
            <TitleText>Add a main goal</TitleText>
            {/* <Button
              title="Add Goal"
              onPress={() => {
                navigation.navigate("Modal");
              }}
            /> */}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
