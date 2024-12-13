# 🚀 User Registration API

## Overview
The User Registration API enables new users to create accounts securely in the system with proper validation and authentication.

## 📌 Endpoint Details

### `POST /users/register`

#### 🔑 Authentication
No authentication required.

#### 📄 Description
This endpoint allows new users to register in the system. It creates a new user account with the provided information.

#### 📥 Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```
- **`fullname.firstname`** (string, required): The user's first name. It must be at least 3 characters long.
- **`fullname.lastname`** (string, required): The user's last name. It must be at least 3 characters long.
- **`email`** (string, required): The user's email address. It must be a valid email format.
- **`password`** (string, required): The user's password. It must be at least 6 characters long.

#### 📤 Response
Upon a successful registration, the response will include the user's details and an authentication token.

##### Example Success Response:
```json
{
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  },
  "token": "jwt_token"
}
```
- **`user._id`**: The unique identifier for the newly created user.
- **`user.fullname`**: The full name of the user, including firstname and lastname.
- **`user.email`**: The email address provided by the user.
- **`token`**: A JWT token for authenticating further requests.

#### ⚠️ Error Handling
In case of an error, such as missing required fields or invalid data, the response will contain a detailed error message.

##### Example Error Response:
```json
{
  "error": [
    {
      "msg": "The 'firstname' field is required",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "The 'email' field is required",
      "param": "email",
      "location": "body"
    }
  ]
}
```
- **`msg`**: A description of the error.
- **`param`**: The field that caused the error.
- **`location`**: The location where the error was detected (e.g., body for request body validation).

#### 🛠️ Example Error Scenarios:
- Missing required fields (e.g., firstname, email, password).
- Invalid email format.
- Password length less than 6 characters.

#### 🧪 How to Test the API Using curl
You can test the user registration endpoint using the following curl command. This command sends a POST request to the /users/register endpoint with the appropriate headers and data.

```bash
curl -X POST http://localhost:3000/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'
```
- **`-X POST`**: Specifies the HTTP method (POST).
- **`-H "Content-Type: application/json"`**: Sets the content type header to indicate that the request body contains JSON data.
- **`-d`**: Specifies the request body to send.

### `GET /user/profile`

#### 🔑 Authentication
- Requires a valid JWT token.

#### 📄 Description
This endpoint retrieves the profile information of the authenticated user.

#### 📤 Response
Upon a successful request, the response will include the user's profile details.

##### Example Success Response:
```json
{
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```
- **`user._id`**: The unique identifier for the user.
- **`user.fullname`**: The full name of the user, including firstname and lastname.
- **`user.email`**: The email address of the user.

#### ⚠️ Error Handling
In case of an error, such as an invalid or expired token, the response will contain a detailed error message.

##### Example Error Response:
```json
{
  "message": "Unauthorized"
}
```
- **`message`**: A description of the error.

#### 🧪 How to Test the API Using curl
You can test the user profile endpoint using the following curl command. This command sends a GET request to the /user/profile endpoint with the appropriate headers.

```bash
curl -X GET http://localhost:3000/user/profile \
-H "Authorization: Bearer jwt_token"
```
- **`-X GET`**: Specifies the HTTP method (GET).
- **`-H "Authorization: Bearer jwt_token"`**: Sets the authorization header with the JWT token.

### `POST /user/logout`

#### 🔑 Authentication
- Requires a valid JWT token.

#### 📄 Description
This endpoint logs out the authenticated user by blacklisting the provided JWT token.

#### 📤 Response
Upon a successful logout, the response will confirm the logout action.

##### Example Success Response:
```json
{
  "message": "Successfully logged out"
}
```
- **`message`**: A confirmation message indicating successful logout.

#### ⚠️ Error Handling
In case of an error, such as an invalid or expired token, the response will contain a detailed error message.

##### Example Error Response:
```json
{
  "message": "Unauthorized"
}
```
- **`message`**: A description of the error.

#### 🧪 How to Test the API Using curl
You can test the user logout endpoint using the following curl command. This command sends a POST request to the /user/logout endpoint with the appropriate headers.

```bash
curl -X POST http://localhost:3000/user/logout \
-H "Authorization: Bearer jwt_token"
```
- **`-X POST`**: Specifies the HTTP method (POST).
- **`-H "Authorization: Bearer jwt_token"`**: Sets the authorization header with the JWT token.

## Summary
This API provides a simple user registration flow where users can create an account with their first name, last name, email, and password. Upon successful registration, the user is authenticated with a JWT token for subsequent requests. Additionally, the API provides endpoints for user profile retrieval and logout functionality. The profile endpoint allows users to view their profile information, while the logout endpoint ensures secure logout by blacklisting the JWT token.

For further details on other endpoints or additional features, please refer to the full API documentation.