import React from "react";
import {View, StyleSheet, Text, TouchableOpacity, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";
import socket, { startsocket } from "../cliente";


const inicio=({})=>{
    const navigation = useNavigation();

    return(
        
        <View style={styles.container}>
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('juego'), 
                console.log('Presionaste el boton jugar')
                socket.connect()
                
                socket.emit('connection')
            }}
            style={styles.buttonl}>
                <Text style={styles.tbinicio}>
                PLAY
                </Text>
        </TouchableOpacity>
      </View>
    )
};
  export default inicio
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#a9a9a9",
    
      },

      buttonl: {
        backgroundColor: "#ffd700",
        padding: 10,
        marginTop: 30,
        marginHorizontal: 5,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        height: 50, 
        width: 150,
      
      },
      
      tbinicio: {
        fontSize: 20,
        color: "#000000",
        
      },



})

