export type RouteGroup = {
    ROOT: string
    [key: string]: string | ((...args: any[]) => string) | RouteGroup
}

type RoutesMap = {
    [key: string]: string | RouteGroup
}

const BASENAME = import.meta.env.VITE_BASENAME || '/'

export const ROUTES: RoutesMap = {
    HOME: BASENAME,
    CARDS: {
        ROOT: 'cards',
        DETAIL: (id = ':id') => `cards/${id}`,
    },
    CHECKLIST: {
        ROOT: 'checklist',
    },
}

export const getRoutePath = (route: string | RouteGroup | RoutesMap) => {
    const base = BASENAME.replace(/\/$/, '') // Remove trailing slash

    if (isRouteGroup(route)) {
        return getRoutePath(route.ROOT)
    } else if (isRouteMap(route)) {
        if ('HOME' in route) {
            return getRoutePath(route.HOME)
        } else if ('ROOT' in route) {
            return getRoutePath(route.ROOT)
        }

        throw new Error('Route Map provided with no HOME or ROOT key')
    }
    route.replace(/\/$/, '')

    const finalPath = route.replace(/\/$/, '')

    return `${base}/${finalPath}`
}

export const getRouteRoot = (route: string | RouteGroup): string => {
    return typeof route === 'string' ? route : route.ROOT
}

const isRouteGroup = (obj: unknown): obj is RouteGroup => {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        'ROOT' in obj &&
        typeof (obj as any).ROOT === 'string'
    )
}
const isRouteMap = (obj: unknown): obj is RoutesMap => {
    if (typeof obj !== 'object' || obj === null) return false

    for (const key in obj as Record<string, any>) {
        const value = (obj as Record<string, any>)[key as string]

        if (typeof value !== 'string' && !isRouteGroup(value)) return false
    }

    return true
}

export default ROUTES
