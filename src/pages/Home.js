import React, { useState, useLayoutEffect } from 'react'
import { StyleSheet, View, Button, FlatList } from 'react-native';
import Registro from '../components/Registro';
import { getData } from '../services/ApiClimaCidades';

export default function Home({ navigation }) {

  const [dataPassoFundo, setDataPassoFundo] = useState(true)

  var data = new Date()
  var dia = String(data.getDate()).padStart(2, '0')
  var mes = String(data.getMonth() + 1).padStart(2, '0')
  var ano = String(data.getFullYear())
  var dataAtual = dia + '/' + mes + '/' + ano

  useLayoutEffect(() => {
    getData("4314100", dataAtual)
      .then(dados => setDataPassoFundo(dados))
      .catch(erro => console.log(erro))
      
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.navigate("Sobre")}
          title="Sobre"
          color="black"
        />
      ),

    })

  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={dataPassoFundo}
        renderItem={({ item }) => {
          <Registro
            dados={item}
            navigation={navigation}
          />
        }

        }
        keyExtractor={item => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});