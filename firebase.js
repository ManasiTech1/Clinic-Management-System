// Import Firebase SDK and necessary services
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUR2Ntj6h7AfIssMy2KaF4oeFU4D_yRR8",
    authDomain: "clinic-management-4cbdb.firebaseapp.com",
    projectId: "clinic-management-4cbdb",
    storageBucket: "clinic-management-4cbdb.firebasestorage.app",
    messagingSenderId: "348038473466",
    appId: "1:348038473466:web:af174ccc5ffc7a92110b43"
  };

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);