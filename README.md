# RegLog
## Table of Contents

- [Installation](#installation)
- [Database Setup](#database-setup)
- [Configuration](#configuration)
- [Usage](#usage)
- [Notes](#notes)
- [License](#license)

## Installation

Clone the repository:
git clone https://github.com/your-username/your-repository.git
   
Install dependencies:
npm install
   
## Database Setup
I used phpMyAdmin MySQL as a database.

Create a MySQL database (default name: first).

Import the database schema from the schema.sql file.

## Configuration

Configure the database connection parameters in the db/connection.js file.
const connection = mysql.createConnection({

  host: '127.0.0.1',
  
  user: 'root',
  
  password: 'your-password',
  
  database: 'first'
});
## Running the Application
npm start

The application will be accessible at http://localhost:3000.

## Usage
Open a web browser and navigate to http://localhost:3000/register for registration.

After registration, go to http://localhost:3000/login for login.

Upon successful login, visit http://localhost:3000/welcome for access to the protected page.

Logout by visiting http://localhost:3000/logout.

## Notes
I had to remove the "node_modules" directory from the reg log folder, since there are 1000+ files there and it cannot be added to the github.
