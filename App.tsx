import { StatusBar } from "expo-status-bar";
import { extendTheme, NativeBaseProvider, useColorMode } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  console.log(colorScheme);

  const config = {
    useSystemColorMode: true,
    // initialColorMode: colorScheme,
  };
  const customTheme = extendTheme({ config });
  // const { colorMode, toggleColorMode } = useColorMode();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NativeBaseProvider theme={customTheme}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </NativeBaseProvider>
    );
  }
}
