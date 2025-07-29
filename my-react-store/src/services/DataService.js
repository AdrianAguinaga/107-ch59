const products = [
  {
    _id: 1, //the id most be UNIQUE
    title: "Headphone",
    price: 60.0,
    image: "https://picsum.photos/300/200?random=1",
    category: "Electronics",
  },
  {
    _id: 2, //the id most be UNIQUE
    title: "Headphone",
    price: 60.0,
    image: "https://picsum.photos/300/200?random=2",
    category: "Electronics",
  },
  {
    _id: 3, //the id most be UNIQUE
    title: "Headphone",
    price: 60.0,
    image: "https://picsum.photos/300/200?random=3",
    category: "Electronics",
  },
  {
    _id: 4, //the id most be UNIQUE
    title: "Headphone",
    price: 60.0,
    image: "https://picsum.photos/300/200?random=4",
    category: "Electronics",
  },
];

class DataService {
  //get all products
  static getProducts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  }
  //get products by ID
  static getProductsByID(_id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = products.find((p) => p._id === _id);
        resolve(product);
      }, 300);
    });
  }
}
export default DataService