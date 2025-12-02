 import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layout/RootLayout";
import { ArticulosPage, HomePage, AboutPage, Login } from "../pages";
import { ProtectedRoute } from "../helpers/ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />, // Público - no protegido
            },
            {
                path: 'nosotros',
                element: <AboutPage /> // Público
            },
            {
                path: 'productos',
                element: <ArticulosPage /> // Público
            },
            {
                path: 'checkout',
                element: (
                    <ProtectedRoute>
                        <div>Checkout - Solo usuarios autenticados</div>
                    </ProtectedRoute>
                )
            },
            {
                path: 'account',
                element: (
                    <ProtectedRoute>
                        <div>Mi Cuenta - Solo usuarios autenticados</div>
                    </ProtectedRoute>
                )
            }
        ]
    }
]);

