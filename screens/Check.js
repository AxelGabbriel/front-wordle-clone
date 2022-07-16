import React from "react";
import {View, StyleSheet, Text, TouchableOpacity, TextInput, Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Check = ({}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <Text style={styles.text}>
                Se envio un codigo de verificacion al correo, ingresar en la siguiente casilla
            </Text>

            <TextInput style={styles.ti}/>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Login')
                    
                }}
                style={styles.button}>
                    <Text style={styles.textbutton}>
                    Verificar
                    </Text>
            </TouchableOpacity>

        </View>
    )
};
export default Check

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightskyblue",
    
      },
      text:{
        fontSize: 16,
        padding: 20,
        backgroundColor: 'blue',
        color: 'white'
        
      },
      ti: {
        height: 40,
        marginTop: 80,
        padding: 10,
        height: 50, 
        width: 250,
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "black",

      },
      button: {
        backgroundColor: "lightgray",
        padding: 10,
        marginTop: 30,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        height: 50, 
        width: 150,
      
      },
      textbutton: {
        fontSize: 20,
        color: "black",
        
      },

});