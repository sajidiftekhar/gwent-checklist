import { useRouteError } from 'react-router'

type ErrorBoundaryType = {
    message: string
    status: number
    statusText: string
}

function ErrorBoundary() {
    const error: ErrorBoundaryType = useRouteError() as ErrorBoundaryType
    console.log({
        error,
        environment: import.meta.env.MODE,
        isProduction: import.meta.env.PROD,
        isDevelopment: import.meta.env.DEV,
        isSSR: import.meta.env.SSR,
    })
    return (
        <>
            <div>We ran into an error {JSON.stringify(error)}</div>
            <div>Environment: {import.meta.env.VITE_BASENAME}</div>
        </>
    )
}

export default ErrorBoundary
