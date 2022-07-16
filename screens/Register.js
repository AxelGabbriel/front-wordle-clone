import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Register = ({}) => {
    const navigation = useNavigation();
        return (
    <View style={styles.container}>

    <Text style={styles.title}>
        Crear Cuenta
    </Text>

    <TextInput
    style={styles.tiuser} 
    keyboardType='default'
    placeholder='Username'
    />

    <TextInput
    style={styles.ti} 
    placeholder='Nombre'
    />

    <TextInput
    style={styles.ti} 
    placeholder='Correo Electronico'
    />

    <TextInput
    secureTextEntry={true} 
    style={styles.ti} 
    placeholder='Contraseña'
    />

    <TextInput
    secureTextEntry={true} 
    style={styles.ti} 
    placeholder='Confirmar Contraseña'
    />

    <TouchableOpacity
        onPress={() => { 
            navigation.navigate('Check'),
            console.log('Presionaste el boton de Register')
        }}
        style={styles.button}>
            <Text style={styles.textbutton}>
            Registrarse
            </Text>
    </TouchableOpacity>

    

</View>
)
}
export default Register

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightskyblue",
    
      },
      title: {
        fontSize: 50,
        color: "black",
        marginBottom: 50,
        fontWeight: 'bold'
    
      },
      tiuser: {
        height: 40,
        marginTop: 50,
        borderWidth: 2,
        padding: 10,
        borderColor: "black",
        height: 50, 
        width: 250,
        backgroundColor: "white",

      },
      ti: {
        height: 40,
        marginTop: 12,
        borderWidth: 2,
        padding: 10,
        borderColor: "black",
        height: 50, 
        width: 250,
        backgroundColor: "white"
        
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