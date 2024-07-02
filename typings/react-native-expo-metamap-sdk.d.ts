declare module 'react-native-expo-metamap-sdk' {
  export interface MetamapConfig {
    apiKey: string;
    environment: 'sandbox' | 'production';
  }

  export interface MetaMapRNSdkMetaData {
    [key: string]: any;
  }

  export class MetaMapRNSdk {
    static showFlow(flowId: string, userId: string, metaData: MetaMapRNSdkMetaData): void;
  }
}