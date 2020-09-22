const fetchProducts = () => {
  let urlApi = `https://islampurbackend.islampurmarket.com/api/products`;

  fetch(urlApi)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      showProducts(data.data);
    });
};

fetchProducts();

const showProducts = (products) => {
  console.log(products);
  const productShow = document.getElementById("product-demo");
  products.map((product) => {
    productShow.insertAdjacentHTML(
      "beforeend",

      `<div class="result-divi">
      <div> ${product.name}  </div>
     
         </div>`
    );
  });
};
