import React from "react";

import { StyleSheet, Text, TextInput as TextInputRN, View } from "react-native";

import { useTheme } from "../../hooks/useTheme";

const useStyles = ({ colors }: { colors: any }) =>
  StyleSheet.create({
    title: {
      marginHorizontal: 24,
      marginTop: 16,
      fontSize: 16,
      fontWeight: "500",
      color: colors.text,
    },
    textInput: {
      backgroundColor: colors.textInputBackground,
      color: colors.textInputText,
      marginVertical: 16,
      marginHorizontal: 24,
      borderRadius: 10,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
  });

interface TextInputProps {
  style?: any;
  title?: string;
}

export function TextInput({ style, title, ...props }: TextInputProps) {
  const { colors } = useTheme();
  const styles = useStyles({ colors });

  return (
    <View style={style}>
      {!!title && <Text style={styles.title}>{title}</Text>}
      <TextInputRN
        style={styles.textInput}
        placeholderTextColor={colors.textInputPlaceholder}
        {...props}
      />
    </View>
  );
}
