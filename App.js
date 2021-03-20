import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from './src/screens/ListScreen';
import AdvancedListScreen from './src/screens/AdvancedListScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    AdvancedList: AdvancedListScreen,
  },
  {
    initialRouteName: 'AdvancedList',
    defaultNavigationOptions: {
      title: "React Native App Demo",
    },
  }
);

export default createAppContainer(navigator);
