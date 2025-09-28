# Mini E-Commerce Frontend

A simplified but real-world e-commerce frontend built using **React**, **Vite**, **Tailwind CSS**, and **Redux Toolkit**. This project demonstrates a fully responsive, component-driven architecture with common e-commerce functionalities like product listing, product detail, cart management, and filtering.

---

## Demo

Hosted on Vercel: [Your Vercel Link Here]

---

## Features

### Home Page
- Hero banner (static image or carousel)
- Featured categories (grid layout)
- Trending products section (uses reusable product card component)

### Product Listing Page (PLP)
- Filter by category, brand, price range, and rating
- Sorting options: Relevance, Price (Low to High), Newest
- Search bar for client-side filtering
- Pagination or infinite scroll support

### Product Detail Page (PDP)
- Image carousel (minimum 3 images)
- Variant selector (color, size)
- Quantity selector
- Add to cart button
- Wishlist button
- Similar products carousel

### Cart Page
- Product summary with quantity controls
- Remove item from cart
- Apply promo code (dummy logic)
- Price breakdown (MRP, discount, tax, total)
- Mobile sticky checkout bar

### Checkout Modal (Optional)
- Dummy form (Name, Email, Address, etc.)
- On submit, shows success message

---

## Tech Stack

- **Frontend:** React.js + Vite  
- **Styling:** Tailwind CSS (mobile-first responsive design)  
- **State Management:** Redux Toolkit  
- **Data Persistence:** LocalStorage for cart & wishlist  
- **Deployment:** Vercel  

---

## API Reference

This project uses either **DummyJSON API** or local static JSON files:

- Products: `/api/products`
- Product Details: `/api/products/:id`
- Cart: `/api/cart`
- Categories: `/api/categories`
- Promo Codes: `/api/promocodes`
- Related Products: `/api/related-products`

Sample API used: [https://dummyjson.com/products](https://dummyjson.com/products)

---


---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/RajeshGeesala/Mini_E_Commerce_task.git
cd mini-ecommerce-frontend

