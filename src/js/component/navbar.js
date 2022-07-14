import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav classNameName="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<div> <img src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" style={{width:"9rem", height:"5rem"}}>
				</img>
				</div>
			</Link>
			<div classNameName="ml-auto">
				<Link to="/demo">
				<div className="btn-group position-absolute top-0 end-0">
  <button type="button" className="btn btn-primary" style={{width:"5rem"}}>Favoritos</button>
  <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span className="visually-hidden"></span>
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#"></a></li>
    <li><a className="dropdown-item" href="#"></a></li>
    <li><a className="dropdown-item" href="#"></a></li>
    <li><a className="dropdown-divider"></a></li>
    <li><a className="dropdown-item" href="#"></a></li>
  </ul>
</div>
				</Link>
			</div>
		</nav>
	);
};


