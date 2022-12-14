import React from "react";

import {
  StyleProp,
  Text,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
  ViewStyle,
} from "react-native";

import { useTheme } from "../../hooks/useTheme";
import useStyles from "./styles";

interface TextInputProps extends RNTextInputProps {
  style?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<ViewStyle>;
  title?: string;
}

export function TextInput({
  style,
  textInputStyle,
  title,
  ...props
}: TextInputProps) {
  const { colors } = useTheme();
  const styles = useStyles({ colors });

  return (
    <View style={style}>
      {!!title && <Text style={styles.title}>{title}</Text>}
      <RNTextInput
        style={[styles.textInput, textInputStyle]}
        placeholderTextColor={colors.textInputPlaceholder}
        {...props}
      />
    </View>
  );
}
