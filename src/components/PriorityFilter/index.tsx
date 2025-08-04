import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Priority } from "../../types/task.types";
import { styles } from "./styles";

interface Props {
  selected: Priority | "all";
  onSelect: (priority: Priority | "all") => void;
}

const priorities: { label: string; value: Priority | "all" }[] = [
  { label: "Todos", value: "all" },
  { label: "Baixa", value: "low" },
  { label: "Média", value: "medium" },
  { label: "Alta", value: "high" },
];

export const PriorityFilter = ({ selected, onSelect }: Props) => {
  return (
    <View style={styles.container}>
      {priorities.map((p) => (
        <TouchableOpacity
          key={p.value}
          onPress={() => onSelect(p.value)}
          style={[styles.button, selected === p.value && styles.activeButton]}
        >
          <Text
            style={[
              styles.buttonText,
              selected === p.value && styles.activeButtonText,
            ]}
          >
            {p.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
