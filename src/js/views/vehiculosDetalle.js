import React, {
    useEffect,
    useContext
} from "react";
import {
    useParams
} from "react-router-dom";
import {
    Context
} from "../store/appContext";


export const VehiculosDetalle = () => {
    const {
        store,
        actions
    } = useContext(Context)
    const {
        uid
    } = useParams()
    useEffect(() => {
        actions.vehiculosDetalle(uid);

    }, []);


    return ( <> 
        <p> {store.vehiculosDetalle.name} </p>  
        <p > {store.vehiculosDetalle.model} </p>  
        <p > {store.vehiculosDetalle.passengers } </p>  
        </>
    )
}