import { Button } from "react-native-paper";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #00aeef;
  align-items: center;
  justify-content: center;
`;

export const Timer = styled.Text`
  margin-top: -160px;
  font-size: 45px;
  font-weight: bold;
  color: #ffffff;
`;

export const ButtonView = styled.View`
  margin-top: 130px;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  margin-bottom: 16px;
  padding: 4px;
`;

export const LastRecorded = styled.View`
  margin-top: 40px;
`;

export const LastRecordedText = styled.Text`
  font-size: 18px;
  color: #ffffff;
  font-style: italic;
`;
