import { useState, useEffect } from 'react';
import * as Font from 'expo-font';

const useCustomFonts = (): boolean => {
    const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

    useEffect(() => {
        const loadFonts = async (): Promise<void> => {
            try {
                await Font.loadAsync({
                    Minecraft: require('./styles/fonts/minecraft/Minecraft-Regular.ttf'),
                    MinecraftBold: require('./styles/fonts/minecraft/Minecraft-Bold.ttf'),
                    MinecraftBolder: require('./styles/fonts/minecraft/MinecraftTen-VGORe.ttf'),
                    Roobert: require('./styles/fonts/roobert/RobertSans-Regular.ttf'),
                    RoobertLight: require('./styles/fonts/roobert/RobertSans-Light.ttf'),
                    RoobertBold: require('./styles/fonts/roobert/RobertSans-Bold.ttf')
                });
                setFontsLoaded(true);
            } catch (error) {
                console.error('Error loading fonts:', error);
            }
        };

        loadFonts();
    }, []);

    return fontsLoaded;
};

export default useCustomFonts;
