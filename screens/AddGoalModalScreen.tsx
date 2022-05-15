import { StatusBar } from "expo-status-bar";
import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  Input,
  Switch,
  TextArea,
  useColorMode,
  VStack,
} from "native-base";
import { useState } from "react";
import { Platform, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Goal } from "../contexts/user/GoalContext";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function AddGoalModal() {
  const [goal, setGoal] = useState<Goal>({} as Goal);

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <Box flex={1} padding="6">
      <Heading size="2xl">Add a goal</Heading>
      <VStack width="90%" mx="3" maxW="300px">
        <FormControl isRequired marginTop={3}>
          <FormControl.Label
            _text={{
              fontSize: "md",
              bold: true,
            }}
          >
            Title
          </FormControl.Label>
          <Input
            size="lg"
            placeholder="Learn to code"
            value={goal.title}
            onChangeText={(value) => setGoal({ ...goal, title: value })}
          />
          <FormControl.HelperText
            _text={{
              fontSize: "xs",
            }}
          >
            Title of your goal
          </FormControl.HelperText>
          <FormControl.ErrorMessage
            _text={{
              fontSize: "xs",
            }}
          >
            Error Name
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl marginTop={3}>
          <FormControl.Label
            _text={{
              bold: true,
              fontSize: "md",
            }}
          >
            Description
          </FormControl.Label>
          <TextArea
            size="lg"
            autoCompleteType="off"
            h={20}
            placeholder="Text Area Placeholder"
            // w="75%"
            maxW="300"
            value={goal.description}
            onChangeText={(value) => setGoal({ ...goal, description: value })}
          />
        </FormControl>
        <FormControl marginTop={3}>
          <HStack w="100%" justifyContent={"space-between"}>
            <FormControl.Label
              _text={{
                bold: true,
                fontSize: "md",
              }}
            >
              Due
            </FormControl.Label>
            <Switch onValueChange={(value) => setShow(value)} value={show} />
          </HStack>
          {/* <Button onPress={showDatepicker}>
            <Text>
              {goal.dueDate ? goal.dueDate.toString() : "Select Date"}
            </Text>
          </Button> */}
          {show && (
            <DateTimePicker
              style={{ marginTop: 10 }}
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              onChange={onChange}
            />
          )}
        </FormControl>
      </VStack>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </Box>
  );
}

// function BuildingAFormExample() {
//   const [formData, setData] = useState({});
//   return (

//   );
// }

const styles = StyleSheet.create({
  container: {
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
