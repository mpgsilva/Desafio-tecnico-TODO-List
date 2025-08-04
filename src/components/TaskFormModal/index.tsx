import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { ITask, Priority } from "../../types/task.types";
import { styles } from "./styles";

interface Props {
  visible: boolean;
  onClose: () => void;
  onAddTask: (task: ITask) => void;
}

export const TaskFormModal = ({ visible, onClose, onAddTask }: Props) => {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState<Priority>("low");

  const handleAdd = () => {
    if (!name.trim()) return;

    onAddTask({
      id: Date.now().toString(),
      name,
      priority,
      completed: false,
    });
    setName("");
    setPriority("low");
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Text style={styles.title}>Nova Tarefa</Text>
            <TextInput
              placeholder="Nome da tarefa"
              value={name}
              onChangeText={setName}
              style={styles.input}
            />

            {Platform.OS === "ios" ? (
              <Text>Picker não suportado nativamente no iOS</Text>
            ) : (
              <Picker
                selectedValue={priority}
                onValueChange={(itemValue) =>
                  setPriority(itemValue as Priority)
                }
                style={styles.picker}
              >
                <Picker.Item label="Baixa" value="low" />
                <Picker.Item label="Média" value="medium" />
                <Picker.Item label="Alta" value="high" />
              </Picker>
            )}

            <View style={styles.actions}>
              <Button title="Cancelar" color="#aaa" onPress={onClose} />
              <Button title="Adicionar" onPress={handleAdd} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
