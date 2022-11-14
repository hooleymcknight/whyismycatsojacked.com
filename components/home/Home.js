import { StyleSheet, ScrollView } from 'react-native'

import pets from '../pets/pets.json'
import PetTile from '../pets/PetTile'
import appStyles from '../../styles/app-styles'

const styles = StyleSheet.create(appStyles)

const Home = ({ navigation }) => {

  return (
    <ScrollView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', flexGrow: 1, flexBasis: '50%', justifyContent: 'center', height: '100%' }}>
        {Object.keys(pets).map((x) =>
          <PetTile key={x} name={x} data={pets[x]} navigation={navigation} />
        )}
      </ScrollView>
    </ScrollView>
  )
}

export default Home