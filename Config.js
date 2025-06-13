// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword ,  GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCCWncF3DhUOMY_mNqSXHSMn2SdGcEUKP8",
  authDomain: "streamline-db093.firebaseapp.com",
  projectId: "streamline-db093",
  storageBucket: "streamline-db093.firebasestorage.app",
  messagingSenderId: "521588121601",
  appId: "1:521588121601:web:29dbffb43932e44ce46000"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();



//HANDLE LOGIN USING EMAIL AND PASSWORD
const handleSubmit =async (e,setError)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try{
        const userCred = await signInWithEmailAndPassword (auth, email, password);
        console.log('User signed in:', userCred.user);
        setError('');

        

    } catch(err){
        console.log(err) ;
            setError('Invalid email or password');
        
    }
            e.target.reset();


}

export { auth, googleProvider, handleSubmit}