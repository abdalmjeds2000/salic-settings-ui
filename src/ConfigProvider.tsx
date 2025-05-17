import React, { createContext, useContext, ReactNode, useEffect } from 'react';

// Configuration Types
interface SettingsConfig {
  theme?: 'light' | 'dark';
  colors?: {
    'primary'?: string;
    'bg-base'?: string;
    'text-color'?: string;
    'text-secondary-color'?: string;
    'secondary-50'?: string;
    'secondary-100'?: string;
    'secondary-200'?: string;
    'secondary-500'?: string;
  };
}

const SettingsConfigContext = createContext<SettingsConfig>({
  theme: 'light',
  colors: {
    'primary': '#08305C',
    'bg-base': '#FFFFFF',
    'text-color': '#08305C',
    'text-secondary-color': '#767d84',
    'secondary-50': '#F5FAFE',
    'secondary-100': '#EAF1FB',
    'secondary-200': '#dbe7f8',
    'secondary-500': '#339BD6',
  },
});

// Custom hook to access the configuration
export function useSettingsConfig(): SettingsConfig {
  const context = useContext(SettingsConfigContext);
  if (!context) {
    throw new Error('useSettingsConfig must be used within a SettingsConfigProvider');
  }
  return context;
}

// Provider component
interface SettingsConfigProviderProps {
  children: ReactNode;
  config: SettingsConfig;
}

export function SettingsConfigProvider({ children, config }: SettingsConfigProviderProps) {
  useEffect(() => {
    const colors = {
      'primary': config.theme === 'dark' ? '#FFFFFF' : (config.colors?.['primary'] || '#08305C'),
      'bg-base': config.theme === 'dark' ? '#141414' : (config.colors?.['bg-base'] || '#FFFFFF'),
      'text-color': config.theme === 'dark' ? '#FFFFFF' : (config.colors?.['text-color'] || 'var(--settigns-ui-primary)'),
      'text-secondary-color': config.theme === 'dark' ? '#FFFFFF70' : (`${config.colors?.['primary']}70` || 'var(--settigns-ui-primary)'),
      'secondary-50': config.theme === 'dark' ? '#3F3F3F' : (config.colors?.['secondary-50'] || '#F5FAFE'),
      'secondary-100': config.theme === 'dark' ? '#2F2F2F' : (config.colors?.['secondary-100'] || '#EAF1FB'),
      'secondary-200': config.theme === 'dark' ? '#1F1F1F' : (config.colors?.['secondary-200'] || '#dbe7f8'),
      'secondary-500': config.theme === 'dark' ? '#339bd6' : (config.colors?.['secondary-500'] || '#339BD6'),
    }
    const root = document.documentElement;
    Object.entries(colors).forEach(([key, value]) => {
      if (value) {
        const cssVarName = `--settigns-ui-${key}`;
        root.style.setProperty(cssVarName, value);
      }
    });
  }, [config.colors]);

  return (
    <SettingsConfigContext.Provider value={config}>
      {children}
    </SettingsConfigContext.Provider>
  );
}
