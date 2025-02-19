// // app/test/page.tsx
// "use client";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { httpBatchLink } from "@trpc/client";
// import { useState } from "react";
// import { createTRPCReact } from "@trpc/react-query";
// import type { AppRouter } from "@/server/_app";

// const trpc = createTRPCReact<AppRouter>();

// function TestComponent() {
//   const test = trpc.user.test.useQuery();

//   return (
//     <div>
//       {test.isLoading && <p>Loading...</p>}
//       {test.data && <p>Result: {test.data.message}</p>}
//       {test.error && <p>Error: {test.error.message}</p>}
//     </div>
//   );
// }

// export default function TestPage() {
//   const [queryClient] = useState(() => new QueryClient());
//   const [trpcClient] = useState(() =>
//     trpc.createClient({
//       links: [
//         httpBatchLink({
//           url: "/api/trpc",
//         }),
//       ],
//     })
//   );

//   return (
//     <trpc.Provider client={trpcClient} queryClient={queryClient}>
//       <QueryClientProvider client={queryClient}>
//         <TestComponent />
//       </QueryClientProvider>
//     </trpc.Provider>
//   );
// }
