# 🍰 Cake Store

A modern, responsive e-commerce cake store built with **React**. The application provides a polished shopping experience where customers can browse cakes, search and filter products, view detailed product information, manage their cart and wishlist, and customize cakes.

The project focuses on building a realistic e-commerce experience while demonstrating modern React development practices, reusable components, responsive UI design, routing, state management, and user-friendly interactions.

## ✨ Features

### 🛍️ Product Browsing

* Browse a collection of cakes and bakery products
* Featured products
* Best sellers
* New arrivals
* Product categories
* Product search
* Product filtering
* Product sorting
* Product ratings and reviews
* Discounted products

### 🎂 Product Details

Each product has a dedicated details page containing:

* Product images
* Description
* Price
* Discounted price
* Ratings
* Reviews
* Ingredients
* Allergens
* Available sizes
* Available flavors
* Stock availability
* Related products
* Add to cart
* Add to wishlist

### 🧁 Custom Cake Order

Customers can create a custom cake by selecting options such as:

* Cake shape
* Cake size
* Cake layers
* Flavor
* Filling
* Frosting
* Decorations
* Cake message
* Cake topper
* Candles
* Special instructions
* Delivery date

The interface provides a summary of the selected options and dynamically calculates the estimated price.

### 🛒 Shopping Cart

The cart allows customers to:

* Add products
* Remove products
* Increase or decrease quantities
* View subtotal
* Apply discount codes
* View delivery costs
* View the total price
* Continue shopping
* Proceed to checkout

### ❤️ Wishlist

Users can:

* Add cakes to their wishlist
* Remove products
* View saved products
* Move wishlist products to the cart

### 🔎 Search & Filtering

Products can be discovered using:

* Search
* Categories
* Price
* Ratings
* Availability
* Cake type
* Occasion
* Dietary preferences

---

### 📱 Responsive Design

The application is designed for:

* Mobile devices
* Tablets
* Laptops
* Desktop monitors
* Large screens

The layout adapts using responsive grids, flexible components, and mobile-friendly navigation.

---

## 🛠️ Technologies

| Technology            | Purpose                       |
| --------------------- | ----------------------------- |
| React                 | User interface                |
| JavaScript            | Application logic             |
| Vite                  | Development and build tooling |
| React Router          | Client-side routing           |
| Tailwind CSS          | Styling and responsive design |
| React Icons           | Interface icons               |
| Framer Motion         | Animations and transitions    |
| Context API / Zustand | Application state             |
| Local Storage         | Persisting client-side data   |

---

## 🏗️ Project Structure

```text
src/
├── assets/
│
├── components/
│   ├── About.jsx
│   ├── Cart.jsx
│   ├── Categories.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Home.jsx
│   ├── Navbar.jsx
│   ├── Order.jsx
│   ├── ProductCard.jsx
│   ├── ProductDetails.jsx
│   ├── Shop.jsx
│   └── Wishlist.jsx
│
├── data/
│   └── products.js
│
├── store/
│
├── App.jsx
└── main.jsx
```

---

## 🎨 Design

The interface uses a modern bakery-inspired visual style with:

* Soft colors
* Rounded cards
* Elegant typography
* High-quality product imagery
* Subtle shadows
* Glassmorphism elements
* Smooth animations
* Responsive layouts

The goal is to combine the visual appeal of a premium bakery with the usability of a modern e-commerce platform.

---

## 📊 Product Data

Products are represented using JavaScript objects containing information such as:

```javascript
{
  id: "1",
  name: "Chocolate Dream Cake",
  slug: "chocolate-dream-cake",
  description: "A rich chocolate cake...",
  category: "Chocolate Cakes",
  image: "/images/chocolate-cake.jpg",
  price: 45.99,
  discountedPrice: 36.79,
  rating: 4.8,
  reviews: 124,
  ingredients: [
    "Flour",
    "Chocolate",
    "Eggs",
    "Butter"
  ],
  allergens: [
    "Gluten",
    "Eggs",
    "Milk"
  ],
  stock: 15,
  sizes: [
    "6 inch",
    "8 inch",
    "10 inch"
  ],
  flavors: [
    "Chocolate",
    "Vanilla"
  ],
  tags: [
    "Chocolate Cakes",
    "popular"
  ],
  featured: true,
  bestSeller: true,
  newArrival: false
}
```

This structure makes it easy to replace the mock data with products retrieved from a backend API.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm

### Clone the repository

```bash
git clone https://github.com/your-username/cake-store.git
```

### Navigate to the project

```bash
cd cake-store
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

---

## 📜 Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs OxLint to identify potential issues.

---

## 🔮 Future Improvements

Possible future additions include:

* Real authentication
* Backend API
* PostgreSQL/MySQL database
* Real payment processing
* Stripe integration
* Real-time order tracking
* Customer reviews
* Image uploads for custom cakes
* Admin dashboard
* Inventory management
* Order management
* Email notifications
* SMS notifications
* Delivery management
* Customer loyalty programme
* Gift cards
* Coupon management
* Product recommendations
* AI-powered cake recommendations

---

## 🧠 What I Learned

This project helped strengthen my understanding of building a complete React application, particularly:

* Component-based architecture
* React Hooks
* React Router
* State management
* Reusable components
* Dynamic product pages
* User Account Login
* E-commerce workflows
* Form handling
* Responsive design
* Client-side persistence
* UI/UX design
* Working with mock data
* Structuring an application for future API integration

It also provided practical experience designing an application around a real-world business use case rather than building isolated UI components.

---

**GitHub Repository:** https://github.com/SnowyParis/Cake-Shop

---

## 👨‍💻 Author

**Emihle Makala**

Software Developer

* GitHub: https://github.com/SnowyParis
* LinkedIn: https://linkedin.com/in/emihle-makala
* Portfolio: https://snowyparis.github.io/Portfolio/
* Email: rosiemakala82@gmail.com

---

## 📄 License

This project is available for educational and portfolio purposes.

If you use or modify this project, please provide appropriate attribution.

---

⭐ If you found this project interesting, consider giving the repository a star!
