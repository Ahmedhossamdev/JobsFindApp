import { Stack } from "expo-router";
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans_18pt-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans_18pt-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            console.log("Fonts are loaded successfully.");
            // hide SplashScreen
            await SplashScreen.hideAsync();
        }
        else {
            console.log("Fonts are not loaded.");
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;

    return <Stack onLayout={onLayoutRootView} />;
}

export default Layout;
