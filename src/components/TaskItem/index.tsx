import React, { useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { ITask } from "../../types/task.types";
import { styles } from "./styles";
import { IconButton } from "react-native-paper";
import { Swipeable } from "react-native-gesture-handler";

interface TaskItemProps {
  task: ITask;
  onToggleComplete: (id: string) => void;
  onEdit: (task: ITask) => void;
  onDelete: (id: string) => void;
  onBindSwipeableRef?: (id: string, ref: Swipeable | null) => void; // <- novo
}

const ITEM_HEIGHT = 72;

export const TaskItem = ({
  task,
  onToggleComplete,
  onEdit,
  onDelete,
  onBindSwipeableRef,
}: TaskItemProps) => {
  const priorityColor = {
    low: "#2ecc71",
    medium: "#f1c40f",
    high: "#e74c3c",
  };

  const swipeRef = useRef<Swipeable>(null);

  useEffect(() => {
    onBindSwipeableRef?.(task.id, swipeRef.current);
  }, [swipeRef.current]);

  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<string | number>
  ) => {
    const scale = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0.7, 1],
    });

    const opacity = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    return (
      <View style={[styles.swipeActions, { height: ITEM_HEIGHT }]}>
        <Animated.View
          style={{
            transform: [{ scale }],
            opacity,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <IconButton
            icon="pencil"
            size={24}
            onPress={() => onEdit(task)}
            style={[styles.swipeButton, styles.edit]}
          />
        </Animated.View>

        <Animated.View
          style={{
            transform: [{ scale }],
            opacity,
            marginLeft: 4,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <IconButton
            icon="delete"
            size={24}
            onPress={() => onDelete(task.id)}
            style={[styles.swipeButton, styles.delete]}
          />
        </Animated.View>
      </View>
    );
  };

  return (
    <Swipeable
      ref={swipeRef}
      renderRightActions={renderRightActions}
      friction={2}
      overshootRight={false}
    >
      <View
        style={[styles.container, task.completed && styles.completed]}
        accessibilityRole="button"
      >
        <View
          style={[
            styles.priorityBar,
            { backgroundColor: priorityColor[task.priority] },
          ]}
        />

        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => onToggleComplete(task.id)}
            activeOpacity={0.6}
            style={styles.statusWrapper}
          >
            <Text style={styles.status}>{task.completed ? "✅" : "⬜️"}</Text>
          </TouchableOpacity>

          <View style={styles.info}>
            <Text
              style={[styles.name, task.completed && styles.completedText]}
              numberOfLines={1}
            >
              {task.name}
            </Text>
          </View>
        </View>
      </View>
    </Swipeable>
  );
};
