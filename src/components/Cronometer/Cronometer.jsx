import React, { useState } from "react";
import { Image } from "react-native";
import {
  ButtonView,
  Container,
  LastRecorded,
  LastRecordedText,
  StyledButton,
  Timer,
} from "./styles";

let timer = null;
let seconds = 0;
let minutes = 0;
let hours = 0;

const Cronometer = () => {
  const [time, setTime] = useState(0);
  const [lastTime, setLastTime] = useState(null);

  const start = () => {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    } else {
      timer = setInterval(() => {
        seconds += 1;

        if (seconds === 60) {
          seconds = 0;
          minutes += 1;
        }

        if (minutes === 60) {
          minutes = 0;
          hours += 1;
        }

        const format = `${hours < 10 ? `0${hours}` : hours}:${
          minutes < 10 ? `0${minutes}` : minutes
        }:${seconds < 10 ? `0${seconds}` : seconds}`;

        setTime(format);
      }, 1000);
    }
  };

  const reset = () => {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }

    setLastTime(time);
    setTime(0);
    seconds = 0;
    minutes = 0;
    hours = 0;
  };

  return (
    <Container>
      <Image source={require("../../assets/cronometer.png")} />
      <Timer>{time === 0 ? "00:00:00" : time}</Timer>

      <ButtonView>
        <StyledButton icon="timer-outline" mode="contained" onPress={start}>
          Start/Stop
        </StyledButton>
        <StyledButton icon="timer-off-outline" color="white" onPress={reset}>
          Reset
        </StyledButton>
      </ButtonView>
      {lastTime && (
        <LastRecorded>
          <LastRecordedText>Last recorded: {lastTime}</LastRecordedText>
        </LastRecorded>
      )}
    </Container>
  );
};

export default Cronometer;
