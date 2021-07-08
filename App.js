import { StatusBar } from "expo-status-bar";
import React from "react";
import Cronometer from "./src/components/Cronometer/Cronometer";

export default function App() {
  return (
    <>
      <Cronometer />
      <StatusBar style="auto" />
    </>
  );
}
