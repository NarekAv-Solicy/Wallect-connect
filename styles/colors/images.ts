import { ImageSrc } from './variables';

export default {
    light: {
        arrowDown: ImageSrc.arrowDown,
        arrowTop: ImageSrc.arrowTop,
        logoSrc: ImageSrc.logoDark
    },
    dark: {
        arrowDown: ImageSrc.arrowDown,
        arrowTop: ImageSrc.arrowTop,
        logoSrc: ImageSrc.logoDark
    }
};

export type ColorScheme = 'light' | 'dark';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}
