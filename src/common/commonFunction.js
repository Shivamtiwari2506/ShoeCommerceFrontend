import CryptoJS from "crypto-js";

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;

export const encryptData = (data) => {
   // Convert object to JSON and encrypt
   const ciphertext = CryptoJS.AES.encrypt(
     JSON.stringify(data),
     SECRET_KEY
   ).toString();
   return ciphertext;
 };

 export const decryptData = (ciphertext) => {
   try {
     const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
     const decrypted = bytes.toString(CryptoJS.enc.Utf8);
     return JSON.parse(decrypted);
   } catch (error) {
     console.error("Decryption failed:", error);
     return null;
   }
 };