import React,{useContext} from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import  {Context} from "../store/appContext";



export const Card = (props) => {
    const {store,actions} = useContext(Context)
    return ( < >
    
        <div key = {
            props.key
        }
        className = "card"
        style = {
            {
                width: "25rem",
                height:"30rem",
                margin: "1rem"
            }
        } >

        <div className = "card-body" >
        <h5 className = "card-title" > {
            props.name } </h5> 
            <div className="row ">
        <div className="col-9 position-relative position-absolute bottom-0 start-0">
        <Link to = {
            props.link
        } >
        
        
            <button type="button" className="btn btn-outline-primary align-bottom " style={{width:"8rem", height:"2rem"}}> Learn more! </button> </Link> 
        </div>

        <div className="col-3 position-relative position-absolute bottom-0 end-0">
            <button onClick={ ()=>actions.addFavorite(props.name)} type="button" className=" btn btn-outline-warning" style={{width:"3rem", height:"2rem"}}
        > <i className="fa-thin fa fa-heart lg"></i> </button>
        </div> 
        </div>
            </div>
        </div> 
    </>
        
    );
};

Card.propTypes = {
    name: PropTypes.string,
    key: PropTypes.number,
    link: PropTypes.string
};