import { View, Text, Button } from 'react-native'
import React, { useLayoutEffect } from 'react'

export default function Dados({navigation}, props) {

    useLayoutEffect(() => {
      console.log(props);
        navigation.setOptions({
            headerRight: () => (
              <Button onPress={() => navigation.navigate("Sobre")}
                title="Sobre"
                color="black"
              />
            ),
          })

        console.log(props);
    }, [])

  return (
    <View>
      <Text>Dados</Text>
    </View>
  )
}