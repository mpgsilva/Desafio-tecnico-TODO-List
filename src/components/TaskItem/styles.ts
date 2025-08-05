import { StyleSheet } from "react-native";
const ITEM_HEIGHT = 72;

export const styles = StyleSheet.create({
  container: {
    height: ITEM_HEIGHT,
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginBottom: 12,
    borderColor: "#ddd",
    borderWidth: 1,
    overflow: "hidden",
  },

  priorityBar: {
    width: 8,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    flex: 1,
  },
  status: {
    fontSize: 20,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
  },
  completed: {
    backgroundColor: "#e0e0e0",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  statusWrapper: {
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  swipeActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  swipeButton: {
    borderRadius: 8,
  },
  edit: {
    backgroundColor: "#007bff",
  },
  delete: {
    backgroundColor: "#dc3545",
  },
});
