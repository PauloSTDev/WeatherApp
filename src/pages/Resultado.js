import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'

export default function Resultado(props) {
    const [cidade, setCidade] = useState("Teste")


    useLayoutEffect(() => {
        props.navigation.setOptions({
            title: props.route.params.manha.entidade,

            headerRight: () => (
              <Button onPress={() => navigation.navigate("Sobre")}
                title="Sobre"
                color="black"
              />
            ),
          })

        console.log(props.route.params.manha.entidade);

    }, [])


    return (
        <View>
            <Text>Resultado: {cidade}</Text>
            <View style={styles.container}>
                <Text style={styles.linha}>
                   Pela Manhã
                </Text>
                <View style={styles.items}>
                        <Text>Temperatura Max: {props.route.params.manha.temp_max}</Text>
                        <Text>Temperatura Min: {props.route.params.manha.temp_min}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#60d68e",
        margin: 5

    }, linha: {
        flexDirection: "row",
        alignSelf: "center"
    },
    items: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});