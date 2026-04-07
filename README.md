Fine. No wrappers. No IDs. Just raw README. Copy everything below.

---

# Inventory Search System

A full-stack web application that enables users to search and filter inventory items using product name, category, and price range. This project demonstrates clean API design, filtering logic, and a simple but effective user interface.

---

## Features

* Case-insensitive product search (partial matching)
* Multi-filter support (name, category, price range)
* Dynamic UI with real-time API results
* Search term highlighting
* Loading state for better UX
* “No results found” handling
* Input validation (invalid price range)
* Clear filters functionality

---

## Tech Stack

* Backend: Node.js, Express.js
* Frontend: HTML, CSS, JavaScript
* Data: In-memory JSON

---

## API

### GET /search

Query Parameters:

* q → product name (partial match, case-insensitive)
* category → filter by category
* minPrice → minimum price
* maxPrice → maximum price

Example:

[http://localhost:5000/search?q=phone&category=Electronics&minPrice=100&maxPrice=700](http://localhost:5000/search?q=phone&category=Electronics&minPrice=100&maxPrice=700)

---

## How to Run

### 1. Clone the Repository

git clone [https://github.com/yourusername/inventory-search.git](https://github.com/yourusername/inventory-search.git)
cd inventory-search

### 2. Run Backend

cd backend
npm install
node server.js

Backend runs on:
[http://localhost:5000](http://localhost:5000)

### 3. Run Frontend

Open frontend/index.html in browser
OR use VS Code Live Server

---

## Project Structure

inventory-search/
├── backend/
│   └── server.js
├── frontend/
│   └── index.html
└── README.md

---

## Design Decisions

* Used in-memory data for simplicity and speed
* Combined all filters in a single API endpoint
* Built lightweight frontend without frameworks
* Focused on usability (highlighting, validation, clear filters)

---

## Edge Cases Handled

* Empty search → returns all products
* Invalid price range → shows alert
* No results → displays message
* Multiple filters combined

---

## Future Improvements

* Add database (MongoDB / PostgreSQL)
* Implement pagination and sorting
* Use Elasticsearch for faster search
* Deploy application

---

## Summary

This project demonstrates full-stack development skills including API design, filtering logic, frontend integration, and user-focused improvements.

---

## Author

Bachina Vishnu Vardhan
[https://github.com/yourusername](https://github.com/vishnu25832)

---
