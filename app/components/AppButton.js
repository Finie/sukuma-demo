import { TouchableOpacity } from "react-native";
import React from "react";
import AppText from "./AppText";
import AppTheme from "../config/AppTheme";

const AppButton = ({
  children,
  style,
  textstyle,
  icon,
  onPress,
  isLoading = false,
  ...otherProps
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      {...otherProps}
      style={[
        {
          justifyContent: "center",
          alignItems: "center",
          height: 56,
          width: "100%",
          backgroundColor: AppTheme.green,
          borderRadius: 28,
          padding: 8,
          elevation: 3,
          flexDirection: "row",
        },
        style,
      ]}
    >
      <AppText
        style={[
          {
            color: AppTheme.white,
          },
          textstyle,
        ]}
      >
        {children}
      </AppText>
    </TouchableOpacity>
  );
};

export default AppButton;
