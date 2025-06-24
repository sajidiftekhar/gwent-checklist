import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import '@fontsource-variable/inter'
import { RouterProvider } from 'react-router'
import router from './lib/router.ts'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
