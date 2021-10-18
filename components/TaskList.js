import React from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import TaskItem from './TaskItem';

const TaskList = (props) => {

  const { tasks, onStatusChange, onDelete, filtered } = props;

  
  const dataArr = filtered.length>0 ? filtered : tasks
  
  if (tasks.length===0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Tasks, add one</Text>
      </View>

    )
  }
  return (
    <ScrollView style={ { width: '100%'}}>
      <View style={ styles.container}>
      {   dataArr.map((task) => (
          <TaskItem task={ task } key={ task.id } onStatusChange={ onStatusChange } onDelete={ onDelete}/>
          )) 
        }
			</View>
		</ScrollView>
	);
}

export default TaskList

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",

	},
	text: {
		fontWeight: "500",
		fontSize: 16,
    lineHeight: 24,
    marginBottom:'75%'
	},
});
