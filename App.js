import React from 'react'
import {Text, View ,Button} from 'react-native';
import styles from "./CSS/style"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box_1 }>
        <Text>Square 1</Text>        
      </View>
     <View style={styles.box_2}>
      <Text>Square 2</Text>     
     </View>
     <View style={styles.box_3}> 
       <Text >Square 3</Text>      
     </View>
    </View>
  );
  
}

