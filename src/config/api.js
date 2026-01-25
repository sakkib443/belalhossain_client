// ===================================================================
// MotionBoss Frontend - API Configuration
// সব API URL এখান থেকে export হবে
// ===================================================================

// Production backend URL fallback
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// For production development, create .env.local with:
// NEXT_PUBLIC_API_URL=https://motionboss-backend.vercel.app/api
