import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import ImageViewer from './src/components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  const PlaceholderImage = { uri: 'https://reactnative.dev/img/tiny_logo.png' };

  return (
    <View style={styles.container}>
      <Text>Camera</Text>
      <Pressable
        style={[styles.button, { backgroundColor: '#fff' }]}
        onPress={pickImageAsync}
      ><Text>Selecionar uma foto</Text></Pressable>
      <ImageViewer
        placeholderImageSource={PlaceholderImage}
        selectedImage={selectedImage}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  button: {
    width: '100%',
    height: 40,
    borderColor: '#000',
    borderWidth: 2,
    textAlign: 'center',
  }
});
