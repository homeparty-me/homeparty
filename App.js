import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
// Import gif


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.text]}>HomeParty</Text>
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
  // Styles that are unchanged from previous step are hidden for brevity.
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
  },
  title: {
    fontSize: 30,
  },
});
