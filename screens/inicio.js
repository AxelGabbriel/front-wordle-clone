import React from "react";
import {View, StyleSheet, Text, TouchableOpacity, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";

const inicio=({})=>{
    const navigation = useNavigation();

    return(
        
        <View style={styles.container}>
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('juego'), 
                console.log('Presionaste el boton de Login')
                
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
        backgroundColor: "gray",
    
      },

      buttonl: {
        backgroundColor: "yellow",
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
        color: "black",
        
      },



})

