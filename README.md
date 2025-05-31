# Blockchain-Based E-Voting System

A secure, blockchain-powered online voting platform inspired by the Finnish voting context, built with Node.js, Solidity, and Ganache. This project demonstrates transparent, tamper-resistant voting using Ethereum smart contracts.

## Features

- User ID and OTP-based voter verification (OTP bypassed for demo)
- Modern, responsive voting interface with Materialize CSS
- Voting records stored immutably on a private blockchain (Ganache)
- Candidate and party management via smart contract
- Simple deployment and test environment


## Demo

See the demo video added with the repo

## Quick Start

1. **Clone the repository**
    ```bash
    git clone https://github.com/HarisMashood/blockchain_vote.git
    cd blockchain_vote
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Start Ganache (local blockchain)**
    ```bash
    ganache-cli
    ```

4. **Deploy the smart contract**
    - See `Voting.sol` and follow instructions in the project report for deploying using Node/Web3.js REPL.

5. **Start the server**
    ```bash
    node index.js
    ```

6. **Open in your browser**
    - Go to `http://localhost:8080` (or as per your `index.js` port).

7. **Login credentials for testing**
    - **ID:** `987654321098`
    - **Phone (simulated):** `8888888888`
    - **OTP:** Any code (OTP is bypassed in demo setup)

## Technologies Used

- Node.js & Express.js
- Solidity (Voting Smart Contract)
- Ganache CLI (private Ethereum blockchain)
- Web3.js (blockchain interaction)
- Materialize CSS & jQuery (frontend)

## Project Structure

- `index.js` - Backend server
- `Voting.sol` - Smart contract
- `/ui` - Frontend HTML, CSS, JS
- `/js` - App JavaScript files
- `package.json` - Dependencies
