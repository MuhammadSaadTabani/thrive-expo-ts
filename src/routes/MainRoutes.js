
import React from 'react';
import { Image } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

import theme from '../assets/colors';
import images from '../assets/images';
import CustomDrawer from '../components/common/CustomDrawer';

import Home from '../screens/main/Home/Home';
import HealthTracker from '../screens/main/HealthTracker/HealthTracker';
import LearnLibrary from '../screens/main/LearnLibrary/LearnLibrary';
import Article from '../screens/main/LearnLibrary/Article';
import Podcast from '../screens/main/LearnLibrary/Podcast';

import MyActivities from '../screens/main/MyActivities/MyActivities'
import AddActivity from '../screens/main/MyActivities/AddActivity';
import CreateActivity from '../screens/main/MyActivities/CreateActivity';
import CommitedActivity from '../screens/main/MyActivities/CommitedActivity';
import NonCommitedActivity from '../screens/main/MyActivities/NonCommitedActivity';

import PersonalGoal from '../screens/main/Other/PersonalGoal';
import Feedback from '../screens/main/Other/Feedback';
import About from '../screens/main/Other/About';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


// **************
// All Tab Stacks
const HomeTab = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CommitedActivity" component={CommitedActivity} />
      <Stack.Screen name="AddActivity" component={AddActivity} />
      <Stack.Screen name="CreateActivity" component={CreateActivity} />
      <Stack.Screen name="NonCommitedActivity" component={NonCommitedActivity} />
      <Stack.Screen name="Article" component={Article} />
      <Stack.Screen name="Podcast" component={Podcast} />
    </Stack.Navigator>
  )
}
const ActivityTab = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyActivities" component={MyActivities} />
      <Stack.Screen name="CommitedActivity" component={CommitedActivity} />
      <Stack.Screen name="AddActivity" component={AddActivity} />
      <Stack.Screen name="CreateActivity" component={CreateActivity} />
      <Stack.Screen name="NonCommitedActivity" component={NonCommitedActivity} />
    </Stack.Navigator>
  )
}
const HealthTrackerTab = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HealthTracker" component={HealthTracker} />
    </Stack.Navigator>
  )
}
const LibraryTab = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LearnLibrary" component={LearnLibrary} />
      <Stack.Screen name="Article" component={Article} />
      <Stack.Screen name="Podcast" component={Podcast} />
    </Stack.Navigator>
  )
}



// ********************
// Bottom Tab Navigator
function MyTabs() {
    return (
      <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: 'white',
        tabBarInactiveBackgroundColor: 'white',
        tabBarStyle: {
            height: 70,
            borderTopWidth: 0
        }
      }}
      >
        <Tab.Screen name="HomeTab" component={HomeTab} options={{
          title:"",
          tabBarIcon: ({focused}) =>( 
                <Octicons name="home" size={25} color={focused ? theme.secondaryColor : theme.bottomTabColor }  />
            )
        }} />
        <Tab.Screen name="ActivityTab" component={ActivityTab} options={{
          title:"",
          tabBarIcon: ({focused}) =>( 
                <Octicons name="check-circle" size={25} color={focused ? theme.secondaryColor : theme.bottomTabColor } />
            )
        }} />
        <Tab.Screen name="HealthTrackerTab" component={HealthTrackerTab} options={{
          title:"",
          tabBarIcon: ({focused}) =>( 
                <Image source={images.HealthTracker} style={{tintColor: focused ? theme.secondaryColor : theme.bottomTabColor }}  />
            )
        }} />
        <Tab.Screen name="LibraryTab" component={LibraryTab} options={{
          title:"",
          tabBarIcon: ({focused}) =>( 
              <Image source={images.LearnLibrary} style={{tintColor: focused ? theme.secondaryColor : theme.bottomTabColor }}  />
            )
        }} />
      </Tab.Navigator>
    );
  }

// *****************
// Main Routes in Drawer
export default () => {
  return (
    <Drawer.Navigator
      initialRouteName='ManagerStack'
      screenOptions={{headerShown: false, drawerInactiveTintColor: theme.primaryColor}}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="MyTabs" component={MyTabs} options={{
        title: "Home",
        drawerIcon: ({color}) => (
          <Feather name="home" size={22} color={color} />
          ),
        }}/>
      <Drawer.Screen name="PersonalGoal" component={PersonalGoal} options={{
        title: "Personal Goals",
        drawerIcon: ({color}) => (
          <Feather name="target" size={22} color={color} />
        ),
      }}/>
      <Drawer.Screen name="About" component={About} options={{
        title: "About",
        drawerIcon: ({color}) => (
          <AntDesign name="exclamationcircleo" size={22} color={color} />
        ),
      }}/>
      <Drawer.Screen name="Feedback" component={Feedback} options={{
        title: "Feedback",
        drawerIcon: ({color}) => (
          <MaterialCommunityIcons name="chat-question-outline" size={26} color={color} />
        ),
      }} />
    </Drawer.Navigator>
  )
}
