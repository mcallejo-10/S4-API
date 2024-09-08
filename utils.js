"use strict";
const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses son 0-indexados
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
};
const eventDate = new Date();
const formattedDate = formatDate(eventDate);
console.log(formattedDate); // Salida: YYYY/MM/DD
