import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Sobre() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Paulo Afonso Della Mêa dos Santos</Text>
            </View>
            <Text style={styles.text}>RA: 1121733</Text>
            <Text style={styles.header}>React Native</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        alignItems: "center",
    },
    text: {
        fontSize: 20,
    },
    header:{
        paddingTop: 450,
    }
});