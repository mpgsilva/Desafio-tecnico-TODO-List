import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#ddd",
    borderWidth: 1,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
  },
  priority: {
    fontSize: 14,
    marginTop: 4,
  },
  status: {
    fontSize: 20,
    marginLeft: 8,
  },
  completed: {
    backgroundColor: "#e0e0e0",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#888",
  },
});
