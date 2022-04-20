import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Sobre() {
  return (
    <View>
      <Text>Nome Completo: Paulo Afonso Della Mêa dos Santos</Text>
      <Text>RA: 1121733</Text>
      <Text>React Native</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 40,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: "center",
    }
  });