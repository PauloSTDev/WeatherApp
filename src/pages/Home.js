import { StyleSheet, View, Text, TextInput, Button, Alert} from 'react-native';

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
        <Text>Aham</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
  },
  textInput: {
    width: 200,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    textAlign: "center"
  },
  text: {
    fontSize: 25,
    fontWeight: "bold"
  },
  containerButton: {
    flex: 1,
    paddingTop: 40
  }
});