export const products = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: "Product " + (i + 1),
  price: Math.floor(Math.random() * 1000)
}));