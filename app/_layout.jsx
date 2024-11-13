import React from 'react';
import { Stack, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import Checkout from './(tabs)/checkout'; // adjust the path as necessary
import Menu from './(tabs)/menu'; // adjust the path as necessary

SplashScreen.preventAutoHideAsync();

const MainLayout = () => {
  return (
    <Stack>
      <Stack.Screen 
        name="index"
        options={{ headerShown: false }}
      />

    </Stack>
  );
}

export default MainLayout;
