# README

## Prerequisites
- Node.js installed on your system
- A Git client to clone the repository

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository_url>
   cd <repository_name>
   ```

2. **Update `package.json` in `main_app`**
   - Navigate to the `main_app` folder.
   - Open the `package.json` file.
   - Update the IP address and port in the `dev` script as needed.

3. **Install Dependencies and Start the Backend**
   - Navigate to the `backend` folder:
     ```bash
     cd backend
     ```
   - Install dependencies (use `--force` if needed):
     ```bash
     npm install --force
     ```
   - Start the backend server:
     ```bash
     npm run dev
     ```

4. **Install Dependencies and Start the Frontend**
   - Navigate to the `main_app` folder:
     ```bash
     cd ../main_app
     ```
   - Install dependencies (use `--force` if needed):
     ```bash
     npm install --force
     ```
   - Start the frontend server:
     ```bash
     npm run dev
     ```

5. **Access the Application**
   - Open a browser and navigate to the IP address and port specified in the `main_app/package.json` file.

---

### Notes
- Ensure the IP address and port in the `main_app` dev script align with your system's network setup.
- Use `npm install --force` only if there are dependency conflicts.
