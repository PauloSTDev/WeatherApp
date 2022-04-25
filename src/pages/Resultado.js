import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'

export default function Resultado(props) {
    const [cidade, setCidade] = useState("Teste")


    useEffect(() => {
        props.navigation.setOptions({
            title: props.route.params.manha.entidade,

            headerRight: () => (
              <Button onPress={() => navigation.navigate("Sobre")}
                title="Sobre"
                color="black"
              />
            ),
          })



    }, [])


    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>
                   Pela Manhã
                </Text>
                <View style={styles.items}>
                        <Text>Temperatura Max: {props.route.params.manha.temp_max}</Text>
                        <Text>Temperatura Min: {props.route.params.manha.temp_min}</Text>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>
                   Pela Tarde
                </Text>
                <View style={styles.items}>
                        <Text>Temperatura Max: {props.route.params.tarde.temp_max}</Text>
                        <Text>Temperatura Min: {props.route.params.tarde.temp_min}</Text>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>
                   Pela Noite
                </Text>
                <View style={styles.items}>
                        <Text>Temperatura Max: {props.route.params.noite.temp_max}</Text>
                        <Text>Temperatura Min: {props.route.params.noite.temp_min}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
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
    },
    text: {
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'center'
    }
});