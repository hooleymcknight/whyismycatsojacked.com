import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native'
import ptStyles from '../../styles/pet-tile-styles'
import pets from './pets.json'

const styles = StyleSheet.create(ptStyles)

const Christopher = () => {
  const name = 'Christopher'
  const data = pets['Christopher']

  const win = Dimensions.get('window')

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: data.image }}
        style={{  width: win.width / 2, height: win.width / 2 }}
      />
      <Text style={styles.text}>{name} the Cat</Text>
    </View>
  )
}

export default Christopher