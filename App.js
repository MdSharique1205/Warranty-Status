import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from "./src/screens/ImageScreen";
import ListScreen from "./src/screens/ListScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreeen from "./src/screens/ColorScreen";
import TempScreen from "./src/screens/TempScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreeen,
    Temp: TempScreen,
  },
  {
    initialRouteName: "Temp",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
