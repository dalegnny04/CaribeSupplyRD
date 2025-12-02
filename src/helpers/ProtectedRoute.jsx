 import { Navigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import appFirebase from '../firebase/Credenciales';

const auth = getAuth(appFirebase);

export const ProtectedRoute = ({ children }) => {
    const usuario = auth.currentUser;
    
    if (!usuario) {
        return <Navigate to="/login" replace />;
    }
    
    return children;
};
