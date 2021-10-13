import { StyleSheet } from 'react-native';
import { useTheme } from '@ui-kitten/components';

export const Routes = {};

const theme = useTheme();
export const StylesGlobal = StyleSheet.create({});

// Focus para campos de formularios
export const focusTextInput = textInputRef => {
  textInputRef?.current?.focus?.();
};
