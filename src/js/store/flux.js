const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
				people:[],
				planets:[],
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
		personajes: () => {
				
						fetch("https://www.swapi.tech/api/people/")
						.then(res => res.json())
						.then(data => setStore({people:data.results}))
						.catch(err => console.error(err))		
			},
			planetas: () => {
				fetch("https://www.swapi.tech/api/planets/")
				.then(res => res.json())
				.thenthen(data => setStore({planets:data.results}))
				.catch(err => console.error(err))
			},
			vehiculos: () => {
				fetch("https://www.swapi.tech/api/vehicles/")
				.then(res => res.json())
				.thenthen(data => setStore({vehiculos:data.results}))
				.catch(err => console.error(err))
			}
		}
	};
};

export default getState;
