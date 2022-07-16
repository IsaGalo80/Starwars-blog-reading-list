import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Planets } from "./component/planets";
import { Vehicles } from "./component/vehicles";
import { Card } from "./component/card";
import { VistaDetallePersonaje } from "./views/vistaDetallePersonaje";
import { VehiculosDetalle } from "./views/vehiculosDetalle";
import { PlanetasDetalle } from "./views/planetasDetalle";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						{/* <Route exact path="/card">
							<Card />
						</Route> */}
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route exact path="/vehicles">
							<Vehicles />
						</Route>
						<Route exact path="/character/:uid">
							<VistaDetallePersonaje/>
						</Route>
						<Route exact path="/character/:uid">
							<VehiculosDetalle/>
						</Route>
						<Route exact path="/character/:uid">
							<PlanetasDetalle/>
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Esta página no existe...Lo siento!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);