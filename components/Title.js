import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from "expo-font";

const Title = (props) => {
  const [loaded] = useFonts({
		poppins: require("../assets/fonts/Poppins-Regular.ttf"),
	});

	if (!loaded) {
		return null;
  }
  
  return (
    <View>
      <Text style={[props.style, styles.title]}>{ props.title}</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
	title: {
		marginTop: 60,
		fontWeight: "bold",
		fontSize: 30,
		lineHeight: 45,
		textAlign: "center",
		fontFamily: "poppins",
	},
});
