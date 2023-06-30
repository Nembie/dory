# 🐠 Dory
[![GitHub](https://img.shields.io/github/license/Nembie/Esso?style=flat-square)](LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/Nembie/dory?style=flat-square)](Issues)
[![Code quality](https://img.shields.io/scrutinizer/quality/g/Nembie/dory?style=flat-square)](Code)

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

or using npm:

```npm install react-native-dory```

## 🖥️ Usage

Here's a basic example of how to use Dory:

```javascript
import Dory from 'react-native-dory';

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
#### ```set(key: string, value: any): void```
Set a global value.

* key (string): The key to associate with the value.
* value (any): The value to be stored.


----

#### ```get(key: string): any```
Get a global value.

* key (string): The key associated with the value.


Returns: The value associated with the key.

----


#### ```remove(key: string): void```
Remove a global value.

* key (string): The key associated with the value to be removed.

----

#### ```removeAll(): void```
Remove all global values.

----

#### ```has(key: string): boolean```
Check if a key exists in the global values.

* key (string): The key to check.

Returns: True if the key exists, false otherwise.

----

#### ```getAll(): { [key: string]: any }```
Get all global values.

Returns: An object containing all the global values.

----

#### ```addChangeListener(callback: (key: string, value: any) => void): void```
Add a change event listener.

* callback (Function): The callback function to be invoked when a value changes.

----

#### ```removeChangeListener(callback: (key: string, value: any) => void): void```
Remove a change event listener.

* callback (Function): The callback function to be removed from the change event.

----

#### ```addListenerOnce(callback: (key: string, value: any) => void): void```
Add a change event listener that only triggers once.

* callback (Function): The callback function to be invoked when a value changes.

----

#### ```removeAllListeners(): void```
Remove all change event listeners.



## 🤝 Contributing
Contributions are welcome! If you have any bug reports, feature requests, or suggestions, please open an issue on the [GitHub repository](https://github.com/Nembie/dory/issues).

If you want to contribute code, please fork the repository and create a [pull request](https://github.com/Nembie/dory/pulls) with your changes.

## 📄 License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/Nembie/dory/blob/main/LICENSE) file for details.
