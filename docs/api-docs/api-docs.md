## Auth API Documentation

### Overview

The `AuthService` handles user authentication using both traditional email/password methods and Google OAuth2. This documentation provides details on how to integrate the backend with the frontend, setup Google OAuth2, and describes the MongoDB data structure used to store user information.

---

### Base URL

```
/auth
```

---

### Endpoints

#### 1. User Signup

**POST** `/auth/signup`

- **Description**: Registers a new user with an email, password, and username.
- **Request Body**:
  - **email**: `string` (required, must be a valid email)
  - **password**: `string` (required, minimum 6 characters)
  - **username**: `string` (required)
- **Response**:
  - **200 OK**: Returns an access token and user details (excluding the password).
    ```json
    {
      "access_token": "jwt_token_here",
      "user": {
        "email": "user@example.com",
        "username": "testuser"
      }
    }
    ```
  - **400 Bad Request**: If the email is already in use or validation fails.
- **Validation**: Enforced using `class-validator` to ensure email format and password strength.

---

#### 2. User Login

**POST** `/auth/login`

- **Description**: Authenticates a user and provides a JWT token.
- **Request Body**:
  - **email**: `string` (required, must be a valid email)
  - **password**: `string` (required, minimum 6 characters)
- **Response**:
  - **200 OK**: Returns an access token and user details.
    ```json
    {
      "access_token": "jwt_token_here",
      "user": {
        "email": "user@example.com",
        "username": "testuser"
      }
    }
    ```
  - **401 Unauthorized**: If the credentials are invalid.
- **Validation**: Uses `class-validator` for input validation.

---

#### 3. Google OAuth2 Authentication

**GET** `/auth/google`

- **Description**: Redirects the user to Google's OAuth2 consent screen for authentication.
- **Response**:
  - **302 Redirect**: Redirects to Google's consent screen.

---

#### 4. Google OAuth2 Callback

**GET** `/auth/google/callback`

- **Description**: Handles the callback from Google OAuth2 and returns a JWT token upon successful authentication.
- **Response**:
  - **302 Redirect**: Redirects to the frontend URL with a JWT token on success or to an error page if authentication fails.

---

### User Object Structures in MongoDB

#### 1. Traditional User Object

When a user registers using email and password, the object stored in MongoDB looks like this:

```json
{
  "_id": { "$oid": "673283430bdb4206e3390e99" },
  "email": "user@example.com",
  "password": "$2a$10$VKRd799OZuydpV7MTLDAguUsNqhO3/J/MubxmMlyR5BrqEGzkFFfG",
  "username": "testuser",
  "__v": { "$numberInt": "0" }
}
```

- **_id**: Unique identifier for the user, automatically generated by MongoDB.
- **email**: User's email address (unique in the database).
- **password**: Hashed password using `bcrypt`.
- **username**: Chosen username for the user.
- **__v**: Version key used by Mongoose.

#### 2. Google OAuth2 User Object

When a user signs in with Google, the object stored in MongoDB looks like this:

```json
{
  "_id": { "$oid": "6732e1cd4d136dda773b8db0" },
  "email": "testuser@gmail.com",
  "username": "Test User",
  "googleId": "12345678908485858484",
  "__v": { "$numberInt": "0" }
}
```

- **_id**: Unique identifier for the user, automatically generated by MongoDB.
- **email**: Email address retrieved from Google.
- **username**: Display name from Google.
- **googleId**: Unique identifier from Google.
- **__v**: Version key used by Mongoose.

---

### Google OAuth2 Setup for Frontend Developers

1. **Register Your Application on Google Cloud**:

   - Go to [Google Cloud Console](https://console.cloud.google.com/).
   - Create a new project or select an existing project.
   - Navigate to **APIs & Services** > **Credentials**.
   - Click **Create Credentials** and select **OAuth client ID**.
   - Configure the OAuth consent screen and specify the required scopes.
   - Register your frontend URL (e.g., `http://localhost:5173`) as an authorized redirect URI.
2. **Frontend Requirements**:

   - **Client ID**: You will need the `client_id` from your Google Cloud credentials.
   - **Redirect URI**: Must match the URI registered in Google Cloud.
   - **Access Token Handling**: On successful authentication, the backend will redirect to your frontend with the JWT token. The frontend should parse the token from the URL and use it for subsequent API requests.
3. **Files Needed on the Frontend**:

   - **Google Client Script**: Include the Google OAuth2 client library if necessary.
   - **Environment Variables**: Store your `GOOGLE_CLIENT_ID` and any other sensitive data in a `.env` file.
   - **Token Handling**: Implement logic to extract and store the JWT token securely (e.g., in `localStorage` or `sessionStorage`).

---

### Strategies and Guards

1. **Local Strategy**:

   - **File**: `local.strategy.ts`
   - **Purpose**: Validates email and password using the `passport-local` strategy. Throws an `UnauthorizedException` if validation fails.
2. **JWT Strategy**:

   - **File**: `jwt.strategy.ts`
   - **Purpose**: Uses `passport-jwt` to extract and verify the JWT token from the `Authorization` header. It returns user details based on the token payload.
3. **JWT Auth Guard**:

   - **File**: `jwt-auth.guard.ts`
   - **Purpose**: Protects routes by enforcing JWT authentication.

---

### Security Considerations

1. **Password Management**: All passwords are hashed using `bcrypt` before storage.
2. **JWT Token Security**: Tokens are signed with a secret and include the user's ID and email. Tokens expire after 1 hour.
3. **OAuth2 Security**: Use HTTPS for secure communication and store tokens securely on the frontend.