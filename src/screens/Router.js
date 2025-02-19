//import liraries
import React from "react";
import { Image, Platform, LogBox, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "./AuthStack/SplashScreen";
import { SCREENS } from "../common/Utils/screenName";
import OldJobPosts from "./AppStack/OldJobPosts";
import DashBoard from "./AppStack/DashBoard";
import MyJobs from "./AppStack/MyJobs";
import JobDetailsScreen from "./AppStack/JobDetailsScreen";
import PostJob from "./AppStack/PostJob";
import AvailableJob from "./AppStack/AvailableJobs/AvailableJob";
import JobDetails from "./AppStack/AvailableJobs/JobDetails";
import NewsList from "./AppStack/NewsFeed/NewsList";
import ViewPDF from "./AppStack/NewsFeed/ViewPDF";

LogBox.ignoreAllLogs();

// create a component
const Router = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS.SplashScreen}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name={SCREENS.SplashScreen}
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.DashBoard}
          component={DashBoard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.OldJobPosts}
          component={OldJobPosts}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.MyJobs}
          component={MyJobs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.JobDetailsScreen}
          component={JobDetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.PostJob}
          component={PostJob}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.AvailableJob}
          component={AvailableJob}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.JobDetails}
          component={JobDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.NewsFeed}
          component={NewsList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.NewsFeedData}
          component={ViewPDF}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default Router;
