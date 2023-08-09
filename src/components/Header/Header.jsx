import React, { useEffect, useState } from 'react'

export const Header = () => {
    const [usuarioParseado, setusuarioParseado] = useState(null)
    const usuario = localStorage.getItem('movil_user')

    useEffect(() => {
        if (usuario) {
            setusuarioParseado(JSON.parse(usuario))
        } else {
            console.log('a')
        }

    }, [usuario])




    return (
        usuarioParseado !== null && (
            <header>
                <span>
                    Bienvenido: {usuario.strNombreEmpleado}
                </span>
            </header>
        )
    )
}
