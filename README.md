# 🐠 Dory


[![GitHub](https://img.shields.io/github/license/Nembie/dory?style=flat-square)](License)
[![GitHub issues](https://img.shields.io/github/issues/Nembie/dory?style=flat-square)](Issues)
[![Build](https://img.shields.io/scrutinizer/build/g/Nembie/dory?style=flat-square)](Build)
[![Build](https://img.shields.io/scrutinizer/quality/g/Nembie/dory?style=flat-square)](Code)

Dory is a lightweight and easy-to-use library for managing global values in React Native applications. It provides a simple API to set, get, and listen for changes to global values, allowing efficient state management across components.

With Dory, you can easily share data and trigger updates between different parts of your application without the need for complex prop drilling or state lifting. It simplifies the process of handling shared data and promotes cleaner and more modular code.

## ✨ Features

- Set global values to be accessed and updated from anywhere in your React Native application.
- Get the current value of a global value.
- Listen for changes to a global value and trigger callbacks when the value changes.
- Remove global values and event listeners when they are no longer needed.

## 🚀 Installation

Install the package using Yarn:

```yarn add react-native-dory```


## 🖥️ Usage

Here's a basic example of how to use Dory:

```javascript
import { Dory } from 'react-native-dory';

// Set a global value
Dory.set('username', 'JohnDoe');

// Get the current value of a global value
const username = Dory.get('username');
console.log(username); // Output: JohnDoe

// Listen for changes to a global value
const unsubscribe = Dory.addListener('username', (newValue) => {
  console.log('Username changed:', newValue);
});

// Update the global value
Dory.set('username', 'JaneDoe');
// Output: Username changed: JaneDoe

// Remove the event listener
unsubscribe();
```

## ⚙️ Methods

TODO



## 🤝 Contributing
Contributions are welcome! If you have any bug reports, feature requests, or suggestions, please open an issue on the [GitHub repository](https://github.com/Nembie/dory/issues).

If you want to contribute code, please fork the repository and create a [pull request](https://github.com/Nembie/dory/pulls) with your changes.

## 📄 License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/Nembie/dory/blob/main/LICENSE) file for details.
