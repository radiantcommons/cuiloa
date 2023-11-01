"use client";

import React, { useState } from "react";
import { QueryCache, QueryClient, QueryClientProvider  } from "@tanstack/react-query";
import { Toaster } from "../ui/toaster";
import { useToast } from "../ui/use-toast";

const Providers = ({ children } : { children: React.ReactNode }) => {
  const { toast } = useToast();
  const [ queryClient ] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        // Direct suggestion by tanstack, to prevent over-eager refetching from the client.
        staleTime: 60 * 1000,
      },
    },
    queryCache: new QueryCache({
      onError: (error, query) => {
        // There may be a more elegant way of expressing this but the general typing of onError's `error` and `query` arguments requires some amount of refinement for safety.
        // https://tanstack.com/query/latest/docs/react/reference/QueryCache
        let errorMessage = "";
        const meta = query?.meta ?? undefined ;
        if (meta) {
          // Precondition for this type cast: meta is of type Record<string, unknown> where any query with a meta object containing the property `errorMessage` has a value of type string.
          errorMessage = meta?.errorMessage as string ?? "";
        }
        if (errorMessage !== "") {
          toast({
            variant: "destructive",
            title: "Error",
            description: `${errorMessage}`,
          });
        } else {
          // TODO: Realistically, this will not be a useful error and should be improved further.
          toast({
            variant: "destructive",
            title: "Error",
            description: `${error.message}`,
          });
        }
      },
    }),
  }));

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster/>
    </QueryClientProvider>
  );
};

export default Providers;