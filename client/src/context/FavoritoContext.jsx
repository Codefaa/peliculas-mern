import { createContext, useEffect, useState } from "react";

export const FavoritosContext = createContext();

const favoritoInicial = JSON.parse(localStorage.getItem("favoritos")) || [];

export function FavoritosProvider( { children } ) {
    const [favoritos, setFavoritos] = useState(favoritoInicial);



    const agregarFavorito = (pelicula) => {
        setFavoritos([...favoritos, pelicula]);
    }

    const quitarFavorito = (pelicula) => {
        setFavoritos(favoritos.filter((peli) => peli._id !== pelicula._id))
    }

    useEffect(() => {
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }, [favoritos]);

    return (
        <FavoritosContext.Provider value={{ favoritos, agregarFavorito, quitarFavorito }}>
            {children}
        </FavoritosContext.Provider>
    );
}