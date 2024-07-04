import axios from "../config/axios";

const transactionApi = {};

transactionApi.broadcast = async (symbol, price, timestamp) => {
  const payload = {
    symbol,
    price,
    timestamp,
  };

  try {
    const response = await axios.post("/broadcast", payload);
    return response.data.tx_hash;
  } catch (error) {
    console.error("Error broadcasting transaction:", error);
    throw error;
  }
};

transactionApi.checkStatus = async (txHash) => {
  try {
    const response = await axios.get(`/check/${txHash}`);
    return response.data.tx_status;
  } catch (error) {
    console.error("Error checking transaction status:", error);
    throw error;
  }
};

export default transactionApi;
