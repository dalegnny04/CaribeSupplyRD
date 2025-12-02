 import { useState, useEffect } from "react";
 
import appFirebase from "../firebase/Credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { router } from "../router";

const auth = getAuth(appFirebase);

function Autentificacion() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, () => {
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-white">
                <div className="text-xl font-semibold">Cargando...</div>
            </div>
        );
    }

     
}

export default Autentificacion;
