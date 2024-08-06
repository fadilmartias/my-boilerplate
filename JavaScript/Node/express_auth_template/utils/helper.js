export function generateRandomId(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function generateInvoiceNumber() {
    const staticPart = "01";
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = now.getFullYear()
    const datePart = `${day}${month}${year}`;
    const customNumber = generateCustomNumber(10);
    return `INV/${staticPart}/${datePart}${customNumber}`;
}

export function generateRandomNumber(digitCount) {
    if (digitCount <= 0) {
        throw new Error("Jumlah digit harus lebih besar dari 0");
    }

    var randomNumber = '';
    for (var i = 0; i < digitCount; i++) {
        randomNumber += Math.floor(Math.random() * 10);
    }
    return randomNumber;
}
