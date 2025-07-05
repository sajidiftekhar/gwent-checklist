import { createBrowserRouter } from 'react-router'
import HomePage from '../Pages/HomePage.tsx'
import CardsPage from '../Pages/CardsPage.tsx'
import CheckListPage from '../Pages/CheckList/CheckListPage.tsx'
import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary.tsx'
import App from '../App.tsx'
import PageLoader from '../Components/Loaders/PageLoader.tsx'

const basename = import.meta.env.VITE_BASENAME || '/'

export const router = createBrowserRouter([
    {
        path: basename,
        Component: App,
        ErrorBoundary: ErrorBoundary,
        loader: PageLoader,
        children: [
            { index: true, Component: HomePage },
            { path: 'cards', Component: CardsPage },
            { path: 'checklist', Component: CheckListPage },
        ],
    },
])

export default router
