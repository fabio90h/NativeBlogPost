import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";

const Stack = createStackNavigator();

const App = () => {
	return (
		<Provider>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Index">
					<Stack.Screen name="Index" component={IndexScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
};

export default App;
