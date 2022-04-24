import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useState, useLayoutEffect } from 'react'

export default function Registro(props) {

    const data = props.data
    const [cidade, setCidade] = useState("Não Informado")


    useLayoutEffect(() => {
        console.log("Dados:"+data)
        
    }, [])

    return (

        <TouchableOpacity
            onPress={() => (console.log("Aqui: props"))}
        >
            <View style={styles.container}>
                <View style={styles.linha}>
                    <Text>
                        Dados: {data}
                    </Text>                    
                </View>
                <View style={styles.linha}>
                    <Text>
                        Dados 2: {data.cidade}
                    </Text>                    
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "gray",
        margin: 5

    }, linha: {
        flexDirection: "row"
    }, coluna: {
        flex: 1
    }, valor: {
        flex: 4
    }, foto: {
        flex: 1
    }, dados: {
        flex: 4
    }, imagem: {
        width: 50,
        height: 50,
    },
});