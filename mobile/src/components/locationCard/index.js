import React from "react";
import { View, Text, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import imageCasa from "../../assets/01.jpg";

import styles from "./styles";

export default function locationCard() {
  return (
    <View style={styles.card}>
      <Image style={styles.locationImage} source={imageCasa} />
      <View style={styles.locationInfo}>
        <View>
          <Text style={styles.locationName}>Primeiro local</Text>
          <Text style={styles.locationSize}>Tamanho: {"\n"}300 m²</Text>
        </View>

        <RectButton style={styles.contactBtn}>
          <FontAwesome
            name="whatsapp"
            size={30}
            color="#128c7e"
            style={styles.iconWpp}
          />
        </RectButton>
      </View>
    </View>
  );
}
