/** @format */

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const TaskItem = ({ task , onStatusChange, onDelete}) => {

	return (
		<View style={styles.container}>

        <TouchableOpacity onPress={ () => onStatusChange(task.id) } style={ styles.completeContainer}>
          { task.isCompleted && <FontAwesome name="circle" size={24} color="#1BB55C" /> }
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.titleContainer}
					onPress={() => onStatusChange(task.id)}>
					<Text style={styles.title}>{task.title}</Text>
					<Text style={styles.date}>{task.date.toLocaleString()}</Text>
				</TouchableOpacity>
	
      <TouchableOpacity style={ styles.buttonContainer } onPress={ ()=>onDelete(task.id)}>
				<Feather name="x" size={15} color="white" />
			</TouchableOpacity>
		</View>
	);
};

export default TaskItem;

const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		backgroundColor: "#f0f0f0",
		shadowOffset: { with: 1, height: 1 },
		shadowRadius: 4,
		shadowOpacity: 0.25,
		shadowColor: "#000",
		borderRadius: 8,
		elevation: 3,
		padding: 16,
	},
	
	titleContainer: {
    marginLeft: 16,
    flex:1
	},
	title: {
		fontWeight: "normal",
		fontSize: 16,
		lineHeight: 24,
		color: "#263238",
	},
	date: {
		fontWeight: "normal",
		fontSize: 14,
		lineHeight: 20,
		color: "#263238",
		opacity: 0.54,
	},
	completeContainer: {
		width: 40,
		height: 40,
		backgroundColor: "#E0E1E1",
		borderRadius: 999,
		justifyContent: "center",
		alignItems: "center",
	},

	buttonContainer: {
		width: 30,
		height: 30,
		backgroundColor: "#E74C3C",
		justifyContent: "center",
		alignItems: "center",
    borderRadius: 25,
    marginLeft:16
	},
});
