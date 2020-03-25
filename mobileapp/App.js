import React,{useState,useEffect} from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [title] = useState('Hooks React Component');
  const [counter,setcounter] = useState(0)

  return (
    <View style={styles.container}>
      <Text>This is React Native from Nareshit</Text>
      <Text>{counter}</Text>
      <Button className="btn btn-info"
            onPress={() => {setcounter(counter+1)}}
            title="Counter"
            >
                
            </Button>
      <Button
        onPress={() => {
          alert('You tapped the button!');
        }}
        title="Press Me"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
