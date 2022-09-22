import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, TextInput, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import Task from './components/Task'; 




export default function App() {

  {/* save inputs text and category */}
  const [task, setTask] = useState((text, cat)=>{
    return{
      text: text,
      cat: cat,
    }

  });

  {/* for saving state as arrays */}
  const [todo, setTodo] = useState([]);

  {/* adding new task to array and saving inputs as null */}
  const handleTask = ()  => {
    Keyboard.dismiss();
    setTodo([...todo, task])
    setTask({text:null, cat: null});
  }
  
  {/* handle search */}
 const handleSearch = (e) =>{
  const values = e.target.value;
  const searchWord = todo.find((value)=>value.cat==values)
  
  if(searchWord){
    setTodo([searchWord])

  }else{
    return todo;
  }
 }

 const deleteTask = (index) =>{
 let itemCopy = [...todo];
 itemCopy.splice(index, 1);
 setTodo(itemCopy);
 }

  return (
    <View style={styles.container}>


      <View style={styles.wrapper}>
        {/* app header name */}
        <Text style={styles.title}>TODO APP</Text>



        <KeyboardAvoidingView 
      behavior={Platform.os ==='ios'? 'padding' : 'height'}
      style={styles.searchInput}>
      {/* app search inputs */}
        <TextInput 
         style={styles.search}
         placeholder={'Search by Category'}
         name={'search'}
         onChange={(handleSearch)}
        >

        </TextInput>
      </KeyboardAvoidingView>
    


        <View style={styles.item}>
            {
              todo.map((item, index)=>{
                return (
                  <TouchableOpacity key={index} onPress={() =>deleteTask()}>
                  <Task text={item.text} cat={item.cat}/>
                  </TouchableOpacity>
                )
              })
              
            }
            
        </View>

      </View>
      <KeyboardAvoidingView 
      behavior={Platform.os ==='ios'? 'padding' : 'height'}
      style={styles.taskInput}>

      {/* text inputs */}
        <TextInput style={styles.input} placeholder={'Write your task'} value={task.text} onChangeText={text => setTask({ text: text})}>

        </TextInput>
        <TextInput style={styles.catinput} placeholder={'add category'} value={task.cat} onChangeText={text => setTask({...task, cat: text})}>

        </TextInput>
        <TouchableOpacity onPress={()=> handleTask()}>
          <View style={styles.buttonWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

{/* styles */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd700',
    opacity: 0.8,
   
  },
  wrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
title: {
   fontSize:24,
   fontWeight: 'bold',
   color: '#056608',
   alignItems: 'center'
},
item: {
   marginTop: 30,
},

taskInput:{
  position: 'absolute',
  bottom: 60,
  width: '100%',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'row'

},
searchInput:{
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',

},
input:{
  width: 250,
  paddingVertical: 15,
  paddingHorizontal: 15,
  backgroundColor: '#fff',
  borderRadius: 60,
  borderColor: '#c0c0c0',
  borderWidth: 1,
  flexDirection: 'row'
 
},
catinput:{
  width: 150,
  paddingVertical: 5,
  paddingHorizontal: 5,
  backgroundColor: '#fff',
  borderRadius: 60,
  borderColor: '#c0c0c0',
  borderWidth: 2,
  flexDirection: 'row'
 
},
search:{
  width: 200,
  paddingVertical: 15,
  paddingHorizontal: 15,
  backgroundColor: '#fff',
  borderRadius: 60,
  borderColor: '#c0c0c0',
  borderWidth: 1,
  flexDirection: 'row'
 
},
buttonWrapper:{
  width: 60,
  height: 60,
  backgroundColor: '#fff',
  borderRadius: 60,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#c0c0c0',
  borderWidth: 1,
  flexDirection: 'row'

},
addText:{

}

});
