import React, { useEffect, useContext} from "react";
import { useParams} from "react-router-dom";
import {Context} from "../store/appContext";


export const PlanetasDetalle = () => {
    const {
        store,
        actions
    } = useContext(Context)
    const {
        uid
    } = useParams()
    useEffect(() => {
        actions.planetaDetalle(uid);

    }, []);


    return ( <>
        <p > {store.planetaDetalle.name} </p> 
        <p > {store.planetaDetalle.tamaño} </p> 
        <p > {store.planetaDetalle.climate} </p> 
        </>
    )
}