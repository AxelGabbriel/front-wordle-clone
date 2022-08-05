import React from "react"
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Button,
} from "react-native"

const Block = ({
  index,
  guess,
  word,
  guessed,
}: {
  index: number,
  guess: string,
  word: string,
  guessed: boolean,
}) => {
  const letter = guess[index]
  const wordLetter = word[index]

  const blockStyles: any[] = [styles.guessSquare]
  const textStyles: any[] = [styles.guessLetter]

  if (letter === wordLetter && guessed) {
    blockStyles.push(styles.guessCorrect)
    textStyles.push(styles.guessedLetter)
  } else if (word.includes(letter) && guessed) {
    blockStyles.push(styles.guessInWord)
    textStyles.push(styles.guessedLetter)
  } else if (guessed) {
    blockStyles.push(styles.guessNotInWord)
    textStyles.push(styles.guessedLetter)
  }

  return (
    <View style={blockStyles}>
      <Text style={textStyles}>{letter}</Text>
    </View>
  )
}

const GuessRow = ({
  guess,
  word,
  guessed,
}: {
  guess: string,
  word: string,
  guessed: boolean,
}) => {
  return (
    <View style={styles.guessRow}>
      <Block index={0} guess={guess} word={word} guessed={guessed} />
      <Block index={1} guess={guess} word={word} guessed={guessed} />
      <Block index={2} guess={guess} word={word} guessed={guessed} />
      <Block index={3} guess={guess} word={word} guessed={guessed} />
      <Block index={4} guess={guess} word={word} guessed={guessed} />
    </View>
  )
}

const KeyboardRow = ({
  letters,
  onKeyPress,
}: {
  letters: string[],
  onKeyPress: (letter: string) => void,
}) => (
  <View style={styles.keyboardRow}>
    {letters.map(letter => (
      <TouchableOpacity onPress={() => onKeyPress(letter)} key={letter}>
        <View style={styles.key}>
          <Text style={styles.keyLetter}>{letter}</Text>
        </View>
      </TouchableOpacity>
    ))}
  </View>
)

const Keyboard = ({ onKeyPress }: { onKeyPress: (letter: string) => void }) => {
  const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
  const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
  const row3 = ["Z", "X", "C", "V", "B", "N", "M", "⌫"]

  return (
    <View style={styles.keyboard}>
      <KeyboardRow letters={row1} onKeyPress={onKeyPress} />
      <KeyboardRow letters={row2} onKeyPress={onKeyPress} />
      <KeyboardRow letters={row3} onKeyPress={onKeyPress} />
      <View style={styles.keyboardRow}>
        <TouchableOpacity onPress={() => onKeyPress("ENTER")}>
          <View style={styles.key}>
            <Text style={styles.keyLetter}>ENTER</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const words = [
  "REMAR",
  "COMER",
  "FELIZ",
  "SUEÑO",
  "BARCO",
  "ENTRA",
  "SOÑAR",
  "MENTA",
  "MONOS",
  "ANOTA",
  "ARUBA",
  "MALTA",
  "ANIMO",
  "APODO",
  "GOLPE",
  "DESEO",
  "PODER",
  "NUEVO",
  "HACER",
  "CREAR",
  "CREER",
  "ORDEN",
  "PEDIR",
  "DULCE",
  "ETAPA",
  "ANTES",
  "REGLA",
  "PAPEL",
  "FRASE",
  "SUAVE",
  "YERNO",
  "CIELO",
  "FIRME",
  "POBRE",
  "ERROR",
  "TEXTO",
  "BELLA",
  "BEBER",
  "ENOJO",
  "LIDER",
  "RESTA",
]

interface IGuess {
  [key: number]: string;
}

const defaultGuess: IGuess = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
}

export default function juego() {
  const [activeWord, setActiveWord] = React.useState(words[0])
  const [guessIndex, setGuessIndex] = React.useState(0)
  const [guesses, setGuesses] = React.useState(defaultGuess)
  const [gameComplete, setGameComplete] = React.useState(false)

  const handleKeyPress = (letter: string) => {
    const guess: string = guesses[guessIndex]

    if (letter === "ENTER") {
      if (guess.length !== 5) {
        alert("PALABRA INCOMPLETA")
        return
      }

      if (!words.includes(guess)) {
        alert("PALABRA NO VALIDA")
        return
      }

      if (guess === activeWord) {
        setGuessIndex(guessIndex + 1)
        setGameComplete(true)
        alert("GANASTE")
        return
      }

      if (guessIndex < 5) {
        setGuessIndex(guessIndex + 1)
      } else {
        setGameComplete(true)
        alert("PERDISTE")
        return
      }
    }

    if (letter === "⌫") {
      setGuesses({ ...guesses, [guessIndex]: guess.slice(0, -1) })
      return
    }

    // don't add if guess is full
    if (guess.length >= 5) {
      return
    }

    setGuesses({ ...guesses, [guessIndex]: guess + letter })
  }

  React.useEffect(() => {
    if (!gameComplete) {
      setActiveWord(words[Math.floor(Math.random() * words.length)])
      setGuesses(defaultGuess)
      setGuessIndex(0)
    }
  }, [gameComplete])

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <GuessRow
          guess={guesses[0]}
          word={activeWord}
          guessed={guessIndex > 0}
        />
        <GuessRow
          guess={guesses[1]}
          word={activeWord}
          guessed={guessIndex > 1}
        />
        <GuessRow
          guess={guesses[2]}
          word={activeWord}
          guessed={guessIndex > 2}
        />
        <GuessRow
          guess={guesses[3]}
          word={activeWord}
          guessed={guessIndex > 3}
        />
        <GuessRow
          guess={guesses[4]}
          word={activeWord}
          guessed={guessIndex > 4}
        />
        <GuessRow
          guess={guesses[5]}
          word={activeWord}
          guessed={guessIndex > 5}
        />
      </View>
      <View>
        {gameComplete ? (
          <View style={styles.gameCompleteWrapper}>
            <Text>
              <Text style={styles.bold}>Correct Word:</Text> {activeWord}
            </Text>
            <View>
              <Button
                title="Reset"
                onPress={() => {
                  setGameComplete(false)
                }}
              />
            </View>
          </View>
        ) : null}
        <Keyboard onKeyPress={handleKeyPress} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  guessRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop:28,
  },
  guessSquare: {
    borderColor: "#f8f8ff",
    borderWidth: 2,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    backgroundColor:"#000000"
  },
  guessLetter: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f8f8ff",
   
  },
  guessedLetter: {
    color: "#fff",
  },
  guessCorrect: {
    backgroundColor: "#9acd32",
    borderColor: "#f8f8ff",
  },
  guessInWord: {
    backgroundColor: "#ffd700",
    borderColor: "#f8f8ff",
  },
  guessNotInWord: {
    backgroundColor: "#a9a9a9",
    borderColor: "#f8f8ff",
  },

  container: {
    justifyContent: "space-between",
    flex: 1,
    backgroundColor:"#000000"
  },

  // keyboard
  keyboard: { flexDirection: "column" },
  keyboardRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  key: {
    backgroundColor: "#808080",
    padding: 10,
    margin: 3,
    borderRadius: 5,
  },
  keyLetter: {
    fontWeight: "500",
    fontSize: 15,
  },

  // Game complete
  gameCompleteWrapper: {
    alignItems: "center",
  },
  bold: {
    fontWeight: "bold",
  },
})