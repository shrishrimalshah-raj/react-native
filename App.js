import { createStackNavigator, createAppContainer } from 'react-navigation';

// PrimitiveComponent
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/PrimitiveComponent/ComponentsScreen';
import ListScreen from './src/screens/PrimitiveComponent/ListScreen';
import ImageScreen from './src/screens/PrimitiveComponent/ImageScreen';
// StateManagement
import CounterScreen from './src/screens/StateManagement/CounterScreen';
import ColorScreen from './src/screens/StateManagement/ColorScreen';
import SquareScreen from './src/screens/StateManagement/SquareScreen';
import SquareScreenReducer from './src/screens/StateManagement/SquareScreenReducer';
import CounterScreenReducer from './src/screens/StateManagement/CounterScreenReducer';
import TextScreen from './src/screens/StateManagement/TextScreen';
// ScreenLayout
import BoxModelScreen from './src/screens/ScreenLayout/BoxModelScreen';
import FlexboxModelScreen from './src/screens/ScreenLayout/FlexboxModelScreen';
import PositionModelScreen from './src/screens/ScreenLayout/PositionModelScreen';
import ScreenLayoutExercise from './src/screens/ScreenLayout/ScreenLayoutExercise';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    SquareReducer: SquareScreenReducer,
    CountReducer: CounterScreenReducer,
    Text: TextScreen,
    BoxModel: BoxModelScreen,
    FlexboxModel: FlexboxModelScreen,
    PositionModel: PositionModelScreen,
    ScreenModelExercise: ScreenLayoutExercise
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
