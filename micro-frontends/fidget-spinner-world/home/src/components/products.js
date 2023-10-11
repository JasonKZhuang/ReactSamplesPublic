const API_SERVER = "http://localhost:8080";

export const getProducts = async () => {
  const response = await fetch(`${API_SERVER}/products`);
  const data = await response.json();
  return data;
};

export const getProductById = async (id) => {
  const response = await fetch(`${API_SERVER}/products/${id}`);
  const data = await response.json();
  return data;
};

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
