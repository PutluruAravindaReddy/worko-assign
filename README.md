# Worko.ai Backend Internship Assignment

## Overview

This project is developed as part of the backend internship assignment at Worko.ai. It implements a Node.js application with MongoDB for managing Worko listings and user data. The application includes CRUD operations, authentication, validation, file uploads, error handling, and unit testing.

## Features

- **CRUD Operations:** Create, Read, Update, Delete operations for Worko listings and user data.
- **Authentication:** Basic authentication middleware for secure API endpoints.
- **Validation:** Request validation using Joi to ensure data integrity.
- **File Uploads:** Handling image uploads with validation and storage.
- **Error Handling:** Custom error handling middleware to manage exceptions.
- **Unit Tests:** Achieved at least 60% test coverage using Jest for thorough testing of APIs, models, and middleware.

## Installation

### Requirements

- Node.js
- MongoDB

### Steps to Run Locally

1. **Clone the repository:**

```
git clone https://github.com/PutluruAravindaReddy/worko-assign.git
cd project-directory
```


2. **Install dependencies:**

```
npm install
```


3. **Set up environment variables:**
- Create a `.env` file in the root directory.
- Define the following environment variables:

```
CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_API_SECRET_KEY=
ATLASDB_URL=
SECRET=
PORT=
```

4. **Start the application:**
```
node app.js
```


5. **Access API endpoints:**
- Use tools like Postman to interact with API endpoints (`GET`, `POST`, `PUT`, `DELETE`).


## Project Structure

- **`/config`:** Configuration files.
- **`/controllers`:** Business logic for handling requests.
- **`/middleware`:** Middleware functions (e.g., authentication, validation).
- **`/models`:** Mongoose schemas and models.
- **`/routes`:** Express routes for API endpoints.
- **`/test`:** Unit tests.
- **`/utils`:** Utility functions.

## API Documentation

### Worko Resource

#### Retrieve All Workos

- **URL:** `/worko/user`
- **Method:** `GET`
- **Description:** Fetches all Worko listings.
- **Response:** JSON array of Worko objects.
```json
[
 {
   "_id": "6123456789abcdef01234567",
   "name": "Worko User",
   "age": 25,
   "email": "worko.user@example.com",
   "city": "Bengaluru",
   "zipcode": "10001",
   "image": "https://example.com/image.jpg"
 },
]
```



**Retrieve a Single Worko**

- **URL:** /worko/user/:id
- **Method:** GET
- **Description:** Retrieves a specific Worko listing by ID.
- **Parameters:**
  - id (required): The ID of the Worko listing.
- **Response:** JSON object of the Worko.

```json
{
"_id": "6123456789abcdef01234567",
"name": "Worko",
"age": 25,
"email": "<Worko@example.com>",
"city": "Bengaluru",
"zipcode": "10001",
"image": "<https://example.com/image.jpg>"
}
```

- **Error Responses:**
  - 404 Not Found: If the specified ID does not exist.

**Create a New Worko**

- **URL:** /worko/user
- **Method:** POST
- **Description:** Creates a new Worko listing.
- **Request Body:**

```json
{
"name": "New Worko",
"age": 25,
"email": "<new.worko@example.com>",
"city": "Bengaluru",
"zipcode": "10001",
"image": "<https://example.com/image.jpg>"
}
```

- **Response:** JSON object of the newly created Worko.

```json
{
"_id": "8123456789abcdef01234569",
"name": "New Worko",
"age": 25,
"email": "<New Worko@example.com>",
"city": "Bengauru",
"zipcode": "10001",
"image": "<https://example.com/image.jpg>"
}
```

- **Error Responses:**
  - 400 Bad Request: If required fields are missing or invalid.

**Update a Worko**

- **URL:** /worko/user/:id
- **Method:** PUT
- **Description:** Updates an existing Worko listing.
- **Parameters:**
  - id (required): The ID of the Worko listing to update.
- **Request Body:**

```json
{
"name": "Updated Name",
"age": 30,
"email": "<updated.email@example.com>",
"city": "Updated City",
"zipcode": "20001",
"image": "<https://example.com/updated-image.jpg>"
}
```

- **Response:** JSON object of the updated Worko.

```json
{
"_id": "8123456789abcdef01234569",
"name": "Updated Name",
"age": 30,
"email": "<updated.email@example.com>",
"city": "Updated City",
"zipcode": "20001",
"image": "<https://example.com/updated-image.jpg>"
}
```

- **Error Responses:**
  - 400 Bad Request: If required fields are missing or invalid.
  - 404 Not Found: If the specified ID does not exist.

**Delete a Worko**

- **URL:** /worko/user/:id
- **Method:** DELETE
- **Description:** Deletes a Worko listing by ID.
- **Parameters:**
  - id (required): The ID of the Worko listing to delete.
- **Response:** Status 204 No Content.
- **Error Responses:**
  - 404 Not Found: If the specified ID does not exist.


## Technologies Used

- **Node.js:** Server-side JavaScript runtime.
- **Express:** Web application framework for Node.js.

- **MongoDB:** NoSQL database for data storage.
- **Mongoose:** MongoDB object modeling for Node.js.

- **Joi:** Schema validation for JavaScript objects.

- **Multer:** Middleware for handling file uploads.

- **Jest:** Testing framework for JavaScript projects.

- **Error Responses:**
  - 404 Not Found: If no Workos are found.

## Conclusion

This project demonstrates proficiency in backend development with Node.js, MongoDB, and related technologies. It's structured to showcase CRUD operations, authentication, validation, and unit testing practices. For any questions or feedback, please contact [ARAVINDA REDDY P](https://portfolio-putluruaravindareddys-projects.vercel.app/) at [aravindareddy60@gmail.com].

