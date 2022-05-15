import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { ViewProps } from "../Themed";

export const DismissKeyboardView = (props: ViewProps) => {
  const { children, style, ...otherProps } = props;
  return (
    <TouchableWithoutFeedback
      {...otherProps}
      style={style || { flex: 1 }}
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      {children}
    </TouchableWithoutFeedback>
  );
};

export const AvoidingDismissKeyboardView = (
  props: ViewProps & {
    behavior?: "padding" | "height" | "position";
  }
) => {
  const { children, style, ...otherProps } = props;
  return (
    <TouchableWithoutFeedback
      style={style || { flex: 1 }}
      {...otherProps}
      onPress={() => Keyboard.dismiss()}
    >
      <KeyboardAvoidingView
        style={style || { flex: 1 }}
        // behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
