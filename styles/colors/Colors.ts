import { Colors, ImageSrc } from './variables';
const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export default {
    light: {
        text: '#000',
        primaryText: Colors.GRAY,
        primaryBackground: Colors.WHITE,
        background: '#fff',
        white: '#fff',
        black: '#000000',
        tint: tintColorLight,
        tabIconDefault: '#ccc',
        tabIconSelected: tintColorLight,
        loginHint: Colors.DARK_GRAY,
        transparent: Colors.WHITE,
        secondaryText: Colors.LIGHTER_GRAY,
        label: Colors.LIGHTER_BLACK,
        error: Colors.ERROR,
        btnBackground: Colors.RED,
        border: Colors.DARK_RED,
        sighnUpText: Colors.ROSE,
        btnDisabled: Colors.BTN_DISABLED,
        primaryColor: Colors.YELLOW,
        burger: Colors.DARK_WHITE,
        sold: Colors.RED_200,
        optionBg: Colors.LIGHTER_GRAY,
        bought: Colors.GREEN_LIGHT,
        collectionCard: Colors.DARK_GRAY_300,
        opacityWhite: Colors.WHITE_WITH_OPACITY
    },

    dark: {
        text: '#fff',
        primaryText: Colors.GRAY,
        primaryBackground: Colors.BLACK,
        background: '#0E0F11',
        white: '#fff',
        black: '#000000',
        tint: tintColorDark,
        tabIconDefault: '#ccc',
        tabIconSelected: tintColorDark,
        loginHint: Colors.DARK_GRAY,
        transparent: Colors.WHITE,
        secondaryText: Colors.LIGHTER_GRAY,
        label: Colors.LIGHTER_BLACK,
        error: Colors.ERROR,
        btnBackground: Colors.RED,
        border: Colors.DARK_RED,
        sighnUpText: Colors.ROSE,
        btnDisabled: Colors.BTN_DISABLED,
        primaryColor: Colors.YELLOW,
        burger: Colors.DARK_GRAY_200,
        sold: Colors.RED_200,
        optionBg: Colors.BLACK_700,
        bought: Colors.GREEN_LIGHT,
        collectionCard: Colors.DARK_GRAY_300,
        opacityWhite: Colors.WHITE_WITH_OPACITY
    }
};

export type ColorScheme = 'light' | 'dark';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}
