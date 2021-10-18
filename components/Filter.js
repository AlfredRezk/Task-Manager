/** @format */

import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Platform, Dimensions } from "react-native";


const Filter = (props) => {
  const [text, setText] = useState("");
  const onSearch = (text) => { 
    setText(text);
    props.onFilter(text);
  }
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={[styles.input, Platform.OS == "web" && { outlineStyle: "none" }]}
				placeholder="Search"
				type="text"
				onChangeText={onSearch}
				value={text}
			/>
		</View>
	);
};

export default Filter;

const styles = StyleSheet.create({
	inputContainer: {
		backgroundColor: "#F6F6F6",
		borderColor: "#E8E8E8",
		borderWidth: 1,
		borderStyle: "solid",
		borderRadius: 100,
		height: 50,
		flexDirection: "row",
		alignItems: "center",
    marginTop: 16,
    width:'100%',
		marginBottom: 20,
	},

	input: {
		width: "100%",
		height: "100%",
		paddingHorizontal: 16,
		fontSize: 16,
	},
});
