import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useLayoutEffect, useEffect } from 'react'

export default function Registro(props, { navigation }) {

    const dados = props.data
    const [cidade, setCidade] = useState("Não Informado")
    const [dia, setDia] = useState("")


    useEffect(() => {

        let unmounted = false

        if (!unmounted) {
            if (dados.manha) {
                setDia(dados.manha["dia_semana"])
                setCidade(dados.manha.entidade)
            }
        }
        return () => {
            unmounted = true
            //console.log(dia);
        }
    }, [])

    return (

        <TouchableOpacity
            onPress={() => props.navigation.navigate("Resultado", props.data)}>
            <View style={styles.container}>
                <View style={styles.linha}>
                    <Text style={styles.text}>{cidade}</Text>
                </View>
                <View style={styles.linha}>
                    <Text>Dia da semana: {dia}</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 2,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#60d68e",
        margin: 5

    }, linha: {
        fontWeight: 'bold',
        flexDirection: "row",
        alignSelf: "center"
    },
    items: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }, text: {
        fontWeight: 'bold',
        fontSize: 30,
    }
});