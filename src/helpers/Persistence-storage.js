export const setItem = (key, value) => {
    try {
        localStorage.setItem(key, value);
    } catch (error) {
        console.log('Error saving data');
    }
};

export const getItem = (key) => {
    try {
        return localStorage.getItem(key);
    } catch(error) {
        console.log('Error getting token');
    }
}

export const removeItem = (key) => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.log('Error remove item');
    }
}