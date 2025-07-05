import {useRouteError} from "react-router";

type ErrorBoundaryType = {
    message: string,
    status: number,
    statusText: string,
}

function ErrorBoundary() {
    const error: ErrorBoundaryType = useRouteError() as ErrorBoundaryType;

    return (
        <div>We ran into an error {JSON.stringify(error)}</div>
    );
}

export default ErrorBoundary;