import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Filter from "./components/Filter";
import Title from "./components/Title";
import UserInput from "./components/UserInput";
import TaskList from "./components/TaskList";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filtered, setFiltered] = useState([])
  
  const store = async() => {
    try {
		 await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
		} catch (e) {
			console.log(e);
		}
  }
  
  useEffect(() => {
    store()
  }, [tasks])

  const fetchTasks = async () => {
    try {
      const fetchedData = await AsyncStorage.getItem('tasks')
      if (fetchedData) setTasks([...JSON.parse(fetchedData)])
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {fetchTasks()} , [])
  const addTask = (task) => setTasks(prev => [task, ...prev])
  const deleteTask = (id) => {
    setTasks([...tasks.filter((task) => task.id !== id)])
    setFiltered([...filtered.filter((task) => task.id !== id)]);
    
  }
  const toggleComplete = (id) => {
    let taskIndex = tasks.findIndex(task => task.id == id);
    tasks[taskIndex].isCompleted = !tasks[taskIndex].isCompleted;
    tasks[taskIndex].date = new Date();
    setTasks([...tasks])
  }
  const filter = (text) => { 
    text = text.toLowerCase();
    let filteredTasks = tasks.filter(t => t.title.toLowerCase().includes(text));
    setFiltered([...filteredTasks])
  }

  

  return (
		<View style={styles.container}>
      <View style={ styles.screenWidth}>
				<Title title="Task Manager" />
				<Filter onFilter={filter} />
				<TaskList
					tasks={tasks}
					onStatusChange={toggleComplete}
					onDelete={deleteTask}
					filtered={filtered}
				/>
			</View>
      <View style={styles.container }>
				<UserInput addTask={addTask} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fefefe",
    alignItems: "center", 
    width: '100%', 

  },
  screenWidth: {
    paddingHorizontal: 16, 
    width: Platform.OS==='web'? '60%':'100%',
    alignItems: "center", 
    height:"100%"
  }
});
