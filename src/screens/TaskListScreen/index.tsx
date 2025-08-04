import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { ITask, Priority } from "../../types/task.types";
import { tasksMock } from "../../mocks/mocks";
import { TaskItem } from "../../components/TaskItem";
import { FloatingButton } from "../../components/FloatingButton";
import { TaskFormModal } from "../../components/TaskFormModal";
import { styles } from "./styles";
import { PriorityFilter } from "../../components/PriorityFilter";

export const TaskListScreen = () => {
  const [tasks, setTasks] = useState<ITask[]>(tasksMock);
  const [modalVisible, setModalVisible] = useState(false);
  const [filter, setFilter] = useState<Priority | "all">("all");

  const filteredTasks = tasks.filter((task) =>
    filter === "all" ? true : task.priority === filter
  );

  const handleToggleComplete = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleAddTask = (newTask: ITask) => {
    setTasks((prev) => [newTask, ...prev]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📋 Lista de Tarefas</Text>

      <PriorityFilter selected={filter} onSelect={setFilter} />
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggleComplete={handleToggleComplete} />
        )}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhuma tarefa encontrada.</Text>
        }
      />

      <FloatingButton onPress={() => setModalVisible(true)} />
      <TaskFormModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAddTask={handleAddTask}
      />
    </View>
  );
};
