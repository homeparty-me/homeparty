import { useState } from "react";
import { View, Text, Image } from "react-native";
import partyPopper from "./../../assets/animations/party-popper.gif";
import { styles } from "./../../styles/AppStyles";

export default function StartPage() {

  return (
    <View style={styles.container}>

        <View>
          <Text style={[styles.title, styles.text]}>HomeParty</Text>
          <Image style={styles.gif} source={partyPopper} />
        </View>
      
    </View>
  );
}
