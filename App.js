import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/Button';

export default function App() {
  const leftIcon = { uri: 'https://reactnative.dev/img/tiny_logo.png' };
  const rightIcon = require('./assets/icon.png');
  return (
    <View style={styles.container}>
      <CustomButton
        text={"Mybutttons"}
        fontSize={16}
        fontWeight={500}
        onPress={() => console.log("Pressed")}
        TextColor={"white"}
        borderRadius={10}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
