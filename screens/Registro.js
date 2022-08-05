import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
const Registro = ({}) => {
    const navigation = useNavigation();


    const [username, setUsername] = useState('')
    const [correo, setCorreo] = useState('')
    const [nombre, setNombre] = useState('')
    const [clave, setClave] = useState('')
    const [verificar, setVerificar] = useState('')





        return (
    <View style={styles.container}>

    <Text style={styles.title}>
        Crear Cuenta
    </Text>

    <TextInput
    style={styles.tiuser} 
    placeholder='Username'
    onChangeText={(newText) => setUsername(newText)}
    />

    <TextInput
    style={styles.ti} 
    placeholder='Correo Electronico'
    onChangeText={(newText) => setCorreo(newText)}
    />
      
   <TextInput
    style={styles.ti} 
    placeholder='Nombre'
    onChangeText={(newText) => setNombre(newText)}
    />


    <TextInput
    secureTextEntry={true} 
    style={styles.ti} 
    placeholder='Contraseña'
    onChangeText={(newText) => setClave(newText)}
    />

    <TextInput
    secureTextEntry={true} 
    style={styles.ti} 
    placeholder='Confirmar Contraseña'
    onChangeText={(newText) => setVerificar(newText)}
    />

    <TouchableOpacity
        onPress={() => { 
          try {
              fetch('https://backend-wordle-axel.herokuapp.com/registro', {
                method: 'POST',
                headers: {
                Accept: 'application/json',
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                      username: username,
                      correo: correo,
                      nombre: nombre,
                      contraseña: clave,
                      verificarclave: verificar
                    })
                  })
                  .then((result) => result.json())
                  .then((datos) => {
                    console.log (datos)
                    if (datos == 'contraseñas no compatibles') {
                      Alert.alert(datos)
                    }else {
                      Alert.alert('Registro Realizado')
                      navigation.navigate('Login')
                    }
                    
                  })
                  }catch (error){
                    console.error(error)
                    
                  }
          
            
        }}
        style={styles.button}>
            <Text style={styles.textbutton}>
            Registrarse
            </Text>
    </TouchableOpacity>

    

</View>
)
}
export default Registro

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#778899",
    
      },
      title: {
        fontSize: 50,
        color: "#000000",
        marginBottom: 50,
        fontWeight: 'bold'
    
      },
      tiuser: {
        height: 40,
        marginTop: 50,
        borderWidth: 2,
        padding: 10,
        borderColor: "#000000",
        height: 50, 
        width: 250,
        backgroundColor: "#f8f8ff",

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