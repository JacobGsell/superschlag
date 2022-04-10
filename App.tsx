import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './components/LoginForm'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Superschlag</Text>
      <LoginForm></LoginForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },
  logo: {
    paddingTop: 135,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 24,
    fontWeight: 'bold'

  },
  loginForm: {

  }
});
