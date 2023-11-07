# Crown Shop - MERN Stack Web Application

Welcome to the Crown Shop project, a MERN (MongoDB, Express.js, React, Node.js) stack web application. This project is created and maintained by web10crown and offers a comprehensive e-commerce platform for buying and selling various products. Key features include Redux for state management, JWT for authentication, CryptoJS for encryption, MongoDB for data storage, Styled Components for styling, and Stripe Checkout for secure payment processing.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
5. [Usage](#usage)
6. [Folder Structure](#folder-structure)

## Introduction

The Crown Shop project is an e-commerce website designed to provide users with a seamless shopping experience. Key features include:

- **Redux State Management**: Efficient global state management using Redux.
- **User Authentication**: Secure user authentication using JWT (JSON Web Tokens).
- **Data Encryption**: Sensitive data is encrypted using CryptoJS.
- **Data Persistence**: MongoDB is used for data storage and persistence.
- **Styled Components**: Styled Components are employed for consistent and responsive styling.
- **Stripe Checkout**: Secure payment processing using Stripe Checkout.

## Features

- **User Registration and Login**: Users can create accounts and log in securely.
- **Product Listings**: A wide range of products are listed for users to browse and purchase.
- **Shopping Cart**: Users can add items to their cart and proceed to checkout.
- **Secure Payments**: Stripe Checkout ensures secure and convenient payment processing.
- **User Authentication**: Secure authentication and authorization using JWT.
- **Redux Integration**: Efficient global state management for enhanced user experience.
- **Data Encryption**: Sensitive data is encrypted using CryptoJS for enhanced security.
- **Data Persistence**: MongoDB stores and manages data for reliability and data integrity.

## Technology Stack

- **Frontend**: React
- **Backend**: Node.js and Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens) for user authentication.
- **Data Encryption**: CryptoJS for data encryption.
- **Styling**: Styled Components for consistent and responsive styling.
- **Payment Processing**: Stripe Checkout for secure payment processing.

## Getting Started

### Prerequisites

Before getting started, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/web10crown/crown-shop.git
   ```

2. Change your working directory to the project folder:

   ```bash
   cd crown-shop
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables for JWT, Stripe, and MongoDB connection (create a `.env` file with the necessary variables).

5. Start the development server:

   ```bash
   npm start
   ```

Your Crown Shop website should now be up and running. You can access it in your web browser.

## Usage

1. Open the website in your web browser.
2. Register for a new user account or log in with existing credentials.
3. Browse products, add them to your cart, and proceed to checkout.
4. Complete the purchase using Stripe's secure checkout process.

## Folder Structure

- `client`: Contains the React frontend.
- `server`: Contains the Node.js and Express.js backend.
- `models`: Defines the data models for MongoDB.
- `routes`: Defines the API routes.
- `controllers`: Contains the logic for the routes.


This README file provides an overview of your Crown Shop project, including its features, technology stack, setup instructions, and more. Customize the content to match your project's specific details and requirements.

