# expo-nativewind-components

<img src='https://raw.githubusercontent.com/hokagedemehin/expo-nativewind-components/main/play_store_512.png' alt='package logo' width='200' />

<!-- ![package logo](https://raw.githubusercontent.com/hokagedemehin/expo-nativewind-components/main/play_store_512.png) -->

![NPM Version](https://img.shields.io/npm/v/expo-nativewind-components?color=%2322c55e)

![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-4630EB.svg?style=flat&logo=EXPO&labelColor=f3f3f3&logoColor=000) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A collection of reusable React Native components for Expo projects, super charged with NativeWind. Once you have an expo project setup with NativeWind, you can use these components in place of the core React Native components and pass className props directly to style your components.

## Table of Contents

- [expo-nativewind-components](#expo-nativewind-components)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Running Tests](#running-tests)
  - [License](#license)
  - [Bugs and Issues](#bugs-and-issues)
  - [Author](#author)

## Installation

To install the package, run:

```sh
npm install expo-nativewind-components
```

```js
yarn add expo-nativewind-components
```

## Usage

Import the components you need from the package and use them in your project. Here's an example:

```jsx
import React from "react";
import { StyledWindView, StyledWindText } from "expo-nativewind-components";
const App = () => {
  return (
    <StyledWindView className="h-screen w-full justify-center items-center">
      <StyledWindText className="text-center text-2xl font-bold text-blue-500 mt-10">
        Hello Awesome developers 👋🏽
      </StyledWindText>
    </StyledWindView>
  );
};

export default App;
```

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes.
4. Commit your changes (git commit -m 'Add some feature').
5. Push to the branch (git push origin feature-branch).
6. Open a pull request.

Please make sure to update tests as appropriate.

## Running Tests

To run the tests, use the following command:

```sh
npm run test
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Bugs and Issues

If you encounter any bugs or issues, please report them on the GitHub Issues page.

## Author

Created by Ibukun demehin.
