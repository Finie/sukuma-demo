import {
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import React, { useState } from "react";
import AppTheme from "../config/AppTheme";
import Screen from "../components/Screen";
import GoalItem from "../components/GoalItem";
import AppButton from "../components/AppButton";
import NotificationItem from "../components/NotificationItem";

export default function HomeScreen() {
  const [isVisible, setIsvisible] = useState(false);
  return (
    <Screen isSnackVisible={isVisible} onSnackClose={() => setIsvisible(false)}>
      <View style={{ flex: 1 }}>
        <GoalItem title={"Goal 1"} />
        <GoalItem title={"Goal 2"} />
      </View>

      <View>
        <AppButton onPress={() => setIsvisible(true)}>Show Snackbar</AppButton>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: AppTheme.primary,
    flexGrow: 1,
    width: "100%",
  },
});
