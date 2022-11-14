import { Text, ScrollView, View, Image, Dimensions, FlatList } from 'react-native'
import { createStyles, minWidth } from 'react-native-media-queries'

import ptStyles from '../../styles/pet-page-styles'
import pets from './pets.json'

const styles = createStyles(
  ptStyles,

  minWidth(768, {
    statsWrapper: {
      width: 700,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 40,
    }
  })
)

const getDataList = (list) => {
  let dataArray = []
  const arr = list.map(x => new Object({ key: x }))
  arr.forEach((obj) => {
    dataArray.push(obj)
  })
  return dataArray
}

const Pet = ({ navigation }) => {
  const name = navigation.state.params.name
  const data = pets[name]

  const win = Dimensions.get('window')

  return (
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center',  justifyContent: 'center' }}>
        <Image
          source={{ uri: 'https://whyismycatsojacked.com/images/main_page/' + data.image }}
          style={{ width: win.width / 1.5, height: win.width / 1.5, justifyContent: 'center', margin: 'auto', maxWidth: 400, maxHeight: 400 }}
        />
      </View>
      <Text style={styles.header}>{name}</Text>

      <Text style={styles.bio}>{data.bio}</Text>

      <View style={styles.statsWrapper}>
        {Object.keys(data.list_data).map(x =>
          <View key={x} style={{ flexDirection: 'row', alignItems: 'flex-start',  justifyContent: 'space-between' }}>
            <Text style={styles.leftList}>{x}</Text>
            {typeof(data.list_data[x]) === 'string'
            ?
            <Text style={styles.list}>{data.list_data[x]}</Text>
            :
            <View style={styles.list}>
              {data.list_data[x].map(y =>
                <Text key={y} style={styles.rightList}>{y}</Text>
              )}
            </View>}
          </View>
        )}
      </View>

      <View contentContainerStyle={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', flexGrow: 1, flexBasis: '50%', justifyContent: 'center', height: '100%' }}>
        {data.images.map(x =>
          <Image
            key={x}
            source={{ uri: `https://whyismycatsojacked.com/images/pets/${name.toLowerCase()}/${x}`}}
            style={{ width: null, height: 300 }}
            resizeMode={'contain'}
          />
        )}
      </View>

    </ScrollView>
  )
}

export default Pet