"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
};
const eventDate = new Date();
const formattedDate = formatDate(eventDate);
function getLocation() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const lat = position.coords.latitude.toFixed(6);
                    const lon = position.coords.longitude.toFixed(6);
                    resolve({ lat, lon });
                }, (error) => {
                    reject(new Error("Error getting geolocation " + error.message));
                });
            }
            else {
                reject(new Error("Geolocation is not supported in this browser"));
            }
        });
    });
}
const apiKey = 'Yr8iuFFH0o3xKYjrmkYCYaunCVBdp7k5nIuNiITj';
const blobs = ['blob1', 'blob2', 'blob3', 'blob4'];
function changeBlob() {
    const randomBlob = blobs[Math.floor(Math.random() * blobs.length)];
    blobs.forEach(blob => blobDiv === null || blobDiv === void 0 ? void 0 : blobDiv.classList.remove(blob));
    blobDiv === null || blobDiv === void 0 ? void 0 : blobDiv.classList.add(randomBlob);
}
