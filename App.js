import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Restaurant: RestaurantScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      headerTitleAlign: "center",
      title: "Food Explorer",
    },
  }
);

export default createAppContainer(navigator);
