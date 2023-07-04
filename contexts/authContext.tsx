import { createContext, useState } from 'react';

export const AuthContext = createContext({
    authenticated: false,
    setAuthenticated: (value: boolean) => {
        console.log(value);
    }
});

export const AuthProvider = ({ children }: any) => {
    const [authenticated, setAuthenticated] = useState(false);

    return (
        <AuthContext.Provider
            value={{
                authenticated,
                setAuthenticated: value => {
                    setAuthenticated(value);
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
