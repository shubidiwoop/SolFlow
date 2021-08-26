export const userRegistration = async (userInput) => {
    const response = await fetch('', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(userInput)
    });
    const result = await response.result;
    return result;
}

export const vendorRegistration = async (vendorinput) => {
    const response = await fetch('', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(vendorinput)
    });
    const result = await response.result;
    return result;
}