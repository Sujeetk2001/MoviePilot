import {createContext, useState, useContext} from "react";

const FavouriteContext = createContext();

export const FavouriteProvider = ({children})=> {
    const [favourites, setFavourites] = useState([]);

    return (
        <FavouriteContext.Provider value={{favourites, setFavourites}}>
            {children}
        </FavouriteContext.Provider>
    )
};

export const useFavourite = () => useContext(FavouriteContext);
