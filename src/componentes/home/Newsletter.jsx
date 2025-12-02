 // Newsletter.jsx
import React, { useState } from 'react'
// Importar la base de datos y funciones de Firestore
  import { db } from '../../firebase/Credenciales.js'; 
import { doc, setDoc } from 'firebase/firestore'
export const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('') // Para mensajes de feedback

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('') // Limpiar mensajes anteriores

    if (!email) {
      setMessage('Por favor, ingresa un correo electrónico.')
      return
    }

    try {
      // Usamos el correo como ID del documento para asegurar unicidad
      const docRef = doc(db, 'subscribers', email.toLowerCase())
      
      await setDoc(docRef, {
        email: email.toLowerCase(),
        subscribedAt: new Date().toISOString(), // O usa serverTimestamp() si estás en un servidor
      }, { merge: true }) // merge: true para evitar errores si el correo ya existe
      
      setEmail('')
      setMessage('¡Suscripción exitosa! Revisa tu correo.')
      
    } catch (error) {
      console.error('Error al suscribir:', error)
      setMessage('Ocurrió un error. Intenta de nuevo más tarde.')
    }
  }

  return (
    <div className='relative bg-gray-500 text-white py-20'>
        
        {/*IMAGEN DE FONDO*/}
            <div className='absolute inset-0 bg-cover bg-center opacity-70 h-full'
                style={{ backgroundImage: 'url(/img/newlestter.jpg)' }}
            />
        {/*Contenido del newlesster */}
        <div className="container z-10 relative p-5 md:p-0">
            <div className='w-full text-black bg-white p-12 space-y-5 md:w-[50%] lg:w-[40%]'>
                <p className='text-xs uppercase font-semibold'>
                    Suscribete y recibe promociones exclusivas
                </p>
                <p className="text-xs font-medium w-[80%] leading-5">Ingresa el correo para recibir ofertas</p>
                
                {/* Mostrar mensaje de feedback */}
                {message && (
                    <p className={`text-sm font-semibold ${message.includes('éxito') ? 'text-green-600' : 'text-red-600'}`}>
                        {message}
                    </p>
                )}

                <form onSubmit={handleSubmit} className='flex flex-col gap-5 xl:flex-row'>
                    <input 
                        type='email' 
                        className='border-slate-200 focus:outline-none rounded-full py-3 px-5 w-full text-xs font-medium' 
                        placeholder='Correo electronico'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <button 
                        type='submit'
                        className='bg-black text-white font-semibold rounded-full uppercase tracking-wider py-3 text-xs xl:px-5 hover:bg-cyan-600 transition-colors'
                    >   
                        Suscribirme 
                    </button>

                </form>
            
            </div>
        </div>
         </div>
  )
}