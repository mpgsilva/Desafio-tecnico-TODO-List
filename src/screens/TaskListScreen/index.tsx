import React, { useRef, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { ITask, Priority } from "../../types/task.types";
import { tasksMock } from "../../mocks/mocks";
import { TaskItem } from "../../components/TaskItem";
import { FloatingButton } from "../../components/FloatingButton";
import { TaskFormModal } from "../../components/TaskFormModal";
import { styles } from "./styles";
import { PriorityFilter } from "../../components/PriorityFilter";
import { Swipeable } from "react-native-gesture-handler";

export const TaskListScreen = () => {
  const [tasks, setTasks] = useState<ITask[]>(tasksMock);
  const [modalVisible, setModalVisible] = useState(false);
  const [filter, setFilter] = useState<Priority | "all">("all");
  const [taskToEdit, setTaskToEdit] = useState<ITask | null>(null);
  const swipeableRefs = useRef<Record<string, Swipeable | null>>({});

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

  const handleSubmitTask = (task: ITask) => {
    setTasks((prevTasks) => {
      const exists = prevTasks.some((t) => t.id === task.id);
      if (exists) {
        swipeableRefs.current[task.id]?.close();
        return prevTasks.map((t) => (t.id === task.id ? task : t));
      } else {
        return [task, ...prevTasks];
      }
    });
    setTaskToEdit(null);
  };

  const handleEditTask = (task: ITask) => {
    setTaskToEdit(task);
    setModalVisible(true);
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📋 Lista de Tarefas</Text>

      <PriorityFilter selected={filter} onSelect={setFilter} />

      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggleComplete={handleToggleComplete}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            onBindSwipeableRef={(id, ref) => {
              swipeableRefs.current[id] = ref;
            }}
          />
        )}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhuma tarefa encontrada.</Text>
        }
      />

      <FloatingButton
        onPress={() => {
          setTaskToEdit(null);
          setModalVisible(true);
        }}
      />

      <TaskFormModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          setTaskToEdit(null);
        }}
        onSubmit={handleSubmitTask}
        taskToEdit={taskToEdit}
      />
    </View>
  );
};
