import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = ({}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Wordle Axel
            </Text>

            <TextInput
            style={styles.tiemail} 
            keyboardType='email-address'
            placeholder='Correo Electronico'
            placeholderTextColor= 'gray'/>

            <TextInput
            secureTextEntry={true} 
            style={styles.tipassword}
            keyboardType='default'
            placeholder='Contraseña'
            placeholderTextColor= 'gray'/>

            <View style={styles.containerb}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('inicio'), 
                    console.log('Presionaste el boton de Login')
                    
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

export default Login