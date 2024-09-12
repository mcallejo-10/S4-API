const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
}


const eventDate = new Date();
const formattedDate = formatDate(eventDate);

async function getLocation(): Promise<{ lat: string, lon: string }> {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude.toFixed(6);
                    const lon = position.coords.longitude.toFixed(6);
                    resolve({ lat, lon });
                },
                (error) => {
                    reject(new Error("Error getting geolocation " + error.message));
                }
            );
        } else {
            reject(new Error("Geolocation is not supported in this browser"));
        }
    });
}

const apiKey: string = 'Yr8iuFFH0o3xKYjrmkYCYaunCVBdp7k5nIuNiITj';
const blobs = ['blob1', 'blob2', 'blob3', 'blob4'];

function changeBlob() {
    const randomBlob = blobs[Math.floor(Math.random() * blobs.length)];
    blobs.forEach(blob => blobDiv?.classList.remove(blob));
    blobDiv?.classList.add(randomBlob);
}


