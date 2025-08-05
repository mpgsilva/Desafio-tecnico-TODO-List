import React, { useEffect, useState } from "react";
import { View, Keyboard, TouchableWithoutFeedback } from "react-native";
import { ITask, Priority } from "../../types/task.types";
import {
  Button,
  Dialog,
  Portal,
  Text,
  TextInput,
  RadioButton,
} from "react-native-paper";
import { styles } from "./styles";

interface Props {
  visible: boolean;
  onClose: () => void;
  onSubmit: (task: ITask) => void;
  taskToEdit?: ITask | null;
}

export const TaskFormModal = ({
  visible,
  onClose,
  onSubmit,
  taskToEdit,
}: Props) => {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState<Priority>("low");

  useEffect(() => {
    if (taskToEdit) {
      setName(taskToEdit.name);
      setPriority(taskToEdit.priority);
    } else {
      setName("");
      setPriority("low");
    }
  }, [taskToEdit, visible]);

  const handleSubmit = () => {
    if (!name.trim()) return;

    const newTask: ITask = {
      id: taskToEdit?.id ?? Date.now().toString(),
      name,
      priority,
      completed: taskToEdit?.completed ?? false,
    };

    onSubmit(newTask);
    onClose();
  };

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onClose}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Dialog.Title>
              {taskToEdit ? "Editar Tarefa" : "Nova Tarefa"}
            </Dialog.Title>

            <Dialog.Content>
              <View style={styles.content}>
                <TextInput
                  label="Nome da tarefa"
                  value={name}
                  onChangeText={setName}
                  mode="outlined"
                  style={styles.input}
                />

                <Text variant="labelLarge" style={styles.priorityLabel}>
                  Prioridade
                </Text>

                <RadioButton.Group
                  onValueChange={(value) => setPriority(value as Priority)}
                  value={priority}
                >
                  <RadioButton.Item label="Baixa" value="low" />
                  <RadioButton.Item label="Média" value="medium" />
                  <RadioButton.Item label="Alta" value="high" />
                </RadioButton.Group>
              </View>
            </Dialog.Content>

            <Dialog.Actions>
              <View style={styles.actions}>
                <Button onPress={onClose} textColor="#888">
                  Cancelar
                </Button>
                <Button onPress={handleSubmit}>
                  {taskToEdit ? "Salvar" : "Adicionar"}
                </Button>
              </View>
            </Dialog.Actions>
          </View>
        </TouchableWithoutFeedback>
      </Dialog>
    </Portal>
  );
};
