import { createContext, useState } from 'react';
import { type UserType } from '@/types/user-type';

export const GlobalContext = createContext({
    user: Object as UserType,
    setUser: (value: UserType) => {
        console.log(value);
    },
    authenticated: false,
    setAuthenticated: (value: boolean) => {
        console.log(value);
    }
});

export const GlobalProvider = ({ children }: any) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState({} satisfies UserType);

    return (
        <GlobalContext.Provider
            value={{
                authenticated,
                setAuthenticated: value => {
                    setAuthenticated(value);
                },
                user,
                setUser: value => {
                    setUser(value);
                }
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
