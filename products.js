const productsList = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    category: "Electronics",
    description: "High-quality wireless headphones with noise cancellation.",
    inStock: true,
    image: "https://source.unsplash.com/featured/?headphones"
  },
  {
    id: 2,
    name: "Gaming Mouse",
    price: 799,
    category: "Accessories",
    description: "Ergonomic gaming mouse with RGB lighting.",
    inStock: true,
    image: "https://source.unsplash.com/featured/?mouse"
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 2499,
    category: "Wearables",
    description: "Fitness tracking smartwatch with heart rate monitor.",
    inStock: false,
    image: "https://source.unsplash.com/featured/?smartwatch"
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 1499,
    category: "Audio",
    description: "Portable speaker with deep bass and long battery life.",
    inStock: true,
    image: "https://source.unsplash.com/featured/?speaker"
  },
  {
    id: 5,
    name: "Laptop Stand",
    price: 599,
    category: "Office",
    description: "Aluminum adjustable laptop stand for better posture.",
    inStock: true,
    image: "https://source.unsplash.com/featured/?laptop-stand"
  }
];

function products(){
  return productsList;
}

exports.products =  products;
