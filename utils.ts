const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses son 0-indexados
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
};

const eventDate = new Date();
const formattedDate = formatDate(eventDate);
console.log(formattedDate); // Salida: YYYY/MM/DD

async function loadApiKey() {
    try {
        const response = await fetch('config.json');
        const config = await response.json();
        const apiKey = config.apiKey;
        console.log(apiKey); // Aquí puedes usar la API key
        // Llama a la API con la clave obtenida
    } catch (error) {
        console.error('Error al cargar la API key:', error);
    }
}