import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default ({ mode }: { mode: string }) => {
    const env = loadEnv(mode, process.cwd(), '')

    return defineConfig({
        plugins: [react()],
        base: env.VITE_BASENAME || '/',
    })
}
