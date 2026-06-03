import {createContext, useState, useEffect, useContext} from "react";

const FavouriteContext = createContext();

export const FavouriteProvider = ({children})=> {
    const [favourites, setFavourites] = useState(() => {
        const savedFavourites = localStorage.getItem("favourites");
        return savedFavourites ? JSON.parse(savedFavourites) : [];
    });

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);

    return (
        <FavouriteContext.Provider value={{favourites, setFavourites}}>
            {children}
        </FavouriteContext.Provider>
    )
};

export const useFavourite = () => useContext(FavouriteContext);
