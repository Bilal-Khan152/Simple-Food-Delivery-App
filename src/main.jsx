import { StrictMode } from 'react' ;
import { createRoot } from 'react-dom/client' ;
import {BrowserRouter} from "react-router-dom" ; 
import { FirebaseProvider } from './Context/Firebase.jsx';
import './index.css' ;
import App from './App.jsx' ;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </FirebaseProvider>
  </StrictMode>,
)
