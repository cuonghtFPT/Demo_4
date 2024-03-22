import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

const App = () => {
  const [data,setData] =useState<any>();
  const [img,setImg] = useState<any>();
  return (
    <View style={{flex:1, alignItems:'center'}}>
      <Button title='Take photo' onPress={async() => {
        const result = await launchCamera({saveToPhotos:true,
        cameraType:'back',mediaType:'photo',quality:1
        },setData);
      }}/>
      <Text style={{fontSize:22}}>{JSON.stringify(data)}</Text>

      <Button title='Take libary' onPress={async() => {
        const result = await launchImageLibrary({mediaType:'photo',selectionLimit:10
        },setImg);
      }}/>
            <Text style={{fontSize:22}}>{JSON.stringify(img)}</Text>
      {/* <Text style={{fontSize:22}}>{data.assets[0].originalPath}</Text>
      <Text style={{fontSize:22}}>{data.assets[0].type}</Text>
      <Text style={{fontSize:22}}>{data.assets[0].filename}</Text> */}

    </View>
  )
}

export default App

const styles = StyleSheet.create({})

// import { Button, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import TrackPlayer from 'react-native-track-player'

// const App = () => {
//   const start = async()=>{
//     await TrackPlayer.setupPlayer();

//     await TrackPlayer.add({
//       id:'trackId',
//       url:require('./gio_lofi.mp3'),
//       title:'Track Title',
//       artist:'Track Artist'
//     });
//     await TrackPlayer.play();
//     console.log("dax chay");
    
//   }
//   return (
//     <View style={{flex:1,alignItems:'center'}}>
//       <Button title='Player' onPress={start}/>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})