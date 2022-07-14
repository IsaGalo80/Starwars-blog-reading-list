import React from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';



export const Vehicles = (props) => {

    return ( < >
        <div key = {
            props.key
        }
        className = "card"
        style = {
            {
                width: "20rem",
                height:"30rem",
                margin: "1rem"
            }
        } >

        <div className = "card-body" >
        <h5 className = "card-title" > {
            props.name
        } </h5> <Link to = {
            props.link
        } >
        <button type="button" className="btn btn-primary" style={{width:"3rem", height:"2rem"}}
        > Learn more! </button> </Link> </div> </div> </>
        
    );
};

Vehicles.propTypes = {
    name: PropTypes.string,
    key: PropTypes.number,
    link: PropTypes.string
};