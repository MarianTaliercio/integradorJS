let mushroom = [
    { 
        id: 1,
        nombre: "girgola parda",
        category: "frescos",
        precio: 700,
        peso: 200,
        img: src="/imagenes/girgola-parda-producto.jpg"
    },
    { 
        id: 1.25,
        nombre: "girgola parda",
        category: "secos",
        precio: 1300,
        peso: 100,
        img: src="/imagenes/girgola-parda-producto.jpg"
    },
    { 
        id: 1.5,
        nombre: "girgola parda",
        category: "kit de cultivo",
        precio: 2000,
        peso: 1000,
        img: src="/imagenes/girgola-parda-producto.jpg"
    },
    { 
        id: 2,
        nombre: "girgola rosa",
        category: "frescos",
        precio: 700,
        peso: 200,
    },
    { 
        id: 2.25,
        nombre: "girgola rosa",
        category: "secos",
        precio: 1300,
        peso: 100,
    },
    { 
        id: 2.5,
        nombre: "girgola rosa",
        category: "kit de cultivo",
        precio: 2000,
        peso: 1000,
    },
    { 
        id: 3,
        nombre: "girgola amarilla",
        category: "frescos",
        precio: 700,
        peso: 200,
    },
    { 
        id: 3.25,
        nombre: "girgola amarilla",
        category: "secos",
        precio: 1300,
        peso: 100,
    },
    { 
        id: 3.5,
        nombre: "girgola amarilla",
        category: "kit de cultivo",
        precio: 2000,
        peso: 1000,
    },
    { 
        id: 4,
        nombre: "girgola gris",
        category: "frescos",
        precio: 700,
        peso: 250,
    },
    { 
        id: 4.5,
        nombre: "girgola gris",
        category: "kit de cultivo",
        precio: 2000,
        peso: 1000,
    },
    { 
        id: 5,
        nombre: "girgola reina",
        category: "frescos",
        precio: 900,
        peso: 200,
    },
    { 
        id: 6,
        nombre: "melena de leon",
        category: "frescos",
        precio: 1000,
        peso: 200,
    },
    { 
        id: 6.5,
        nombre: "melena de leon",
        category:  "kit de cultivo",
        precio: 2000,
        peso: 1000,
    },
    { 
        id: 7,
        nombre: "portobello",
        category: "frescos",
        precio: 1300,
        peso: 200,
    },
    { 
        id: 7.5,
        nombre: "portobello",
        category: "secos",
        precio: 2000,
        peso: 100,
    },
    { 
        id: 8,
        nombre: "shiitake",
        category: "frescos",
        precio: 1300,
        peso: 200,
    },
    { 
        id: 8.5,
        nombre: "shiitake",
        category: "secos",
        precio: 2000,
        peso: 100,
    },
    { 
        id: 9,
        nombre: "shimeyi",
        category: "frescos",
        precio: 2000,
        peso: 200,
    },
    { 
        id: 10,
        nombre: "enoki",
        category: "frescos",
        precio: 2000,
        peso: 200,
    },
    { 
        id: 11,
        nombre: "reishi",
        category: "secos",
        precio: 2500,
        peso: 150,
    },
    
]


const productDivider = (size) => {
	let divider = [];
	for (let i = 0; i < mushroom.length; i += size) {
		divider.push(mushroom.slice(i, i + size));
	}
	return divider; // array retornado, el array dividido en 6 productos por paginacion
};

const controlMushroom = {
	dividedProduct: productDivider(6), // en cuandos elementos vamos a dividir el array
	nextProductsIndex: 1, //Inicia en en el primer indice 1
	productLimit: productDivider(6).length, // el limite de la ultima paginacion
};

// console.log(controlMushroom);


