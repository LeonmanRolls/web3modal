import { IAbstractConnectorOptions } from "../../helpers";

export interface IWalletConnectConnectorOptions
  extends IAbstractConnectorOptions {
  projectId: string;
  chains?: number[];
  optionalChains?: number[];
  methods?: string[];
  optionalMethods?: string[];
  events?: string[];
  optionalEvents?: string[];
  rpcMap?: { [chainId: string]: string };
  metadata?: {
    name: string;
    description: string;
    url: string;
    icons: string[];
  };
}

const ConnectToWalletConnect = (
  WalletConnectProvider: any,
  opts: IWalletConnectConnectorOptions
) => {
  return new Promise(async (resolve, reject) => {
    const provider = await WalletConnectProvider.init(opts);
    try {
      await provider.enable();
      resolve(provider);
    } catch (e) {
      reject(e);
    }
  });
};

export default ConnectToWalletConnect;
