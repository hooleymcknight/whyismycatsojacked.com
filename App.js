import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import * as ImagePicker from 'react-native-image-picker'

const createFormData = (photo, body) => {
  const data = new FormData()

  data.append('photo', {
    name: photo.fileName,
    type: photo.type,
    uri:
      Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', ''),
  })

  Object.keys(body).forEach((key) => {
    data.append(key, body[key])
  })

  return data
}



export default function App() {
  const [ statePhoto, setPhoto ] = useState('')

  const handleUploadPhoto = async () => {
    const { uri } = statePhoto
    if (uri) {
      fetch('http://24.17.196.104:3000/api/upload', {
        method: 'POST',
        body: createFormData(statePhoto, { userId: '123' }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log('upload succes', response)
          alert('Upload success!')
          this.setState({ photo: null })
        })
        .catch((error) => {
          console.log('upload error', error)
          alert('Upload failed!')
        })
    }
  }

  const handleChoosePhoto = () => {
    console.log('=================== choose photo')
    const options = {
      noData: true,
      mediaType: 'photo',
    }

    ImagePicker.launchImageLibrary(options, response => {
      console.log('please')
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        const source = { uri: response?.uri }
        console.log(source)
        setPhoto(source)
      }
    })
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {statePhoto && (
        <div>
          <Image
            source={{ uri: statePhoto.uri }}
            style={{ width: 300, height: 300 }}
          />
          <Button title="Upload" onPress={handleUploadPhoto} />
        </div>
      )}
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: '',
  },
})