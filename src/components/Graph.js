import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function Graph() {
  return (
    <View>
      <LineChart
        data={{
          labels: [
            "test1",
            "test2",
            "test3",
            "test4",
            "test5",
            "test6",
            "test1",
            "test2",
            "test3",
            "test4",
            "test5",
            "test6",
          ],
          datasets: [
            {
              data: [100, 99, 99, 98, 93, 92, 100, 94, 95, 96, 91, 99],
            },
          ],
        }}
        yAxisSuffix="%"
        width={Dimensions.get("window").width - 20} // from react-native
        height={240}
        yAxisInterval={1} // optional, defaults to 1
        verticalLabelRotation={90}
        fromZero
        segments={5}
        chartConfig={{
          backgroundColor: "rgba(255,255,255,0)",
          backgroundGradientToOpacity: "0",
          backgroundGradientFromOpacity: "0",
          strokeWidth: 1,
          decimalPlaces: 0, // optional, defaults to 2dp
          color: () => `#ddd`,
          labelColor: () => `#888`,
          propsForDots: {
            r: "2",
            strokeWidth: "2",
            stroke: "#fff",
          },
          propsForBackgroundLines: {
            stroke: "#444",
            strokeWidth: "1",
          },
        }}
        style={{
          borderRadius: 4,
          paddingBottom: 15,
          marginLeft: -20,
        }}
      />
    </View>
  );
}
