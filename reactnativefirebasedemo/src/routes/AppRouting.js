import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";


import Loginpage from "../pages/Loginpage";
import Registerpage from "../pages/Registerpage";

 import Profilepage from '../pages/Profilepage';

const Route = createStackNavigator(
    
       {
      
        Loginpage : Loginpage,
        Registerpage :Registerpage,
       Profilepage :Profilepage
     },
    
    {
      initialRouteName: "Loginpage"
    },
  );
  const RouterConfig = createAppContainer(Route);
  
  export default RouterConfig;