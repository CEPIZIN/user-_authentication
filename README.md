# User Authentication API

This API was built using Node.js and Express for user authentication.

## Endpoints

### Register User

Registers a new user with the provided information.

- **URL**: `/auth/register`
- **Method**: `POST`
- **Request Body Parameters**:
  - `name` (string): User's name.
  - `email` (string): User's email address.
  - `password` (string): User's password.
  - `confirmPassword` (string): Password confirmation.
- **Responses**:
  - `201 Created`: User created successfully.
  - `422 Unprocessable Entity`: Validation errors. (Check the response body for details)

### Authenticate User

Authenticates a user based on the provided credentials.

- **URL**: `/auth/user`
- **Method**: `POST`
- **Request Body Parameters**:
  - `email` (string): User's email address.
  - `password` (string): User's password.
- **Responses**:
  - `200 OK`: Authentication successful. (Check response body for token)
  - `404 Not Found`: User not found.
  - `422 Unprocessable Entity`: Validation errors. (Check the response body

### Get User Information

Retrieves user information based on the provided ID.

- **URL**: `/user/:id`
- **Method**: `GET`
- **URL Parameters**:
  - `id` (string): User ID.
- **Headers**:
  - `Authorization` (string): JWT authentication token.
- **Responses**:
  - `200 OK`: User information retrieved successfully.
  - `404 Not Found`: User not found

## Authentication Middleware

An authentication middleware is available to protect private routes. To use it, include the `Authorization` header with a valid JWT token in your requests.

## Running the Project

1. Install dependencies: `npm install`.
2. Start the server: `npm start`.

## Environment Configuration

This project uses environment variables to configure the JWT token secret. Make sure to create a `.env` file in the project root and add the `SECRET` variable with your secret value.

Example `.env`:

## Swagger Documentation
The API has Swagger documentation that can be accessed at /api-docs.

## Contributing
Feel free to contribute with improvements or bug fixes! Open an issue or submit a pull request.
