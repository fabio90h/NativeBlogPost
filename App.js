import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import { Provider } from "./src/context/BlogContext";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import CreateScreen from "./src/screens/CreateScreen";

const Stack = createStackNavigator();

const App = () => {
	return (
		<Provider>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Index">
					<Stack.Screen
						name="Index"
						component={IndexScreen}
						options={({ navigation }) => ({
							headerRight: () => (
								<TouchableOpacity onPress={() => navigation.navigate("Create")}>
									<Feather name="plus" size={24} />
								</TouchableOpacity>
							),
						})}
					/>
					<Stack.Screen name="Show" component={ShowScreen} />
					<Stack.Screen name="Create" component={CreateScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
};

export default App;
