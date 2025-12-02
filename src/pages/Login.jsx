 import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// Importa la instancia de Firebase que definiste. Se ha añadido explícitamente la extensión .js para resolver el error de compilación.
import appFirebase from '../firebase/Credenciales.js';

// Inicializa la autenticación de Firebase
const auth = getAuth(appFirebase);

export const Login = () => {
    // Estado para alternar entre registrar (true) e iniciar sesión (false)
    const [registrando, setRegistrando] = useState(false);
    // Estado para mostrar mensajes de error
    const [error, setError] = useState('');
    // Estado para mostrar un indicador de carga en el botón
    const [loading, setLoading] = useState(false);
    // Hook para navegar programáticamente después de la autenticación
    const navigate = useNavigate();
    
    // Función principal para manejar la autenticación
    const funcAutenticacion = async(e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        
        // Obtener valores de los campos de formulario
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;
        
        try {
            if (registrando) {
                // Lógica para registrar un nuevo usuario
                await createUserWithEmailAndPassword(auth, correo, contraseña);
                console.log('Usuario registrado con éxito.');
            } else {
                // Lógica para iniciar sesión con un usuario existente
                await signInWithEmailAndPassword(auth, correo, contraseña);
                console.log('Inicio de sesión exitoso.');
            }
            // Navegar a la página principal después de la autenticación exitosa
            navigate('/');
        } catch (error) {
            console.error('Error de autenticación:', error);
            // Manejo de errores específicos de Firebase
            if (error.code === 'auth/email-already-in-use') {
                setError('Este correo ya está registrado.');
            } else if (error.code === 'auth/wrong-password') {
                setError('Contraseña incorrecta.');
            } else if (error.code === 'auth/user-not-found') {
                setError('Usuario no encontrado.');
            } else if (error.code === 'auth/weak-password') {
                setError('La contraseña debe tener al menos 6 caracteres.');
            } else if (error.code === 'auth/invalid-credential') {
                setError('Credenciales inválidas.');
            } else if (error.code === 'auth/invalid-email') {
                setError('Correo electrónico inválido.');
            } else {
                setError('Error de autenticación. Intenta nuevamente.');
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4'> 
            <div className='w-full max-w-md bg-white p-8 md:p-10 shadow-lg rounded-xl'>
                <h1 className='text-4xl font-extrabold capitalize text-center mb-2 text-gray-900'>
                    {registrando ? "Registrarse" : "Iniciar Sesión"}
                </h1>
                <p className='text-sm font-light text-center text-gray-600 mb-8'>
                    Por favor ingresa tus credenciales para {registrando ? "registrarte" : "iniciar sesión"}.
                </p>
                
                {/* Alerta de Error */}
                {error && (
                    <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 text-center text-sm font-medium animate-pulse'>
                        {error}
                    </div>
                )}
                
                {/* Formulario de Autenticación */}
                <form 
                    onSubmit={funcAutenticacion} 
                    className='flex flex-col gap-5 w-full'
                >
                    <input 
                        type="email" 
                        placeholder="Ingresa tu Correo Electrónico"  
                        className='border border-slate-300 text-black px-5 py-4 placeholder:text-gray-400 text-sm rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150'
                        id='email'
                        required
                    />
                    
                    <input 
                        type="password" 
                        placeholder="Ingresa tu Contraseña"  
                        className='border border-slate-300 text-black px-5 py-4 placeholder:text-gray-400 text-sm rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150'
                        id='password'
                        required
                        minLength={6}
                    />
                    
                    <button 
                        type="submit" 
                        className='bg-blue-600 text-white px-5 py-4 rounded-full w-full hover:bg-blue-700 transition-colors tracking-widest font-semibold disabled:opacity-50 mt-2 shadow-md hover:shadow-lg'
                        disabled={loading}
                    >
                        {loading ? 'Cargando...' : (registrando ? "Registrarse" : "Iniciar Sesión")}
                    </button>
                </form>
                
                {/* Enlace para cambiar entre modos */}
                <p className='text-sm text-gray-700 text-center mt-6'>
                    {registrando ? "¿Ya tienes una cuenta?" : "¿No tienes una cuenta?"}
                    <button 
                        onClick={() => {
                            setRegistrando(!registrando);
                            setError(''); // Limpia el error al cambiar de modo
                        }}
                        className='text-blue-600 underline ml-2 hover:text-blue-800 transition-colors font-semibold'
                        type="button"
                    >
                        {registrando ? "Inicia sesión aquí" : "Regístrate aquí"}
                    </button>
                </p>
            </div>
        </div>
    )}