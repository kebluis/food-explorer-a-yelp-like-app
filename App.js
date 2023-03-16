import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import SearchScreen from "./src/screens/SearchScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: "Food Explorer",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// const navigator = createStackNavigator(
//   {
//     Search: SearchScreen,
//     Restaurant: RestaurantScreen,
//   },
//   {
//     initialRouteName: "Search",
//     defaultNavigationOptions: {
//       headerTitleAlign: "center",
//       title: "Food Explorer",
//     },
//   }
// );

// export default createAppContainer(navigator);
