import React from "react"
import {View, StyleSheet, Text, Image, TouchableOpacity,SafeAreaView} from "react-native";

const Block = ({ letter }) => (
    <View style={styles.guessSquare}>
      <Text style={styles.guessLetter}>{letter}</Text>
    </View>
  )


const GuessRow = () => (
    <View style={styles.guessRow}>
      <Block letter="A" />
      <Block letter="E" />
      <Block letter="I" />
      <Block letter="O" />
      <Block letter="" />
    </View>
  )


  const KeyboardRow = ({ letters }) => (
    <View style={styles.keyboardRow}>
      {letters.map(letter => (
        <TouchableOpacity>
          <View style={styles.key}>
            <Text style={styles.keyLetter}>{letter}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )

  const Keyboard = () => {
    const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
    const row3 = ["Z", "X", "C", "V", "B", "N", "M", "⌫"]
  
    return (
      <View style={styles.keyboard}>
        <KeyboardRow letters={row1} />
        <KeyboardRow letters={row2} />
        <KeyboardRow letters={row3} />
        <View style={styles.keyboardRow}>
          <TouchableOpacity>
            <View style={styles.key}>
              <Text style={styles.keyLetter}>ENTER</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }





export default function juego() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerjuego}>
        <GuessRow />
        <GuessRow />
        <GuessRow />
        <GuessRow />
        <GuessRow />
        <GuessRow />
        </View><Keyboard />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    guessRow: {
      flexDirection: "row",
      justifyContent: "center",
    },
    guessSquare: {
      borderColor: "#d3d6da",
      borderWidth: 2,
      width: 50,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      margin: 5,
    },

    guessLetter: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#878a8c",
      },

      containerjuego: {
        marginTop: 100,
    },

    container: {
        justifyContent: "space-between",
        flex: 1,
      },
    
      // keyboard
      keyboard: { flexDirection: "column" },
      keyboardRow: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 10,
      },
      key: {
        backgroundColor: "#d3d6da",
        padding: 10,
        margin: 3,
        borderRadius: 5,
      },
      keyLetter: {
        fontWeight: "500",
        fontSize: 15,
      },

      keyboard: { 
        flexDirection: "column" ,
        marginBottom: 50,
        },

  })