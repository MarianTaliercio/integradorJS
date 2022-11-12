const cards = document.querySelector(".mostrarproductos");
const cardsInformacion = document.querySelector(".informacion");
// const categorias = document.getElementById("categoria");
const categoriesList = document.getElementById("category");
const categories = document.getElementById("categories");
const btnLoad = document.querySelector(".btn-load");




// Creando la logica de división de productos
const renderDividedProducts = (index = 0) => {
  cards.innerHTML += controlMushroom.dividedProduct[index].map(createHTML).join("");
}

const renderProduct = (index = 0, category = undefined) => {
  if(!category){
    renderDividedProducts(index)
    return;
 }
    renderFilteredProducts(category);
}

const createHTML = mushroom =>{
    return `
    <div class="informacion">        
        
        <h2 class="nombreMushroom">${mushroom.nombre}</h2>
        <h3 class="tipoMushroom">${mushroom.tipo}</h3>
        <h3 class="precioMushroom">${mushroom.precio}</h3>
        <h3 class="pesoMushroom">${mushroom.peso}</h3>
    </div>`
}

const renderFilteredProducts = (category) => {
    const productList = mushroom.filter(
      (product) => product.tipo === category
    );
  
    cards.innerHTML = productList.map(renderProduct).join("");
  };




// Logica de Filtros
const changeShowMoreBtnState = (category) => {
    if (!category) {
      btnLoad.classList.remove("hidden");
      return;
    }
    btnLoad.classList.add("hidden");
  };

const cambiarBtnActivo = seleccionarCategoria => {
  const categories = [ ... categoriesList];

  categories.forEach(categoryBtn => {
    if(categoryBtn.dataset.category !== seleccionarCategoria)
        {
            categoryBtn.classList.remove("active")
        return;
            }
            categoryBtn.classList.add("active");
  });
};

const cambiarEstadoFiltro = (e) => {
  const seleccionarCategoria = e.target.dataset.category;
  cambiarBtnActivo(seleccionarCategoria);
  changeShowMoreBtnState(seleccionarCategoria);
}

// Funcion para aplicar el filtro por categorias
const aplicarFiltro = (e) => {
  if(!e.target.classList.contains("category"))
  return;
    cambiarEstadoFiltro(e);
    if (!e.target.dataset.category) {
        products.innerHTML = "";
        renderProduct();
      } else {
        renderProduct(0, e.target.dataset.category);
        controlMushroom.nextProductsIndex = 1;
      }
    };

// Funcion que checkee si estamos en el ultimo array del array de productos divididos
const isLastIndexOf = () =>
controlMushroom.nextProductsIndex === controlMushroom.productsLimit;

// Funcion para cargar mas productos
const showMoreProducts = () => {
renderProduct(controlMushroom.nextProductsIndex);
controlMushroom.nextProductsIndex++;
if (isLastIndexOf()) {
  btnLoad.classList.add("hidden");
}
};


const init = () => {
    renderProduct();
    categories.addEventListener("click", aplicarFiltro);
    btnLoad.addEventListener("click", showMoreProducts);
};


init();