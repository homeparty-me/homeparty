import { useEffect, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
    <View>
      <TextInput
        placeholder="Username"
        onChangeText={(newUsername) => setUsername(newUsername)}
      />
      <TextInput
        placeholder="Email"
        onChangeText={(newEmail) => setEmail(newEmail)}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(newPassword) => setPassword(newPassword)}
      />
      <Button
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
