import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ITask } from "../../types/task.types";
import { styles } from "./styles";

interface TaskItemProps {
  task: ITask;
  onToggleComplete: (id: string) => void;
}

export const TaskItem = ({ task, onToggleComplete }: TaskItemProps) => {
  const priorityColor = {
    low: "#2ecc71",
    medium: "#f1c40f",
    high: "#e74c3c",
  };

  return (
    <TouchableOpacity
      style={[styles.container, task.completed && styles.completed]}
      onPress={() => onToggleComplete(task.id)}
    >
      <View style={styles.info}>
        <Text style={[styles.name, task.completed && styles.completedText]}>
          {task.name}
        </Text>
        <Text
          style={[styles.priority, { color: priorityColor[task.priority] }]}
        >
          Prioridade: {task.priority}
        </Text>
      </View>
      <Text style={styles.status}>{task.completed ? "✅" : "⬜️"}</Text>
    </TouchableOpacity>
  );
};
