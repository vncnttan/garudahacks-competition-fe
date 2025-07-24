import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "axios";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 30000,
    },
  },
  queryCache: new QueryCache({
    onSuccess: (_data, query) => {
      if (
        query.meta?.SUCCESS_MESSAGE &&
        typeof query.meta.SUCCESS_MESSAGE == "string"
      ) {
        toast.success(query.meta?.SUCCESS_MESSAGE);
      }
    },
    onError: (error, query) => {
      if (
        error?.message &&
        axios.isAxiosError(error) &&
        query.meta?.ERROR_MESSAGE &&
        typeof query.meta.ERROR_MESSAGE === "string"
      ) {
        toast.error(`${String(query.meta.ERROR_MESSAGE)}: ${error?.message}`);
      }
    },
  }),
  mutationCache: new MutationCache({
    onSuccess: (_data, _variables, _context, mutation) => {
      if (
        mutation.meta?.SUCCESS_MESSAGE &&
        typeof mutation.meta.SUCCESS_MESSAGE == "string"
      ) {
        toast.success(mutation.meta?.SUCCESS_MESSAGE);
      }
    },
    onError: (error, _variables, _context, mutation) => {
      if (
        error?.message &&
        mutation.meta?.ERROR_MESSAGE &&
        typeof mutation.meta.ERROR_MESSAGE === "string"
      ) {
        toast.error(`${mutation.meta.ERROR_MESSAGE}: ${error?.message}`);
      }
    },
  }),
});
