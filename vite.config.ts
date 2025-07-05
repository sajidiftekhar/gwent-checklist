import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default ({ mode }: { mode: string }) => {
    const env = loadEnv(mode, process.cwd(), '')

    return defineConfig({
        plugins: [react(), tailwindcss()],
        base: env.VITE_BASENAME || '/',
    })
}
