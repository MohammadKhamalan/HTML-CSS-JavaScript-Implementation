// script.js

// Sample product data
const products = [
    { name: "Laptop", category: "Electronics", price: 999 },
    { name: "T-Shirt", category: "Clothing", price: 20 },
    { name: "Vacuum Cleaner", category: "Home", price: 120 },
    { name: "Headphones", category: "Electronics", price: 150 },
    { name: "Jeans", category: "Clothing", price: 45 },
    { name: "Blender", category: "Home", price: 80 },
  ];
  
  // Function to display products
  function displayProducts(productArray) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Clear previous content
  
    productArray.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
  
      productCard.innerHTML = `
        <h2>${product.name}</h2>
        <p>Category: ${product.category}</p>
        <p>Price: $${product.price.toFixed(2)}</p>
      `;
  
      productList.appendChild(productCard);
    });
  }
  
  // Initial display of all products
  displayProducts(products);
  
  // Filtering functionality
  const filterButtons = document.querySelectorAll(".filter-btn");
  
  filterButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const category = event.target.dataset.category;
  
      if (category === "All") {
        displayProducts(products);
      } else {
        const filteredProducts = products.filter(
          (product) => product.category === category
        );
        displayProducts(filteredProducts);
      }
    });
  });
  