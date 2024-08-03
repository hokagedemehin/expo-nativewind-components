import { StyledWindText, StyledWindView } from "expo-nativewind-components";
import React from "react";

const TextExample = () => {
  return (
    <StyledWindView>
      <StyledWindText className="text-center text-2xl font-bold text-blue-500 mt-10">
        Hello Awesome developers 👋🏽
      </StyledWindText>
    </StyledWindView>
  );
};

export default TextExample;
