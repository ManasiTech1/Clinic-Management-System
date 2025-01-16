// Import Firebase SDK and necessary services
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';

// Firebase configuration
const firebaseConfig = {
    apiKey: "XXXXXX",
    authDomain: "XXXXXX.firebaseapp.com",
    projectId: "XXXXXX",
    storageBucket: "XXXXXX.firebasestorage.app",
    messagingSenderId: "XXXXXX12345",
    appId: "1:XXXX:web:XXXXXX"
  };

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
