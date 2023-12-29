import React, { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";

interface IndicatorProps {
  currentIndex: number | null;
}

const INDICATOR_SIZE = 4;

const Indicator: React.FC<IndicatorProps> = ({ currentIndex }) => {
  const percentage = useSharedValue(0);

  percentage.value = withTiming((currentIndex / 92) * 100, {
    duration: 300,
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${percentage.value}%`,
    };
  });

  return <Animated.View style={[styles.indicator, animatedStyle]} />;
};

interface LineIndicatorProps {
  currentIndex: number | null;
}

export const LineIndicator: FC<LineIndicatorProps> = ({ currentIndex }) => {
  return (
    <View style={styles.container}>
      <Indicator currentIndex={currentIndex} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginBottom: 20,
    height: 30,
    // backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  indicator: {
    position: "absolute",
    height: INDICATOR_SIZE,
    backgroundColor: "red",
  },
});
