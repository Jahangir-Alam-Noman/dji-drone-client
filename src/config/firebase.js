import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKbSYG_PMA21wjBaFFxhFsxX7TMxbwSNc",
    authDomain: "dji-drone-61a91.firebaseapp.com",
    projectId: "dji-drone-61a91",
    storageBucket: "dji-drone-61a91.appspot.com",
    messagingSenderId: "496331413102",
    appId: "1:496331413102:web:8d05ffdc923ffcc9ce387f"
};

// Initialize Firebase
const initAuthentication = () => {
    return initializeApp(firebaseConfig);
}
export default initAuthentication;