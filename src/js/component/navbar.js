import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav classNameName="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <div>
          {" "}
          <img
            src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png"
            style={{ width: "9rem", height: "5rem" }}
          ></img>
        </div>
      </Link>
      <div classNameName="ml-auto">
        <div className="btn-group position-absolute top-0 end-0">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle dropdown-toggle-split mt-4"
            style={{ width: "11rem" }}
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span>Favoritos {store.favoritos.length}</span>
          </button>
          <ul className="dropdown-menu">
            {store.favoritos.map((favoritos, index) => {
              return (
                <li key={index}>
                  {favoritos}
                  <button
                    className="btn btn-warnig"
                    onClick={() => {
                      actions.addFavorite(favoritos);
                    }}
                  >
                    <i className="fa-solid fa fa-trash"></i>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
