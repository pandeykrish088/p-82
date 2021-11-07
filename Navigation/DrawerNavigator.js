import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "../Navigation/TabNavigator";
import Profile from "../Screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
return(
  <Drawer.Navigator>
    <Drawer.Screens name='Home' component={TabNavigator} />
    <Drawer.Screens name='Profile' component={Profile} />
  </Drawer.Navigator>
)
}

export default DrawerNavigator