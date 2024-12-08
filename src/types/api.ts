export interface ApiKeyConfig {
  id: string;
  name: string;
  provider: string;
  description: string;
  required: boolean;
  placeholder: string;
  helpText: string;
  docLink?: string;
}

export interface ApiKeyStore {
  [key: string]: string;
}