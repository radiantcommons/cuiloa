"use client";

import React, { useState } from "react";
import { QueryClient, QueryClientProvider  } from "@tanstack/react-query";
import { Toaster } from "../ui/toaster";

const Providers = ({ children } : { children: React.ReactNode }) => {
  const [ queryClient ] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        // Direct suggestion by tanstack, to prevent over-eager refetching from the client.
        staleTime: 60 * 1000,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster/>
    </QueryClientProvider>
  );
};

export default Providers;