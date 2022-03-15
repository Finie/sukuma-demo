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

import React from "react";
import AppTheme from "../config/AppTheme";
import AppText from "./AppText";
import NotificationItem from "./NotificationItem";

const Screen = ({ children, isSnackVisible, onSnackClose }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={"transparent"}
        barStyle="light-content"
      />
      <View style={styles.textviewCon}>
        <NotificationItem isVisible={isSnackVisible} onClose={onSnackClose} />
        <AppText
          style={{
            color: AppTheme.white,
            fontSize: 24,
            lineHeight: 30,
          }}
        >
          Afternoon, Jo
        </AppText>

        <AppText style={{ color: AppTheme.lightGray }}>
          Here's the latest
        </AppText>

        <AppText
          style={{
            marginTop: 16,
            color: AppTheme.green,
            fontSize: 30,
            lineHeight: 36,
          }}
        >
          KES 42,000
        </AppText>

        <AppText style={{ color: AppTheme.lightGray }}>Total funds</AppText>
      </View>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: AppTheme.background,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          padding: 16,
        }}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: AppTheme.primary,
    flexGrow: 1,
    width: "100%",
  },
  textviewCon: {
    padding: 16,
  },
});

export default Screen;
