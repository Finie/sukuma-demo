import { StyleSheet, Text } from "react-native";
import React from "react";

const AppText = ({ children, style, ...otherProps }) => {
  return (
    <Text {...otherProps} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
  },
});

export default AppText;
