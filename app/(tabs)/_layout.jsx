import React from 'react'
import { View, Image } from 'react-native'
import { Tabs } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({ icon, color }) => {
  return (
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 28, height: 28, tintColor: color }}
      />
    </View>
  )
}

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="checkout"
        options={{
          title: 'Checkout',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.checkout}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.menu}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  )
}

export default TabLayout
