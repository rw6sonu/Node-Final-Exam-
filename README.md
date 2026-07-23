# 🍳 RecipeHub

RecipeHub is a full-stack recipe management web application built with Node.js, Express.js, MongoDB, Mongoose, and EJS.

The application allows users to register and login securely. Based on the user's role, different features and access permissions are provided.

---

## 🚀 Features

### 🔐 Authentication

* User Registration
* User Login
* User Logout
* Password Hashing using bcryptjs
* JWT-based Authentication
* Authentication using HTTP-only Cookies
* Protected Routes
* Login and Registration Pages

---

### 👥 Role-Based Access Control

RecipeHub supports role-based access control.

Available roles:

* `admin`
* `user`

Users get access based on the role selected during registration.

#### Admin Access

Admin users can:

* Access Dashboard
* Add Recipes
* View Recipes
* Edit Recipes
* Delete Recipes

#### User Access

User users can access features based on the permissions assigned to their role.

The role is stored in the database and also added to the JWT token during login.

---

## 🍽️ Recipe Management

Admin users can manage recipes.

### Recipe Fields

* Recipe Title
* Description
* Ingredients
* Category
* Price
* Quantity
* Recipe Image

### Recipe Operations

* Add Recipe
* View All Recipes
* Edit Recipe
* Update Recipe
* Delete Recipe
* Upload Recipe Image

---

## 📊 Dashboard

The dashboard displays important application information such as:

* Total Users
* Total Recipes
* Logged-in User Information

The dashboard is protected using authentication and role-based authorization.

---

## 🛠️ Technologies Used

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Frontend

* HTML5
* CSS3
* Bootstrap 5
* EJS

### Authentication & Security

* JWT
* bcryptjs
* cookie-parser

### File Upload

* Multer

---

## 📁 Project Structure

```text
RecipeHub/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── recipeController.js
│
├── middleware/
│   ├── authMiddleware.js
│   ├── roleMiddleware.js
│   └── upload.js
│
├── models/
│   ├── User.js
│   └── Recipe.js
│
├── routes/
│   ├── authRoutes.js
│   └── recipeRoutes.js
│
├── public/
│   ├── css/
│   │   └── style.css
│   │
│   └── uploads/
│
├── views/
│   ├── login.ejs
│   ├── register.ejs
│   ├── dashboard.ejs
│   ├── addRecipe.ejs
│   ├── editRecipe.ejs
│   ├── viewRecipe.ejs
│   └── navbar.ejs
│
├── .env
├── app.js
├── package.json
└── README.md
```

---

## 🔐 Authentication Flow

```text
User Registration
        ↓
User selects a role
        ↓
Password is hashed using bcryptjs
        ↓
User data is saved in MongoDB
        ↓
User Login
        ↓
Email and Password Verification
        ↓
JWT Token is Created
        ↓
JWT Token is Stored in HTTP-only Cookie
        ↓
Protected Routes are Accessed
```

---

## 👤 Role-Based Authorization Flow

```text
User Login
    ↓
JWT Token
    ↓
authMiddleware
    ↓
User Details Added to req.user
    ↓
roleMiddleware
    ↓
Role Checked
    ↓
Access Allowed / Access Denied
```

Example:

```js
roleMiddleware(["admin"])
```

Only users with the `admin` role can access the route.

```js
roleMiddleware(["admin", "user"])
```

Both admin and user roles can access the route.

---

## 🧩 Main Routes

### Authentication Routes

| Method | Route       | Description       |
| ------ | ----------- | ----------------- |
| GET    | `/login`    | Login Page        |
| POST   | `/login`    | Login User        |
| GET    | `/register` | Registration Page |
| POST   | `/register` | Register User     |
| GET    | `/logout`   | Logout User       |

---

### Recipe Routes

| Method | Route                 | Description      |
| ------ | --------------------- | ---------------- |
| GET    | `/recipes/dashboard`  | Dashboard        |
| GET    | `/recipes/add`        | Add Recipe Page  |
| POST   | `/recipes/add`        | Save Recipe      |
| GET    | `/recipes/view`       | View All Recipes |
| GET    | `/recipes/edit/:id`   | Edit Recipe Page |
| POST   | `/recipes/edit/:id`   | Update Recipe    |
| GET    | `/recipes/delete/:id` | Delete Recipe    |


## 🔒 Security

The application includes:

* Password hashing with bcryptjs
* JWT authentication
* HTTP-only cookies
* Protected routes
* Role-based authorization
* MongoDB data validation

---

## 📌 Important Notes

* Users must login before accessing protected pages.
* The JWT token is stored in an HTTP-only cookie.
* The user's role is stored in the database.
* The user's role is added to the JWT token during login.
* Admin-only routes are protected using `roleMiddleware`.
* Recipe images are uploaded using Multer.
* MongoDB is used for storing users and recipes.

screenshots

dashboard page
<img width="1900" height="947" alt="image" src="https://github.com/user-attachments/assets/4430e9d2-5b88-4d21-8d39-717c396123b3" />

add recipes
<img width="853" height="935" alt="image" src="https://github.com/user-attachments/assets/0659d713-cf39-4ee2-be9a-ed719893359c" />

view recipes
<img width="1916" height="949" alt="image" src="https://github.com/user-attachments/assets/ff74c4a9-b978-452a-ab3d-d0d4b2ae3175" />

edit recipes
<img width="853" height="944" alt="image" src="https://github.com/user-attachments/assets/64b18087-0d0d-4308-a0f2-33439baa951a" />

login page
<img width="1919" height="944" alt="image" src="https://github.com/user-attachments/assets/c2806d98-6ff2-46ce-9c29-6afcaa066cdc" />

register
<img width="1916" height="944" alt="image" src="https://github.com/user-attachments/assets/b5a5f809-901b-4837-8081-5c4b99cc48e4" />






