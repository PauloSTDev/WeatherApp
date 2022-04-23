import { StyleSheet, View, Text, TextInput, Button, Alert, FlatList } from 'react-native';
import Registro from '../components/Registro';

export default function Home({ navigation }) {

  const data = [{
    cidade1: "teste 1",
    id: "1",
    cidade2: "teste 2",
    id: "2",
    cidade3: "teste 3",
    id: "3"
  }
  ]
  return (
    <View style={styles.container}>
      <Button style={styles.button}
        onPress={() => navigation.navigate("Sobre")}
        title="Sobre"
        color="#60d68e"
      />
      <FlatList
        data={data}
        renderItem={({ item }) =>
          <Registro
            dados={item}
            navigation={navigation}
          />
        }
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
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
  button: {
    flex: 3,
    padding: 20
  }
});