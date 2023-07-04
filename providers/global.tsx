import { AuthProvider } from '@contexts/authContext';
import { UserProvider } from '@contexts/userContext';

export const GlobalProvider = ({ children }: any) => {
    return (
        <AuthProvider>
            <UserProvider>{children}</UserProvider>
        </AuthProvider>
    );
};
