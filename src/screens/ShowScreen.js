import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const ShowScreen = ({ route, navigation }) => {
	let { state } = useContext(Context);

	let blogPost = state.find((current) => current.id === route.params.id);

	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity onPress={() => navigation.navigate("Edit", { blogPost })}>
					<Feather style={styles.iconStyle} name="edit-2" size={25} />
				</TouchableOpacity>
			),
		});
	});

	return (
		<View>
			<Text>
				{blogPost.title} - {blogPost.content}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	iconStyle: {
		paddingHorizontal: 15,
	},
});

export default ShowScreen;
