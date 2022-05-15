import { Ionicons } from "@expo/vector-icons";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Icon,
  IconButton,
} from "native-base";
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
  // const { goalNow } = useContext(GoalContext);
  const goalNow = {
    title: "Learn to code",
    description: "Learn to code adadad",
    dueDate: new Date(),
  };

  return (
    <Box style={styles.container}>
      <SafeTop />
      <HStack justifyContent={"space-between"}>
        <Heading size="2xl">One Goal</Heading>
        {/* // TODO menu settings, show finished goals, edit goal, share goals to
        image. */}
        <IconButton
          icon={<Icon as={Ionicons} name="menu" />}
          onPress={() => navigation.goBack()}
        />
      </HStack>

      <Center>
        {goalNow.title ? (
          <Box>
            <Heading>{goalNow.title}</Heading>
            <Heading>{goalNow.description}</Heading>
            Due
            <Heading>{goalNow.dueDate.getDate()}</Heading>
            <Heading>Problems</Heading>
            // TODO show oldest 4<Heading>Todos</Heading>
            // TODO show newest 4<Heading>Logs</Heading>
            // TODO List Logs, newer = top, add log // TODO Finished Button,
            save
          </Box>
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
      </Center>
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
