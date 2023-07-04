export interface GradientDirection {
    x: number;
    y: number;
}

export interface GradientType {
    gradientStart?: GradientDirection;
    gradientEnd?: GradientDirection;
    gradientColor?: string[];
}

// TODO: Use this when we will have gradient in design
export const gradientDirection = {
    leftToRight: {
        start: { x: 0.0, y: 0.1 },
        end: { x: 1.0, y: 1.0 }
    }
};
