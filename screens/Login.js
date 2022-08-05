import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const Login = ({}) => {
    const navigation = useNavigation();

    const [username, setUsername] = useState('')
    const [clave, setClave] = useState('')






    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Wordle Axel
            </Text>

            <TextInput
            style={styles.tiemail} 
            keyboardType='email-address'
            placeholder='Correo Electronico'
            placeholderTextColor= 'gray'
            onChangeText={(newText) => setUsername(newText)}/>

            <TextInput
            secureTextEntry={true} 
            style={styles.tipassword}
            keyboardType='default'
            placeholder='Contraseña'
            placeholderTextColor= 'gray'
            onChangeText={(newText) => setClave(newText)}/>

            <View style={styles.containerb}>
            <TouchableOpacity
                onPress={() => {
                    //navigation.navigate('inicio'), 
                    //console.log('Presionaste el boton de Login')

                    try {
                      fetch('https://backend-wordle-axel.herokuapp.com/login', {
                        method: 'POST',
                        headers: {
                        Accept: 'application/json',
                                'Content-Type': 'application/json'
                          },
                          body: JSON.stringify({
                              username: username,
                              password: clave,
                            })
                          })
                          .then((result) => result.json())
                          .then((datos) => {
                            console.log (datos)
                            if (datos == 1) {
                              Alert.alert('Sesion Iniciada')
                              //navigation.navigate('inicio')
                            }else {
                              Alert.alert('No se pudo iniciar sesion')
                            }
                            
                          })
                          }catch (error){
                            console.error(error)
                            
                          }
                    
                }}
                style={styles.buttonl}>
                    <Text style={styles.tblogin}>
                    Iniciar Sesion
                    </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Registro') 
                }}
                style={styles.buttonr}>
                    <Text style={styles.tbregister}>
                    Registrarse
                    </Text>
            </TouchableOpacity>
            </View>
            

        </View>
    )
};

export default Login

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightskyblue",
    
      },
      containerb: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    
      },
      title: {
        fontSize: 50,
        color: "black",
        marginBottom: 50,
        fontWeight: 'bold'
    
      },
      tiemail: {
        height: 40,
        marginTop: 80,
        borderWidth: 2,
        padding: 10,
        borderColor: "black",
        height: 50, 
        width: 250,
        backgroundColor: "white",

      },
      tipassword: {
        height: 40,
        marginTop: 12,
        borderWidth: 2,
        padding: 10,
        borderColor: "black",
        height: 50, 
        width: 250,
        backgroundColor: "#a9a9a9"
        
      },
      buttonl: {
        backgroundColor: "lightgray",
        padding: 10,
        marginTop: 30,
        marginHorizontal: 5,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        height: 50, 
        width: 150,
      
      },
      buttonr: {
        backgroundColor: "gray",
        padding: 10,
        marginTop: 30,
        marginHorizontal: 5,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        height: 50, 
        width: 150,
      
      },
      tblogin: {
        fontSize: 20,
        color: "black",
        
      },
      tbregister: {
        fontSize: 20,
        color: "white",
        
      },

});

