import React from "react";
import {
  StyledWindExpoImage,
  StyledWindView,
} from "expo-nativewind-components";
import { Image } from "react-native";

const ImageExample = () => {
  return (
    <StyledWindView>
      <StyledWindExpoImage
        source={{
          // uri: 'https://reactnative.dev/img/tiny_logo.png',
          uri: "https://raw.githubusercontent.com/hokagedemehin/expo-nativewind-components/main/play_store_512.png",
        }}
        className="w-40 h-40 rounded-lg transform rotate-45 "
      />
    </StyledWindView>
  );
};

export default ImageExample;
