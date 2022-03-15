import Toast, {
  BaseToast,
  BaseToastProps,
  ErrorToast,
} from "react-native-toast-message";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import HomeScreen from "./app/screens/HomeScreen";

const toastConfigs = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props) => (
    <BaseToast
      {...props}
      text1Style={styles.toastSuccesstext1style2}
      text2Style={styles.toasett2styles}
      style={styles.errorstyle2}
      renderTrailingIcon={() => (
        <TouchableOpacity style={styles.tailing} onPress={() => Toast.hide()}>
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
      )}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={styles.toastSuccesstext1style}
      text2Style={styles.toasett2styles}
      text2NumberOfLines={2}
      style={styles.errorstyle}
      renderTrailingIcon={() => (
        <TouchableOpacity style={styles.tailing} onPress={() => Toast.hide()}>
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
      )}
    />
  ),
};

export default function App() {
  return (
    <>
      <HomeScreen />
      <Toast config={toastConfigs} />
    </>
  );
}


const styles = StyleSheet.create({
  
})