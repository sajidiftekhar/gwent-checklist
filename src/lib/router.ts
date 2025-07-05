import { createBrowserRouter } from 'react-router'
import HomePage from '../Pages/HomePage.tsx'
import CardsPage from '../Pages/CardsPage.tsx'
import CheckListPage from '../Pages/CheckList/CheckListPage.tsx'
import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary.tsx'
import App from '../App.tsx'
import PageLoader from '../Components/Loaders/PageLoader.tsx'
import ROUTES, { getRouteRoot } from './config/routes.ts'

export const router = createBrowserRouter([
    {
        path: getRouteRoot(ROUTES.HOME),
        Component: App,
        ErrorBoundary: ErrorBoundary,
        loader: PageLoader,
        children: [
            { index: true, Component: HomePage },
            { path: getRouteRoot(ROUTES.CARDS), Component: CardsPage },
            {
                path: getRouteRoot(ROUTES.CHECKLIST),
                Component: CheckListPage,
            },
        ],
    },
])

export default router
