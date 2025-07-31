import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <Text> Hello, Naledi</Text>
       <Text> The only difficulty experienced was navigating the terminals and ensurig that the right steps were taken to ensure that the app would be able to run on an emulator. At some point, I did not open the project in the correct location, so the emulator would not run at all. I resolved this issue by asking the lecturer to fix it for me and explain the issue that I was experiencing :)</Text>
      <StatusBar style="auto" />
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
