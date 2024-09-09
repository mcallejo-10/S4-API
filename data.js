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
const estatDelCel = [
    {
        codi: 1,
        nom: "Cel ser&egrave;",
        descripcio: "",
        categoria: "nuvolositat",
        icona: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/1.svg",
        icona_nit: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/1n.svg"
    },
    {
        codi: 2,
        nom: "N&uacute;vols alts",
        descripcio: "",
        categoria: "nuvolositat",
        icona: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/2.svg",
        icona_nit: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/2n.svg"
    },
    {
        codi: 3,
        nom: "Entre poc i mig ennuvolat",
        descripcio: "",
        categoria: "nuvolositat",
        icona: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/3.svg",
        icona_nit: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/3n.svg"
    },
    {
        codi: 4,
        nom: "Molt ennuvolat",
        descripcio: "",
        categoria: "nuvolositat",
        icona: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/4.svg",
        icona_nit: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/4n.svg"
    },
    {
        codi: 5,
        nom: "N&uacute;vols mitjans amb plugims",
        descripcio: "",
        categoria: "precipitació: pluja",
        icona: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/5.svg",
        icona_nit: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/5n.svg"
    },
    {
        codi: 6,
        nom: "Pluja",
        descripcio: "",
        categoria: "precipitació: pluja",
        icona: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/6.svg",
        icona_nit: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/6n.svg"
    },
    {
        codi: 7,
        nom: "X&agrave;fec",
        descripcio: "",
        categoria: "precipitació: pluja",
        icona: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/7.svg",
        icona_nit: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/7n.svg"
    },
    {
        codi: 8,
        nom: "Tempesta",
        descripcio: "",
        categoria: "precipitació: pluja",
        icona: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/8.svg",
        icona_nit: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/8n.svg"
    },
    {
        codi: 9,
        nom: "Tempesta amb calamarsa",
        descripcio: "",
        categoria: "precipitació: calamarsa o pedra",
        icona: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/9.svg",
        icona_nit: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/9n.svg"
    },
    {
        codi: 10,
        nom: "Nevada",
        descripcio: "",
        categoria: "precipitació: neu",
        icona: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/10.svg",
        icona_nit: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/10n.svg"
    },
    {
        codi: 11,
        nom: "Boira",
        descripcio: "",
        categoria: "nuvolositat",
        icona: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/11.svg",
        icona_nit: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/11n.svg"
    },
    {
        codi: 12,
        nom: "Boirina",
        descripcio: "",
        categoria: "nuvolositat",
        icona: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/12.svg",
        icona_nit: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/12n.svg"
    },
    {
        codi: 13,
        nom: "X&agrave;fec de neu",
        descripcio: "",
        categoria: "precipitació: neu",
        icona: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/13.svg",
        icona_nit: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/13n.svg"
    },
    {
        codi: 20,
        nom: "Entre mig i molt ennuvolat",
        descripcio: "",
        categoria: "nuvolositat",
        icona: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/20.svg",
        icona_nit: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/20n.svg"
    },
    {
        codi: 21,
        nom: "Ennuvolat",
        descripcio: "",
        categoria: "nuvolositat",
        icona: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/21.svg",
        icona_nit: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/21n.svg"
    },
    {
        codi: 22,
        nom: "Calitja",
        descripcio: "",
        categoria: "nuvolositat",
        icona: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/22.svg",
        icona_nit: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/22n.svg"
    },
    {
        codi: 23,
        nom: "Mig ennuvolat amb ruixats",
        descripcio: "",
        categoria: "precipitació: pluja",
        icona: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/23.svg",
        icona_nit: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/23n.svg"
    },
    {
        codi: 24,
        nom: "X&agrave;fec amb tempesta",
        descripcio: "",
        categoria: "precipitació: pluja",
        icona: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/24.svg",
        icona_nit: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/24n.svg"
    },
    {
        codi: 25,
        nom: "X&agrave;fec amb tempesta i calamarsa",
        descripcio: "",
        categoria: "precipitació: calamarsa o pedra",
        icona: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/25.svg",
        icona_nit: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/25n.svg"
    },
    {
        codi: 26,
        nom: "Ruixat de neu",
        descripcio: "",
        categoria: "precipitació: neu",
        icona: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/26.svg",
        icona_nit: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/26n.svg"
    },
    {
        codi: 27,
        nom: "Neu feble",
        descripcio: "",
        categoria: "precipitació: neu",
        icona: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/27.svg",
        icona_nit: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/27n.svg"
    },
    {
        codi: 28,
        nom: "X&agrave;fec de neu",
        descripcio: "",
        categoria: "precipitació: neu",
        icona: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/28.svg",
        icona_nit: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/28n.svg"
    },
    {
        codi: 29,
        nom: "X&agrave;fec d'aiguaneu",
        descripcio: "",
        categoria: "precipitació: aiguaneu",
        icona: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/29.svg",
        icona_nit: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/29n.svg"
    },
    {
        codi: 30,
        nom: "Aiguaneu",
        descripcio: "",
        categoria: "precipitació: aiguaneu",
        icona: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/30.svg",
        icona_nit: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/30n.svg"
    },
    {
        codi: 31,
        nom: "Molt ennuvolat amb ruixats",
        descripcio: "",
        categoria: "precipitació: pluja",
        icona: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/31.svg",
        icona_nit: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/31n.svg"
    },
    {
        codi: 32,
        nom: "Ennuvolat amb plugims",
        descripcio: "",
        categoria: "precipitació: pluja",
        icona: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/32.svg",
        icona_nit: "http://static-m.meteo.cat/assets-w3/images/meteors/estatcel/32n.svg"
    }
];
function loadApiKey() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('package.json');
            const config = yield response.json();
            return config.apiKey;
            // Llama a la API con la clave obtenida
        }
        catch (error) {
            console.error('Error al cargar la API key:', error);
        }
    });
}
var apiKey = loadApiKey();
console.log(apiKey); // Aquí puedes usar la API key
