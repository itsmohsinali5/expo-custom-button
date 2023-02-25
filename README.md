# expo-custom-button

expo-custom-button is a customizable and reusable button component for React Native

## Installation

To install expo-custom-button, run:

```bash
npm install expo-custom-button
```
OR
```bash
yarn add expo-custom-button
```

## Usage

```python
// import here
import CustomButton from 'expo-custom-button';

// Basic Usage
<CustomButton
  text="Click me"
  onPress={() => console.log('Button clicked!')}
/>
```

| Prop            | Type             | Default Value    | Description                                        |
| --------------- | ---------------- | ---------------- | -------------------------------------------------- |
| text            | string           |                  | Button                                             |
| onPress         | function         |                  | Function to call when the button is pressed        |
| leftIcon        | object           |                  | Object containing information about the left icon  |
| rightIcon       | object           |                  | Object containing information about the right icon |
| fontSize        | number           | 16               | Font size for the button text                      |
| fontWeight      | string           | bold             | Font weight for the button text                    |
| TextColor       | string           | black            | Color of the button text                           |
| backgroundColor | string           | lightblue        | Background color of the button                     |
| borderRadius    | string           | 5px              | Border radius for the button                       |
| width           | string or number | auto             | Width of the button                                |

## Icons Prop Example:
The leftIcon and rightIcon props should be an object containing the uri property for remote image URLs, or a local image require statement. For example:

```python
const leftIcon = {
  uri: 'https://example.com/left-icon.png'
};

const rightIcon = require('./right-icon.png');
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

CustomButton is released under the MIT License. See LICENSE for details.
