import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItems from './components/carItems'

export default function App() {
  return (
    <View style={styles.container}>
      <CarItems/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
