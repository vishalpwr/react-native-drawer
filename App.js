import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text, Linking, StyleSheet, useWindowDimensions, Image, TouchableOpacity } from 'react-native'
import Home from './src/screens/Home'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Profile from './src/screens/Profile';
import Settings from './src/screens/Settings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import Colors from './src/constants/Colors';
import { TouchableRipple, Title } from 'react-native-paper';
import { BlurView } from "@react-native-community/blur";
import RadialGradient from 'react-native-radial-gradient';
import Animated from 'react-native-reanimated';
import Styles from './src/common/Styles';

const Drawer = createDrawerNavigator();

const UserView = ({ navigation }) => {
  return (
    <TouchableRipple
      onPress={() => {
        navigation.navigate('Profile')
      }}
    >
      <View style={styles.drawerHeader}>
        <Image style={styles.profileImage} source={require('./src/assets/images/user_boy.png')} />
        <View style={styles.textContainer}>
          <Title style={styles.title}>Vishal Pawar</Title>
          <View style={Styles.row_space}>
            <Text style={styles.description}>Follow:</Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://github.com/vishalpwr?tab=repositories')}
              style={{ height: 28, borderRadius: 30, backgroundColor: Colors.accent, paddingHorizontal: 8, alignItems: 'center', flexDirection: 'row' }}>
              <Feather name="github" color={Colors.light} size={18} />
              <Text style={{ color: Colors.light }}> vishalpwr</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableRipple>
  )
}

const CustomDrawer = (props) => {
  const translateX = Animated.interpolateNode(props.progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });
  const opacity = Animated.interpolateNode(props.progress, {
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0.9, 1]
  })
  return (
    <RadialGradient style={Styles.container}
      colors={[Colors.green, 'rgba(255,255,255,0.6)', 'rgba(255,255,255,0.4)',]}
      // stops={[0.1, 0.5, 0.75, 1]}
      center={[145, 100]}
      radius={650}>
      <Animated.View style={{ flex: 1, transform: [{ translateX }], backgroundColor: 'transparent' }}>
        <BlurView
          style={styles.blurAbsolute}
          blurType="light"
          blurAmount={20}
          reducedTransparencyFallbackColor="white"//ios only
        />
        <DrawerContentScrollView {...props}>
          <UserView {...props} />
          <DrawerItemList {...props}
            activeTintColor={Colors.accent}
          />
        </DrawerContentScrollView>
        <DrawerItem
          label="Logout"
          onPress={() => console.log('Logout')}
          icon={({ color, size }) => <MaterialIcons color={color} size={size} name='logout' />}
          labelStyle={{ fontSize: 18 }}
        />
      </Animated.View>
    </RadialGradient>
  )
}

function MyDrawer() {
  const dimension = useWindowDimensions();
  const drawerType = dimension.width >= 700 ? 'permanent' : 'front';
  return (
    <Drawer.Navigator
      drawerStyle={{
        width: 280,
        backgroundColor: 'transparent'
      }}
      drawerType={drawerType}
      edgeWidth={100}
      drawerContentOptions={{
        labelStyle: { fontSize: 17, fontWeight: 'bold' }
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={Home}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          )
        }}
      />
      <Drawer.Screen name="Profile" component={Profile}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          )
        }}
      />
      <Drawer.Screen name="Settings" component={Settings}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="settings" color={color} size={size} />
          )
        }}
      />
    </Drawer.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  cardStyle: {
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  drawerNavigator: {
    width: 290,
    backgroundColor: 'transparent',
    // backgroundColor: Colors.accent,
  },
  absolute: {
    flex: 1,
    height: '100%',
  },
  icon: {
    paddingBottom: 2,
  },
  drawerHeader: {
    width: '100%',
    height: 200,
    marginVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    // backgroundColor: 'yellow',
  },
  profileImage: {
    backgroundColor: Colors.light,
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: Colors.accent,
  },
  textContainer: {
  },
  title: {
    color: Colors.accent,
    fontSize: 22,
    fontWeight: '500',
    textTransform: 'capitalize',
    textAlign: 'center',
    marginTop: 10,
  },
  description: {
    color: Colors.accent,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    marginHorizontal: 8
  },
  blurAbsolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
})