import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import AppTheme from "../config/AppTheme";
import AppText from "./AppText";

const NotificationItem = ({ onClose, isVisible }) => {
  const [textChanged, setTextChanged] = useState();

  if (!isVisible) return null;

  return (
    <View
      style={{
        backgroundColor: AppTheme.pink,
        padding: 8,
        zIndex: 10,
        position: "absolute",
        width: "100%",
        alignSelf: "center",
        borderRadius: 16,
        flexDirection: "row",
      }}
    >
      <TouchableOpacity
        onPress={() => setTextChanged(!textChanged)}
        style={{ flex: 5 }}
      >
        <AppText style={{ color: AppTheme.white, padding: 8 }}>
          {textChanged
            ? `User Clicked snackbar`
            : `This is an in app notification snackbar tho show the user when they perform an action, Clicking it should change the text`}
        </AppText>
      </TouchableOpacity>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={onClose}>
          <AntDesign name="closecircleo" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotificationItem;
