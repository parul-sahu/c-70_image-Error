import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TransactionScreen from './screens/transaction';
import SearchScreen from './screens/search';

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction: {screen: TransactionScreen},
  Search: {screen: SearchScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({

    tabBarIcon: ()=>{
    const routeName = navigation.state.routeName
    if(routeName==="TransactionScreen"){
      return(<Image source={require("./assets/transaction.png")} style={{width:50, height:50}} />)

    }
    else  if(routeName==="SearchScreen"){
      return(<Image source={require("./assets/search.png")} style={{width:50, height:50}} />)

    }

    }

  })
}




);

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});