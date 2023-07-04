import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useLoadedAssets } from './hooks/useLoadedAssets';
import { GlobalProvider } from './providers/global';
import { WalletConnectModal, useWalletConnectModal, IProviderMetadata } from '@walletconnect/modal-react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import './expo-crypto-shim';

const providerMetadata: IProviderMetadata = {
    name: 'WalletConnect',
    description: 'RN dApp by WalletConnect',
    url: 'https://walletconnect.com/',
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
    redirect: {
        native: 'myapp://'
    }
};

const sessionParams = {
    namespaces: {
        eip155: {
            methods: ['eth_sendTransaction', 'eth_signTransaction', 'eth_sign', 'personal_sign', 'eth_signTypedData'],
            chains: ['eip155:1'],
            events: ['chainChanged', 'accountsChanged'],
            rpcMap: {}
        }
    }
};

const App = (): JSX.Element => {
    const isLoadingComplete = useLoadedAssets();
    const netInfo = useNetInfo();
    const { isConnected, provider, open } = useWalletConnectModal();

    const handleButtonPress = async () => {
        if (isConnected) {
            return provider?.disconnect();
        }
        return open();
    };

    if (!isLoadingComplete) {
        return <></>;
    } else {
        return (
            <GlobalProvider>
                <SafeAreaProvider>
                    <TouchableOpacity style={{ position: 'absolute', top: '50%', left: '35%' }} onPress={handleButtonPress}>
                        <Text>{isConnected ? 'Disconnect' : 'Connect Wallet'}</Text>
                    </TouchableOpacity>
                    {netInfo.isConnected && (
                        <WalletConnectModal
                            projectId={'1aa31c54e918b10e3ad7d6c1706d4e21'}
                            providerMetadata={providerMetadata}
                            sessionParams={sessionParams}
                            onCopyClipboard={() => {}}
                        />
                    )}
                </SafeAreaProvider>
            </GlobalProvider>
        );
    }
};

export default App;
