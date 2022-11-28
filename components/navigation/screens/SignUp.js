import { useEffect, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { styles } from "../../../styles/SignUp";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder="Username"
        onChangeText={(newUsername) => setUsername(newUsername)}
      />
      <TextInput style={styles.input}
        placeholder="Email"
        onChangeText={(newEmail) => setEmail(newEmail)}
      />
      <TextInput style={styles.input}
        placeholder="Password"
        onChangeText={(newPassword) => setPassword(newPassword)}
      />
      <Button style={styles.button} 
        title="Sign Up"
        onPress={() => {
          // Get email, username and password from the user
          fetch("../../../api/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              username: username,
              password: password,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              alert(data);
            });
        }}
      />
    </View>
  );
}
