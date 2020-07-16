import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"]
  },
    Thunderstorm: {
      iconName: "weather-lightning",
      gradient: ["#0f0c29", "#302b63", "#24243e"]
    },
    Drizzle: {
      iconName: "weather-rainy",
      gradient: ["#00B4DB", "#0083B0"]
    },
    Rain: {
      iconName: "weather-pouring",
      gradient: ["#000046", "#1CB5E0"]
    },
    Snow: {
      iconName: "weather-snowy-heavy",
      gradient: ["#E8CBC0", "#636FA4"]
    } ,
    Atmosphere: {
      iconName: "weather-fog",
      gradient: ["#a8c0ff", "#3f2b96"]
    },
    Clear: {
      iconName: "weather-sunny",
      gradient: ["#6190E8", "#A7BFE8"]
    },
    Clouds: {
      iconName: "weather-partly-cloudy",
      gradient: ["#bdc3c7", "#2c3e50"]
    },
    Mist: {
      iconName: "weather-sunset",
      gradient: ["#2193b0", "#6dd5ed"]
    },
    Dust: {
      iconName: "weather-fog",
      gradient: ["#544a7d", "#ffd452"]
    }
}


export default function Weather({ temp, condition }) {
  return (
    
    <LinearGradient 
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name={weatherOptions[condition].iconName || "weather-sunset"} size={86} color="white" />
        <Text style={styles.temp}>{temp}</Text>
      </View>
      <View style={styles.halfContainer} />
    </LinearGradient>
    
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  temp: {
    fontSize: 36,
    color: "white"
  },

  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }

});
