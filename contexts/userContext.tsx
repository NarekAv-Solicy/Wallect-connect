import { createContext, useState } from 'react';
import { type UserType } from '@/types/user-type';

export const UserContext = createContext({
    user: Object as UserType,
    setUser: (value: UserType) => {
        console.log(value);
    }
});

export const UserProvider = ({ children }: any): JSX.Element => {
    const [user, setUser] = useState({} satisfies UserType);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
