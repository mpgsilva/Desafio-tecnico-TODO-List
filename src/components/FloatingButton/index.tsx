import React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import { styles } from "./styles";

interface Props {
  onPress: () => void;
}

export const FloatingButton = ({ onPress }: Props) => {
  return <FAB icon="plus" style={styles.fab} onPress={onPress} color="#fff" />;
};
