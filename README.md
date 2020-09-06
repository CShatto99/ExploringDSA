# Exploring DS&A

Exploring DS&A is a static React website that showcases and teaches projects centered around Data Structures & Algorithms. All of the projects were coded in Java and were assigned by the [Data Structures & Algorithms in Java, Second Edition](http://web.fi.uba.ar/~jvillca/hd/public/books/Data_Structures_and_Algorithms_in_Java_2nd_Edition.pdf) by Robert Lafore textbook.

## Table of Contents

- [Tech Stack](#tech-stack)
  - [Front End](#front-end)
  - [Back End](#back-end)
- [Local Setup](#local-setup)
- [Demo](#demo)

## Tech Stack

#### Front End
* React
* react-router-dom
* prismjs
* axios
* reactstrap

#### Back End
* Node
* express
* dotenv
* nodemailer
* concurrently
* nodemon

## Local Setup
1. Add your email and password of your Gmail account to the `.env` file.
2. Run the following commands
    ```
    git clone https://github.com/CShatto99/ExploringDSA.git
    
    cd ExploringDSA
    
    npm run installDep
    ```
3. Servers
   ```
    Option 1 (runs backend and frontend servers):
    
    npm run dev
    
    Option 2 (for running both the servers individually):
    
    npm run server (runs backend server only)
    
    npm run client (runs frontend server only)
    ```

## DEMO

#### LINK - [ExploringDSA.com](https://exploringdsa.herokuapp.com)

