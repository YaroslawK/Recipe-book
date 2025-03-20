# 🍽 Recipe Finder App

Recipe Finder — це веб-застосунок, що дозволяє знаходити рецепти за назвою, країною, категорією або інгредієнтом.

## 🚀 Технології

- **Frontend**: React, TypeScript, React Router, Axios, CSS Modules
- **Backend**: Node.js, Express, TypeScript, Axios
- **Database**: TheMealDB API

---

## 📦 Встановлення

### 🔹 Клонуйте репозиторій:

```sh
git clone https://github.com/your-username/recipe-finder.git
cd recipe-finder
```

### 🔹 Встановіть залежності

#### 📁 **Backend**

```sh
cd backend
npm install
```

#### 📁 **Frontend**

```sh
cd ../frontend
npm install
```

---

## ▶ Запуск застосунку

### 📌 **Backend**

```sh
cd backend
npm run dev  # або npm start
```

> Бекенд запускається на `http://localhost:5000`

### 📌 **Frontend**

```sh
cd frontend
npm run dev
```

> Фронтенд запускається на `http://localhost:5173`

---

## 🔍 API Endpoints

| Метод | Роут                                  | Опис                                                             |
| ----- | ------------------------------------- | ---------------------------------------------------------------- |
| GET   | `/api/recipes`                        | Отримати всі рецепти з фільтрами (інгредієнт, країна, категорія) |
| GET   | `/api/recipes/:id`                    | Отримати деталі рецепта за ID                                    |
| GET   | `/api/recipes/search?name={name}`     | Пошук рецепта за назвою                                          |
| GET   | `/api/recipes/search?letter={letter}` | Отримати рецепти за першою літерою                               |
| GET   | `/api/recipes/random`                 | Отримати випадковий рецепт                                       |
| GET   | `/api/recipes/random-ten`             | Отримати 10 випадкових рецептів                                  |

---

## 🛠 Тестування

### 🔹 1. Використовуючи **Postman**

- Відкрий Postman
- Введи URL-адресу, наприклад:
  ```
  GET http://localhost:5000/api/recipes?ingredient=chicken
  ```
- Натисни "Send" і перевір JSON-відповідь
