import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from './src/screens/ListScreen';
import AdvancedListScreen from './src/screens/AdvancedListScreen';
import ButtonScreen from './src/screens/ButtonScreen';
import ParentScreen from './src/screens/ParentScreen';
import ComposedListScreen from './src/screens/ComposedListScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    AdvancedList: AdvancedListScreen,
    Buttons: ButtonScreen,
    Parent: ParentScreen,
    ComposedList: ComposedListScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "React Native App Demo",
    },
  }
);

export default createAppContainer(navigator);
