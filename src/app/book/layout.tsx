import { Suspense, ReactNode } from 'react';

// This layout is specifically for the /book route to prevent the CSR bailout error.
export default function BookLayout({ children }: { children: ReactNode }) {
  return (
    // Wrap the dynamic content (the page.tsx component) in a Suspense boundary.
    // This tells Next.js that the content inside might be dynamic and should be 
    // rendered client-side if dependencies like useSearchParams are used.
    <Suspense fallback={<div>Loading form...</div>}>
      {children}
    </Suspense>
  );
}