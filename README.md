# Authentication Frontend

This project provides a simple login portal frontend built using React and React Router. It includes routes for signing up, logging in, verifying OTP (One-Time Password), and displaying a welcome message.

## Routes

- `/signup`: This route allows users to create a new account by providing necessary details.
- `/login`: Users can log in using their credentials through this route.
- `/otp`: After successful login or signup, users are directed to this route for OTP verification.
- `/welcome`: Upon successful authentication, users are greeted with a welcome message.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: A library for routing in React applications, allowing for navigation between different components.
- **React Toastify**: A notification library for React applications, used for displaying toast messages.

## Scripts

- `dev`: Start the development server using Vite.
- `build`: Build the project for production using TypeScript and Vite.
- `lint`: Lint the project using ESLint.
- `preview`: Preview the production build locally.

## How to Run

To run the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/ota0912/auth-fe.git
   ```

2. Navigate to the project directory:

   ```bash
   cd auth-fe
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   This will start the development server using Vite.

5. Access the application in your browser at logged port

6. Navigate through the different routes as described above.

7. For production build:

   ```bash
   npm run build
   ```

   This will create a production-ready build of the project.

8. To preview the production build locally:

   ```bash
   npm run preview
   ```

   This will serve the production build locally for previewing.

