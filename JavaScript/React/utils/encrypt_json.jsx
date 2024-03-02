import * as CryptoJs from 'crypto-js';

const encryptJSON = (data) => {
    if (!data) return null;
    const json = JSON.stringify(data);
    return CryptoJs.AES.encrypt(json, process.env.NEXT_PUBLIC_SECRET_KEY_JSON).toString();
};

const decryptJSON = (encryptedData) => {
    if (!encryptedData) return null;
    const bytes = CryptoJs.AES.decrypt(encryptedData, process.env.NEXT_PUBLIC_SECRET_KEY_JSON);
    const decryptedData = CryptoJs.enc.Utf8.stringify(bytes);
    if (!decryptedData) {
        localStorage.removeItem('authUser');
    } else {
        return JSON.parse(decryptedData);
    }
};

export { encryptJSON, decryptJSON }