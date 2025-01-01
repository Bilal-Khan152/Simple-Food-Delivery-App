import { createContext, useState, useEffect, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore , collection  , addDoc ,getDocs , doc , getDoc } from 'firebase/firestore' ;
import { getStorage , ref , uploadBytes , getDownloadURL} from 'firebase/storage' ;
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

const FirebaseContext = createContext();

const firebaseConfig = {
  apiKey: "AIzaSyAq4Eh0enumiIeAfaG27khi39h9NaLjUV0",
  authDomain: "foodapp-8ddd3.firebaseapp.com",
  projectId: "foodapp-8ddd3",
  storageBucket: "foodapp-8ddd3.appspot.com",
  messagingSenderId: "785626501299",
  appId: "1:785626501299:web:7f64f3caadaa8a060ce0c6",
};

export const firebaseApp = initializeApp(firebaseConfig);

// create a custom hook to get all functions of this file
export const useFirebase = () => useContext(FirebaseContext);

const googleProvider = new GoogleAuthProvider() ;
const firebaseAuth = getAuth(firebaseApp) ;
const firestore = getFirestore(firebaseApp) ;
 const storage = getStorage(firebaseApp) ;

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  // console.log(user)

  // Track the user 
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  // Create new account
  const SignUpUserWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  //  User Sign In with email or password
  const SignInUserWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  //  User Sign in with google account
  const SignInUserWithGoogleAccount = async () => {
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    return result;
  };

    // Add a menu in Our Menu Section 
 const   AddMenuOnHomeScreen = async(coverPic,dealName , discription,price) => {
 const imageRef = ref(storage , `uploads/images/${Date.now()}-${coverPic}`) ;
 const uploadsImages = await uploadBytes(imageRef , coverPic) ;
 return  await addDoc(collection(firestore,"menu") , {
 dealName ,
 discription ,
 imageURL : uploadsImages.ref.fullPath ,
  price



        })


    }


   //  get a menu data from firestore Database 
  const getMenuCardData =  () => {
     return getDocs(collection(firestore , "menu")) ;
   } 
 
    // get a image from firebase/storage 
  
     const getImageURL = (path) => {
       return  getDownloadURL(ref(storage , path)) 
     } ;

     // get specific  Menu by id when user click on view btn he/her navigate 
     // that specific menu page where he/her can place order
     
     const getMenuById = async(id) => {
      const docRef = doc(firestore , "menu" ,id) ;
      const result = await getDoc(docRef) ;
      return result ; 
     }


       // place order like if user click on order now his 
       // ordered detail dispatch in firbase firestore

       const placeOrder = async (menuId, quantity , address , mobileNumber) => {
        const collectionRef = collection(firestore , "menu" , menuId , "order") ;
        const result = await addDoc(collectionRef , {
          userName : user.displayName , 
          userEmail : user.email ,
          userID : user.uid,
          quantity,
          address ,
          mobileNumber
        })
        return result ;
       }


        // make a collection for user message 

        const placeMesseage = async (userName,email,message) => {
          const collectionRef = collection(firestore, "messages") ;
          const result = await addDoc(collectionRef , {
            userName : user.displayName , 
            userEmail : user.email ,
            userID : user.uid,
            userName ,
            email ,
            message
          })

          return result ;
        }
        


  const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        SignUpUserWithEmailAndPassword,
        SignInUserWithEmailAndPassword,
        SignInUserWithGoogleAccount,
        AddMenuOnHomeScreen , 
        getMenuCardData ,
        getImageURL ,
        getMenuById ,
        isLoggedIn ,
        placeOrder ,
        placeMesseage    
        
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
