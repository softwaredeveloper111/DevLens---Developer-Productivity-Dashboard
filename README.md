# DevLens - Developer Productivity Dashboard

DevLens is a React-based productivity dashboard designed for developers. It combines GitHub analytics, developer articles, task management, and bookmarking into a single application.

The goal of this project is to practice production-style frontend development, including API integration, state management with Context API, reusable component architecture, search and filtering, local storage persistence, and modern dashboard UI design.

---

## Features

### Dashboard

* Search any GitHub username
* View GitHub profile information
* Display followers, following, and public repositories
* View top repositories
* Direct link to GitHub profile
* Direct links to repository pages

### Articles

* Fetch real-time developer articles from external APIs
* Search articles
* Filter articles by category or tag
* Infinite scrolling
* Bookmark favorite articles

### Tasks

* Create tasks
* Edit tasks
* Delete tasks
* Mark tasks as completed
* Search tasks
* Filter by:

  * All Tasks
  * Active Tasks
  * Completed Tasks
* Task statistics
* LocalStorage persistence

### Bookmarks

* View all bookmarked articles
* Remove bookmarks
* Quick access to saved content

---

## Tech Stack

### Frontend

* React
* React Router
* Context API
* CSS
* React Icons

### APIs

* GitHub API
* Dev.to API

### State Management

* Context API

### Storage

* LocalStorage

---

## Project Structure

```bash
src
├── components
├── pages
│   ├── Dashboard
│   ├── Articles
│   ├── Tasks
│   └── Bookmarks
├── context
├── hooks
├── services
├── utils
├── layouts
└── assets
```

---

## Learning Objectives

This project focuses on:

* API Integration
* Context API
* Component Reusability
* Search & Filtering
* Infinite Scroll
* LocalStorage Persistence
* Responsive Dashboard Design
* Error Handling
* Loading States
* Real-world Project Architecture

---

## Future Improvements

* GitHub contribution graph
* Dark / Light theme
* Repository sorting
* Article category management
* User preferences
* Export tasks
* Analytics dashboard

---

## Author

Sourav Giri

Full Stack Developer passionate about building real-world applications and improving frontend architecture through practical projects.
