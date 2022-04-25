import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useLayoutEffect, useEffect } from 'react'

export default function Registro(props, { navigation }) {

    const dados = props.data
    const [cidade, setCidade] = useState("Não Informado")

    const [tempMaxManha, setTempMaxManha] = useState("")
    const [tempMinManha, setTempMinManha] = useState("")

    const [tempMaxTarde, setTempMaxTarde] = useState("")
    const [tempMinTarde, setTempMinTarde] = useState("")

    const [tempMaxNoite, setTempMaxNoite] = useState("")
    const [tempMinNoite, setTempMinNoite] = useState("")



    useEffect(() => {

        let unmounted = false

        if (!unmounted) {
            if (dados.manha) {
                setCidade(dados.manha.entidade)

                setTempMaxManha(dados.manha.temp_max)
                setTempMinManha(dados.manha.temp_min)

                setTempMaxTarde(dados.tarde.temp_max)
                setTempMinTarde(dados.tarde.temp_min)

                setTempMaxNoite(dados.noite.temp_max)
                setTempMinNoite(dados.noite.temp_min)

            }
        }
        return () => {
            unmounted = true
        }
    }, [])

    return (

        <TouchableOpacity
            onPress={() => props.navigation.navigate("Resultado", props.data)}>
            <View style={styles.container}>
                <View style={styles.linha}>
                    <Text>{cidade}</Text>
                </View>
                <View style={styles.items}>

                        <Text>Manha</Text>

                        <Text>Tarde</Text>

                        <Text>Noite</Text>

                </View>
                <View style={styles.items}>

                        <Text>Max    Min</Text>

                        <Text>Max    Min</Text>

                        <Text>Max    Min</Text>

                </View>
                <View style={styles.items}>

                        <Text>{tempMaxManha}ºC   {tempMinManha}ºC</Text>

                        <Text>{tempMaxTarde}ºC   {tempMinTarde}ºC</Text>

                        <Text>{tempMaxNoite}ºC   {tempMinNoite}ºC</Text>

                </View>


            </View>
        </TouchableOpacity>
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