import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useLayoutEffect, useEffect } from 'react'

export default function Registro(props) {

    const dados = props.data
    const [cidade, setCidade] = useState("Não Informado")
    const [manha, setManha] = useState([])
    const [tarde, setTarde] = useState([])
    const [noite, setNoite] = useState([])

    useLayoutEffect(() => {
        if (dados.manha) {
            setCidade(dados.manha.entidade)
            setManha(dados.manha)
            setTarde(dados.tarde)
            setNoite(dados.noite)
        }
    }, [noite])

    return (

        <TouchableOpacity
            onPress={() => props.navigation.navigate("Dados", props.data)}>
            <View style={styles.container}>
                <View style={styles.linha}>
                   <Text>{cidade}</Text>
                </View>
                
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "gray",
        margin: 5

    }, linha: {
        flexDirection: "row",
        alignSelf: "center"
    }
});