import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Touchable, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';


export default function App() {
  const [count, setCount] = useState(0);

  // Ejemplo de lista de elementos
  const data = [
    { id: '1', title: 'Elemento 1' },
    { id: '2', title: 'Elemento 2' },
    { id: '3', title: 'Elemento 3' },
    { id: '4', title: 'Elemento 4' },
  ];

  // Renderizar cada elemento de la lista
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Lore</Text>
      <Text style={styles.title}>Ipsum {count}</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>Púchame</Text>  
      </TouchableOpacity>
      
      <Image 
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1QRC1WFKpPOPWNjiv788N4L82gYPqYOjAbqrkRA5UXoQE-gKpQ15WslM42JfViRjPehE&usqp=CAU" }}
        style={styles.image}
      />

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: 'red',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
});
