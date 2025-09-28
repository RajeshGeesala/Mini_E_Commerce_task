# Mini E-Commerce Frontend

A simplified but real-world e-commerce frontend built using **React**, **Vite**, **Tailwind CSS**. This project demonstrates a fully responsive, component-driven architecture with common e-commerce functionalities like product listing, product detail, cart management, and filtering.

---

## Demo

Hosted on Vercel: [vercel link](https://mini-e-commerce-task.vercel.app/)

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
- Remove item from cart
- Apply promo code (dummy logic)
- Price breakdown (MRP, discount, tax, total)
- Mobile sticky checkout bar

---

## Tech Stack

- **Frontend:** React.js + Vite  
- **Styling:** Tailwind CSS (mobile-first responsive design)  
- **Data Persistence:** LocalStorage for cart & wishlist  
- **Deployment:** Vercel  

---

## API Reference


Sample API used: [https://dummyjson.com/products](https://dummyjson.com/products)


## Installation and running the application in local

# 1. Clone the repository
git clone https://github.com/RajeshGeesala/Mini_E_Commerce_task.git
cd Mini_E_Commerce_task

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open the application in your browser
http://localhost:5173


Open http://localhost:5173

