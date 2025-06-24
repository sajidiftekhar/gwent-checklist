interface ImportMetaEnv {
    readonly VITE_STORAGE_ENCRYPTION_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}