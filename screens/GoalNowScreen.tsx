import { Box, Button, Heading } from "native-base";
import { useContext } from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { TitleText } from "../components/StyledText";
import { Text, View } from "../components/Themed";
import { SafeTop } from "../components/utils/SafeTop";
import { GoalContext } from "../contexts/user/GoalContext";
import { RootStackScreenProps } from "../types";

export default function GoalNowScreen({
  navigation,
}: RootStackScreenProps<"GoalNow">) {
  const { goalNow } = useContext(GoalContext);
  return (
    <Box style={styles.container}>
      <SafeTop />
      <Heading size="2xl">One Goal</Heading>

      <Box style={styles.centerContainer}>
        {goalNow.title ? (
          <Text>goal</Text>
        ) : (
          <Box>
            <Heading>Add a main goal</Heading>
            <Button
              size="lg"
              onPress={() => {
                navigation.navigate("AddGoal");
              }}
            >
              Add Goal
            </Button>
          </Box>
        )}
      </Box>
    </Box>
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
