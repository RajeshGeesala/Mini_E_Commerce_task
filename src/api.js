const BASE = 'https://dummyjson.com'

export async function fetchProducts(limit = 24) {
  const res = await fetch(`${BASE}/products?limit=${limit}`)
  const j = await res.json()
  return j.products || []
}

export async function fetchProduct(id) {
  const res = await fetch(`${BASE}/products/${id}`)
  if (!res.ok) throw new Error('Product not found')
  return res.json()
}

export async function fetchCategories() {
  const res = await fetch(`${BASE}/products/categories`)
  return res.json()
}

export async function fetchProductsByCategory(category) {
  const res = await fetch(`${BASE}/products/category/${category}`)
  const j = await res.json()
  return j.products || []
}


