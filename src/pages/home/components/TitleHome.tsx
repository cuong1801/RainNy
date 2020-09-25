import React from "react";
import { Text } from "react-native";

interface TiltleHomeProps {
  timeStart?: string;
  timeEnd?: string;
  style?: object;
}
export const TitleHome = ({
  style,
  timeStart,
  timeEnd,
}: TiltleHomeProps): JSX.Element => {
  return (
    <Text style={style}>
      Lượng mưa các tỉnh và thành phố từ {timeStart} tới {timeEnd}
    </Text>
  );
};
