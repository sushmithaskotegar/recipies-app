import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/components/Home";
import Post from "./src/components/Post";
import Notification from "./src/components/Notification";
import Profile from "./src/components/Profile";
import Search from "./src/components/Search";
import ReduxThunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import placesReducer from "./src/store/places_reducer";

const rootReducer = combineReducers({
  places: placesReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#FFF495",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            showLabel: false,
            style: {
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              elavation: 0,
              backgroundColor: "#ffffff",
              borderRadius: 15,
              height: 65,
              ...styles.shadow,
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    top: 10,
                  }}
                >
                  <Image
                    source={require("./src/images/home.png")}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? "#FFF495" : "gray",
                    }}
                  ></Image>
                  <Text
                    style={{
                      tintColor: focused ? "#FFF495" : "gray",
                      fontSize: 12,
                    }}
                  >
                    Text
                  </Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Post"
            component={Post}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    top: 10,
                  }}
                >
                  <Image
                    source={require("./src/images/post.png")}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? "#FFF495" : "gray",
                    }}
                  ></Image>
                  <Text
                    style={{
                      tintColor: focused ? "#FFF495" : "gray",
                      fontSize: 12,
                    }}
                  >
                    Post
                  </Text>
                </View>
              ),
            }}
          />

          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={require("./src/images/search.png")}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: "gray",
                  }}
                ></Image>
              ),
              tabBarButton: (props) => (
                <CustomTabBarButton {...props}></CustomTabBarButton>
              ),
            }}
          />

          <Tab.Screen
            name="Notification"
            component={Notification}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    top: 10,
                  }}
                >
                  <Image
                    source={require("./src/images/notification.png")}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? "#FFF495" : "gray",
                    }}
                  ></Image>
                  <Text
                    style={{
                      tintColor: focused ? "#FFF495" : "gray",
                      fontSize: 12,
                    }}
                  >
                    Notification
                  </Text>
                </View>
              ),
            }}
          />

          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    top: 10,
                  }}
                >
                  <Image
                    source={require("./src/images/profile.png")}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? "#FFF495" : "gray",
                    }}
                  ></Image>
                  <Text
                    style={{
                      tintColor: focused ? "#FFF495" : "gray",
                      fontSize: 12,
                    }}
                  >
                    profile
                  </Text>
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7f50f0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
