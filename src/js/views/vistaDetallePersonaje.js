import React, {useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const VistaDetallePersonaje = () => {
    const {store, actions} = useContext(Context)
   const {uid} = useParams()
   useEffect(() => {
    actions.perDetall(uid);
    
  }, []);


    return(
        <>
        <p>{store.perDetall.name}</p>
        <p>{store.perDetall.eye_color}</p>
        <p>{store.perDetall.gender}</p>

        </>
    )
}