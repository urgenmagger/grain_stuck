import { queryClient } from "./src/utils/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { AppNavigation } from "./src/navigation/AppNavigation";

export default (): React.JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigation />
    </QueryClientProvider>
  );
};
