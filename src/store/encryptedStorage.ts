import CryptoJs from 'crypto-js'

interface StorageSystem {
    getItem: (name: string) => string | Promise<string | null> | null;
    setItem: (name: string, value: string) => void | Promise<void>;
    removeItem: (name: string) => void | Promise<void>;
}

class EncryptedStorage implements StorageSystem {
    key: string

    constructor( key: string) {
        this.key = key || '1234567890abcdef'
    }

    getItem(key: string): string | null {
        const encrypted = localStorage.getItem(key)

        if (!encrypted) return null

        try {
            const bytes = CryptoJs.AES.decrypt(encrypted, this.key)
            return bytes.toString(CryptoJs.enc.Utf8)
        } catch (err) {
            console.error('🔐 Decryption failed:', err)
            return null
        }
    }

    setItem(key: string, value: string) {
        try {
            const encrypted = CryptoJs.AES.encrypt(value, this.key).toString()
            localStorage.setItem(key, encrypted)
        } catch (err) {
            console.error('🔐 Encryption failed:', err)
        }
    }

    removeItem(key: string) {
        localStorage.removeItem(key)
    }
}

export default EncryptedStorage

// Create a default store with a default secret that any module can access
export const encryptedStorage = new EncryptedStorage(import.meta.env.VITE_STORAGE_ENCRYPTION_KEY)