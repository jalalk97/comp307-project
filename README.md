# COMP 307 Project - Booking App

## Instructions 

### Requirements

Make sure you have `node` and `npm` installed.

### Running the backend server

#### On Linux (and MacOS and WSL on Windows probably) (***\*\*\* Updated \*\*\****)

1. If not done already, run `git clone https://github.com/jalalk97/comp307-project`
2. `cd comp307-project/backend`
3. `npm install`
4.
    (***New***) Run this command to create a file called `.env` that contains environment variables used by the backend and the database.
    ```
    cat <<EOF > .env
    PORT=5000
    MONGODB_URI=mongodb+srv://admin:XjLT6K5xj7HVw318@cluster0.ud4jx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    JWT_SECRET=b48636224ec98905f2d932a8196807792ab4a12d114af3e227d830a64d658acd27fea7745d25638d9dc6b0a1fc3270c5d2e9b9894a871777cf957be1e6f2e497
    EOF
    ```
5. `npm start`
6. The server should be running on http://localhost:5000

#### On Windows

I don't know, but it should be similar.

### Running the frontend development server

#### On Linux

1. `cd /path/to/comp307-project`
2. `cd frontend`
3. `npm install`
4. `npm run dev`
5. The development server should be running http://localhost:3000

#### On Windows
