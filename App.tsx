import { queryClient } from "./src/utils/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AppNavigation } from "./src/navigation/AppNavigation";
import "react-native-gesture-handler";

import CommonProvider from "./src/api/providers/CommonProvider";

export default (): React.JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <CommonProvider>
          <AppNavigation />
        </CommonProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
};
