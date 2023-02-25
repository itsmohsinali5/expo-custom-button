CustomButton
CustomButton is a customizable and reusable button component for React Native.

Installation
To install CustomButton, run:

sh
Copy code
npm install expo-custom-button
Usage
Import CustomButton:

js
Copy code
import CustomButton from 'expo-custom-button';
Then use it in your code:

js
Copy code
<CustomButton
  text="Click me"
  onPress={() => console.log('Button clicked!')}
/>
Props
CustomButton supports the following props:

Prop	Type	Default Value	Description
text	string		Button text
onPress	function		Function to call when the button is pressed
leftIcon	object		Object containing information about the left icon
rightIcon	object		Object containing information about the right icon
fontSize	number	16	Font size for the button text
fontWeight	string	bold	Font weight for the button text
TextColor	string	black	Color of the button text
backgroundColor	string	lightblue	Background color of the button
borderRadius	string	5px	Border radius for the button
width	string	auto	Width of the button
The leftIcon and rightIcon props should be an object containing the uri property for remote image URLs, or a local image require statement. For example:

js
Copy code
const leftIcon = {
  uri: 'https://example.com/left-icon.png'
};

const rightIcon = require('./right-icon.png');

License
CustomButton is released under the MIT License. See LICENSE for details.
