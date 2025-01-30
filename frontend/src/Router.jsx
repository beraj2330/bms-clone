import { Suspense, lazy } from "react";

export const allRoutes = [
    {
        path: "/",
        element: <Suspense fallback={<div>Loading...</div>}>
            
        </Suspense>
    }
]
