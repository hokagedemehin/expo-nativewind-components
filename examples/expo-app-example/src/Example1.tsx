import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { styled } from "nativewind";
// import { StyledWindView } from "expo-nativewind-component";

const StyledText = styled(Text);

const Example1Comp = () => {
  return (
    <View>
      <Text
        style={{
          color: "red",
          fontSize: 20,
          fontWeight: "bold",
          // borderWidth: 1,
        }}
      >
        Example1Comp
      </Text>
      <StyledText
        className="text-red-400 text-4xl font-bold"
        // style={{
        //   color: "blue",
        //   fontSize: 20,
        //   fontWeight: "bold",
        // }}
      >
        Styled Text
      </StyledText>
      {/* <StyledWindView>
        <Text>StyledWindView</Text>
      </StyledWindView> */}
    </View>
  );
};

export default Example1Comp;

const styles = StyleSheet.create({});
