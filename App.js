import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import { Provider } from "./src/context/BlogContext";

const Stack = createStackNavigator();

const App = () => {
	return (
		<Provider>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Index">
					<Stack.Screen name="Index" component={IndexScreen} />
					<Stack.Screen name="Show" component={ShowScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
};

export default App;
