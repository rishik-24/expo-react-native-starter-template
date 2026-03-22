import { Colors } from "@/utils/Colors";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";

export default function Index() {
  return (
    <>
      <SafeAreaProvider
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 30,
          backgroundColor: "#edf6f9",
        }}>
        <Text
          style={{
            fontSize: 30,
            maxWidth: "60%",
            textAlign: "center",
            fontWeight: "600",
          }}>
          Welcome to React Native Starter Template
        </Text>
        <Text style={{ fontSize: 20 }}>A template by Rishik Roy</Text>

        <Link
          href="/(tabs)/home"
          asChild>
          <TouchableOpacity
            style={{
              paddingHorizontal: 60,
              paddingVertical: 12,
              borderRadius: 10,
              backgroundColor: "#f8f9fa",
              alignItems: "center",
              elevation: 5,
              borderWidth: 0.5,
              borderColor: Colors.primary,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: Colors.primary,
              }}>
              Continue
            </Text>
          </TouchableOpacity>
        </Link>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({});
