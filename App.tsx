import { queryClient } from "./src/utils/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { AppNavigation } from "./src/navigation/AppNavigation";

import CommonProvider from "./src/api/providers/CommonProvider";

export default (): React.JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <CommonProvider>
        <AppNavigation />
      </CommonProvider>
    </QueryClientProvider>
  );
};
