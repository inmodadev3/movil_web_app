import React, { useEffect, useState } from 'react'
import { InmodaLogo } from '../utils/PicturesAccess'
import { Button } from '../components/Button/Button'
import axios from '../utils/AxiosBase'
import { Loading } from '../components/Loading/Loading'
import { useNavigate } from 'react-router-dom'


export const LoginScreen = () => {

    const [usuario, setusuario] = useState('')
    const [contrasena, setcontrasena] = useState('')
    const [Errors, setErrors] = useState('')
    const [loadingUsuario, setloadingUsuario] = useState(false)

    const navigate = useNavigate()

    useEffect(()=>{
        if(Errors.toString().trim() != ""){
            setTimeout(() => {
                setErrors("")
            }, 2500);
        }
    },[Errors])

    const ValidarUsuario = () => {
        return new Promise((resolve, reject) => {
            axios.post(`/vendedores`, {
                usuario: usuario.toString().toUpperCase(),
                contrasena: contrasena.toString().toUpperCase()
            }).then((response) => {
                if(response.data.length > 0){
                    resolve(response.data[0])
                }else{
                    resolve({message:"Usuario No registrado"})
                }
            }).catch((err) => {
                reject(err)
            })
        })
    }

    const iniciarSesion = () =>{
        setloadingUsuario(true)
        try {
            if(usuario.toString().trim() !== "" && contrasena.toString().trim() !== ""){
                ValidarUsuario()
                .then((usuario)=>{
                    if(!usuario.message){
                        localStorage.setItem('movil_user',JSON.stringify(usuario))
                        navigate('/inicio')
                    }else{
                        setErrors(usuario.message)
                    }
                }).catch((error)=>{
                    console.error(error)
                }).finally(()=>{
                    setloadingUsuario(false)
                })
            }else{
                setloadingUsuario(false)
                setErrors("Usuario y contraseña necesarios")
            }
        } catch (error) {
            console.error(error)
        }
    }

    
    return (
        <main className='bg-gray-200 w-screen h-screen flex justify-center items-center'>
            <section className='bg-white h-[70%] flex flex-col justify-between items-center w-[80%] py-10 rounded'>
                <picture className='w-40 my-6'>
                    <img src={InmodaLogo} alt='Inmoda Logo' className='w-full' />
                </picture>
                <div className='flex flex-col'>
                    <input type='text' value={usuario} onChange={(e)=>{setusuario(e.target.value)}} className='my-4 border-b-2 border-b-gray-700 mx-4 outline-none px-4 py-2 text-gray-700' placeholder='Ingrese un usuario' />
                    <input type='password' value={contrasena} onChange={(e)=>{setcontrasena(e.target.value)}} className='my-4 border-b-2 border-b-gray-700 mx-4 outline-none px-4 py-2 text-gray-700' placeholder='Ingrese una contraseña' />
                </div>
                <div>
                    <Button text={"Ingresar"} onclick={iniciarSesion} />
                </div>
                <p className='text-red-500 underline'>{Errors}</p>
            </section>
            {
                loadingUsuario && <Loading/>
            }
            
        </main>
    )
}
