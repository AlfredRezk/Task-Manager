/** @format */

import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const UserInput = ({ addTask }) => {
	const [task, setTask] = useState("");

	const onAddTask = () => {
		addTask({
			id: Date.now().toString(),
			isCompleted: false,
			title: task,
			date: new Date(),
		});

		setTask("");
	};

	return (
		<KeyboardAvoidingView behavior="heigh" style={styles.container}>
			<View style={styles.screenWidth}>
				<View style={styles.inputContainer}>
          <TextInput
            style={ [styles.input, Platform.OS=="web"&&{outlineStyle: "none"}]}
						placeholder="Add Task"
						type="text"
						value={task}
						onChangeText={setTask}
						onSubmitEditing={onAddTask}
					/>
				</View>
				<TouchableOpacity style={styles.buttonContainer} onPress={onAddTask}>
					<Feather name="plus" size={24} color="white" />
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
};

export default UserInput;

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		bottom: 0,
		flexDirection: "row",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 15,
		backgroundColor: "#F0F0F0",
		elevation: 4,
		borderTopColor: "white",
		borderTopWidth: 1,
		borderStyle: "solid",
	},

	screenWidth: {
		paddingHorizontal: 16,
		width: Platform.OS === "web" ? "60%" : "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		alignItems: "center",
	},

	inputContainer: {
		backgroundColor: "#FEFEFE",
		borderColor: "#E8E8E8",
		borderWidth: 1,
		borderStyle: "solid",
		borderRadius: 100,
		height: 50,
		flexDirection: "row",
		alignItems: "center",
		marginRight: 15,
		flex: 1,
		paddingHorizontal: 16,
	},
	
	buttonContainer: {
		width: 50,
		height: 50,
		borderRadius: 24,
		backgroundColor: "#6754DA",
		justifyContent: "center",
		alignItems: "center",
		elevation: 6,
		shadowOffset: { with: 0, height: 3 },
		shadowRadius: 6,
		shadowOpacity: 0.1,
		shadowColor: "#000",
		shadowOffset: { with: 0, height: 4 },
		shadowRadius: 8,
		shadowOpacity: 0.08,
		shadowColor: "#000",
		shadowOffset: { with: 0, height: 1 },
		shadowRadius: 12,
		shadowOpacity: 0.04,
    shadowColor: "#000",
	},
	input: {
		width: "100%",
		height: "100%",
		paddingHorizontal: 5,
		// outlineStyle: "none",
		fontSize: 18
	},
});
