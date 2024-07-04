# transactionApi Module

The `transactionApi` module provides methods to interact with a transaction broadcasting and status-checking API. It abstracts away the networking details and provides a clean interface for integrating transaction-related functionalities into your application.

## Installation

Ensure you have Axios installed in your project:

```bash
npm install axios
```

## Usage

Importing the Module

```JavaScript
import transactionApi from 'path/to/transactionApi';
```

\*\* Adjust the path as per your project structure

## Methods

### `broadcast(symbol, price, timestamp)`

Broadcasts a transaction with the specified symbol, price, and timestamp.

```JavaScript
const symbol = 'BTC';
const price = 50000;
const timestamp = Date.now();

try {
  const txHash = await transactionApi.broadcast(symbol, price, timestamp);
  console.log('Transaction broadcasted successfully. Transaction Hash:', txHash);
} catch (error) {
  console.error('Error broadcasting transaction:', error);
}
```

### `checkStatus(txHash)`

Retrieves the status of a transaction identified by `txHash`.

```JavaScript
const txHash = 'e97ae379d666eed7576bf285c451baf9f0edba93ce718bf15b06c8a85d07b8d1';

try {
  const status = await transactionApi.checkStatus(txHash);
  console.log('Transaction Status:', status);
} catch (error) {
  console.error('Error checking transaction status:', error);
}

```

## Handling Transaction Status

- **CONFIRMED**: Once the transaction is confirmed, proceed with additional steps or actions in your application that depend on the successful completion of the transaction.

- **FAILED**: If the transaction fails, handle the situation gracefully. This might involve retrying the transaction automatically (if feasible) or informing the user or administrators about the failure so they can take appropriate action.

- **PENDING**: While the transaction is waiting to be processed, implement a mechanism to regularly check its status. Provide feedback to users indicating that the transaction is still being processed and update them when it either succeeds or fails.

- **DNE(DO NOT EXISTED)**: If the transaction does not exist (due to an incorrect or invalid transaction hash), handle this by verifying the validity of the transaction hash. Prompt users to retry with a correct transaction hash or take appropriate corrective action based on your application's logic.

## Example Script Implementing `transactionApi`

Here’s a simple example script demonstrating how to use `transactionApi`:

```JavaScript
import transactionApi from 'path/to/transactionApi'; // Adjust the path as per your project structure

async function runTransaction() {
  const symbol = 'BTC';
  const price = 50000;
  const timestamp = Date.now();

  try {
    const txHash = await transactionApi.broadcast(symbol, price, timestamp);
    console.log('Transaction broadcasted successfully. Transaction Hash:', txHash);

    const status = await transactionApi.checkStatus(txHash);
    console.log('Transaction Status:', status);

    switch (status) {
      case 'CONFIRMED':
        console.log('Transaction confirmed. Proceed with further actions.');
        break;
      case 'FAILED':
        console.log('Transaction failed. Handle the failure gracefully.');
        break;
      case 'PENDING':
        console.log('Transaction pending. Implement logic to check status.');
        break;
      case 'DNE':
        console.log('Transaction does not exist. Check txHash validity.');
        break;
      default:
        console.log('Unknown status received:', status);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

runTransaction();
```
