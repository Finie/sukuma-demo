import { View, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppTheme from "../config/AppTheme";
import AppButton from "./AppButton";
import AppText from "./AppText";

const GoalItem = ({ title }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        backgroundColor: AppTheme.white,
        borderRadius: 12,
        marginVertical: 8,
      }}
    >
      <View style={{ flex: 1, padding: 8, flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <AppText style={{ fontSize: 18 }}>{title}</AppText>
          <AppText style={{ fontSize: 14, color: AppTheme.lightGray }}>
            KES 12,000
          </AppText>
          <View style={{ height: 20 }}></View>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: AppTheme.green,
              padding: 6,
              borderRadius: 6,
            }}
          >
            <AppText style={{ color: AppTheme.white }}>Finish Goal</AppText>
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderLeftWidth: 1,
          borderLeftColor: AppTheme.lightGray,
        }}
      >
        <MaterialCommunityIcons name="chevron-right" size={30} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;
