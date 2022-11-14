import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'

const PetTile = (props) => {
  const [isHover, setIsHover] = useState(false)

  const name = props.name
  const data = props.data
  const navigation = props.navigation

  const win = Dimensions.get('window')

  const handleMouseEnter = () => {
    setIsHover(true)
  }
  const handleMouseLeave = () => {
    setIsHover(false)
  }

  const handlePetPage = () => {
    const param = {
      name: name,
    }
    navigation.navigate('Pet', param)
  }

  const styles = StyleSheet.create({
    tiles: {
      backgroundColor: '#4f1665',
      maxWidth: '100%',
      margin: 10
    },
    button: {
      fontSize: 20,
      color: '#fff',
      textAlign: 'center',
      textTransform: 'uppercase',
      fontFamily: 'Nunito',
      opacity: isHover ? 0.7 : 1,
    },
    text: {
      fontSize: 24,
      color: '#fff',
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: 1
    }
  })

  return (
    <View style={styles.tiles}>
      <TouchableOpacity title={name} style={styles.button} color="#4f1665" onPress={handlePetPage} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
        <Image
          source={{ uri: 'https://whyismycatsojacked.com/images/main_page/' + data.image }}
          style={{  width: (win.width / 2) - 20, height: (win.width / 2) - 20, maxWidth: 300, maxHeight: 300 }}
        />
        <Text style={styles.button}>{name}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PetTile