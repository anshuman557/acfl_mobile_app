import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { navigationStrings } from "../../navigation/navigationStrings";

const Splash = () => {
    const navigation = useNavigation<any>()
  useEffect(() => {
    setTimeout(() => {
        navigation.replace(navigationStrings.Onboarding); 
    }, 1500); 
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/image/Logo.png")} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 350,
    height: 350,
    resizeMode:'contain'
  },
});

export default Splash;
