import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { PaperProvider } from "react-native-paper";
import { TaskListScreen } from "./src/screens/TaskListScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar backgroundColor="#fff" barStyle={"dark-content"} />
          <TaskListScreen />
        </SafeAreaView>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
