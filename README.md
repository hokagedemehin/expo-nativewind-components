# expo-nativewind-component

<img src='https://raw.githubusercontent.com/hokagedemehin/expo-nativewind-components/main/play_store_512.png' alt='package logo' width='200' />

<!-- ![package logo](https://raw.githubusercontent.com/hokagedemehin/expo-nativewind-components/main/play_store_512.png) -->

[![npm version](https://badge.fury.io/js/expo-nativewind-component.svg)](https://badge.fury.io/js/expo-nativewind-component)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A collection of reusable React Native components for Expo projects, super charged with NativeWind. once you have an expo project setup with NativeWind, you can use these components in place of the core React Native components and pass className props directly to style your components.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
<!-- - [Components](#components) -->
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the package, run:

```sh
npm install expo-nativewind-component
```

```js
yarn add expo-nativewind-component
```

## Usage

Import the components you need from the package and use them in your project. Here's an example:

```jsx
import React from "react";
import { View } from "react-native";
import { MyComponent } from "expo-nativewind-component";

const App = () => {
  return (
    <View>
      <MyComponent text="Hello, World!" />
    </View>
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
