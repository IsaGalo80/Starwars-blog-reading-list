const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            people: [],
            planets: [],
            vehicles: [],
            favoritos: [],
            perDetall: [],
            planetaDetalle: [],
            vehiculosDetalle: [],
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            personajes: () => {
                fetch("https://www.swapi.tech/api/people/")
                    .then((res) => res.json())
                    .then((data) => setStore({
                        people: data.results
                    }))
                    .catch((err) => console.error(err));
            },
            perDetall: (uid) => {
                fetch(`https://www.swapi.tech/api/people/${uid}`)
                    .then((res) => res.json())
                    .then((data) => setStore({
                        perDetall: data.result.properties
                    }))
                    .catch((err) => console.error(err));
            },
            planetas: () => {
                fetch("https://www.swapi.tech/api/planets/")
                    .then((res) => res.json())
                    .then((data) => setStore({
                        planets: data.results
                    }))
                    .catch((err) => console.error(err));
            },
            planetaDetalle: (uid) => {
                fetch(`https://www.swapi.tech/api/planets/${uid}`)
                    .then((res) => res.json())
                    .then((data) => setStore({
                        planetaDetalle: data.result.properties
                    }))
                    .catch((err) => console.error(err));
            },
            vehiculos: () => {
                fetch("https://www.swapi.tech/api/vehicles/")
                    .then((res) => res.json())
                    .then((data) => setStore({
                        vehicles: data.results
                    }))
                    .catch((err) => console.error(err));
            },
            vehiculosDetalle: (uid) => {
                fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
                    .then((res) => res.json())
                    .then((data) => setStore({
                        vehiculosDetalle: data.result.properties
                    }))
                    .catch((err) => console.error(err));
            },
            agregarFavoritos: (nombrePersonaje) => {
                const {
                    favoritos
                } = getStore();
                favoritos.push(nombrePersonaje)
                console.log(favoritos)
            },
            addFavorite: (a) => {
                let store = getStore()
                if (!store.favoritos.includes(a)) {
                    setStore({
                        favoritos: [...store.favoritos, a]
                    })
                } else {
                    setStore({
                        favoritos: store.favoritos.filter((x) =>
                            x != a)
                    })
                }
            }
        },
    };
};

export default getState;