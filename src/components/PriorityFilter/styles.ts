import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 16,
    flexWrap: "wrap",
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: "#eee",
  },
  activeButton: {
    backgroundColor: "#007bff",
  },
  buttonText: {
    color: "#333",
    fontSize: 14,
  },
  activeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
