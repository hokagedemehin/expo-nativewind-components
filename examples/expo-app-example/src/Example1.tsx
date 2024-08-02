import { StyleSheet } from "react-native";
import React from "react";
import {
  StyledWindActivity,
  StyledWindImageBackground,
  StyledWindPressable,
  StyledWindText,
  StyledWindView,
  StyleWindImage,
} from "expo-nativewind-components";

const Example1Comp = () => {
  return (
    <StyledWindView className="border-2 p-3 my-3 rounded-lg shadow-lg bg-green-600 shadow-emerald-500 m-2">
      <StyledWindText
        numberOfLines={1}
        className="text-white text-3xl font-bold"
      >
        StyledWindText
      </StyledWindText>
      <StyledWindPressable
        onPress={() => {
          console.log("Pressed");
        }}
        onLongPress={() => {
          console.log("Long Pressed");
        }}
        className="bg-blue-500 p-3 rounded-lg mt-3"
      >
        <StyledWindText
          numberOfLines={1}
          className="text-white text-lg font-bold"
        >
          StyledWindPressable a update oustide of the component
        </StyledWindText>
      </StyledWindPressable>
      <StyledWindActivity
        style={{}}
        className="mt-3 bg-red-400 border text-xs text-white"
        size="large"
      />
      <StyleWindImage
        style={
          {
            // objectFit: "scale-down",
            // resizeMode: "contain",
            // borderWidth: 4,
            // borderColor: "red",
          }
        }
        source={require("../assets/dashboard6.png")}
        className="w-40 h-40 m-6 translate-x-10 border-4 border-red-700 object-scale-down object-left-bottom rounded-full bg-black"
      />
      <StyledWindImageBackground
        source={require("../assets/homeBG1.png")}
        className="w-40 h-20 mt-3 border-4 border-red-700"
        style={{}}
        imageStyle={{
          objectFit: "contain",
        }}
      >
        <StyledWindText className="text-white">
          StyledWindImageBackground
        </StyledWindText>
      </StyledWindImageBackground>
    </StyledWindView>
  );
};

export default Example1Comp;

const styles = StyleSheet.create({});
