// ===================================================================
// Extrain Web Frontend - API Configuration
// সব API URL এখান থেকে export হবে
// ===================================================================

// Production backend URL - use environment variable or production URL
const PRODUCTION_API = 'https://extrain-web-server.vercel.app/api';
const LOCAL_API = 'http://localhost:5000/api';

// Use production URL by default, localhost only in development
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ||
    (typeof window !== 'undefined' && window.location.hostname === 'localhost'
        ? LOCAL_API
        : PRODUCTION_API);
