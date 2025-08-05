import React from "react";
import { View } from "react-native";
import { Chip } from "react-native-paper";
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
      {priorities.map((p) => {
        const isSelected = selected === p.value;
        return (
          <Chip
            key={p.value}
            selected={isSelected}
            onPress={() => onSelect(p.value)}
            style={[
              styles.chip,
              isSelected ? styles.activeChip : styles.inactiveChip,
            ]}
            textStyle={isSelected ? styles.activeText : styles.inactiveText}
          >
            {p.label}
          </Chip>
        );
      })}
    </View>
  );
};
