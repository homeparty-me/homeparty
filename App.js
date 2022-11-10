import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image } from "react-native";
import partyPopper from "./assets/animations/62715-party-popper1.gif";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.text]}>HomeParty</Text>
      <View>
        <Image source={partyPopper} alt="Party Popper!" style={styles.gif} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Styles that are unchanged from previous step are hidden for brevity.
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  text: {
    color: "#25292e",
  },
  title: {
    fontSize: 30,
    marginTop: 0,
    marginBottom: 50,
    position: "absolute ",
  },
  gif: {
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
});
