import {useRouteError} from "react-router";

type ErrorBoundaryType = {
    message: string,
    status: number,
    statusText: string,
}

function ErrorBoundary() {
    const error: ErrorBoundaryType = useRouteError() as ErrorBoundaryType;

    return (
        <div>We ran into an error {error.message}</div>
    );
}

export default ErrorBoundary;