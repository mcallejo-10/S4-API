# S4-API:  Web de Chistes con TypeScript y API Rest

## Descripción del proyecto

Este proyecto es una web de chistes desarrollada con **TypeScript**, que consume datos de una **API Rest** gratuita para obtener chistes aleatorios. El objetivo es mostrar chistes a los trabajadores para mejorar su estado de ánimo antes de comenzar la jornada laboral.

Esta web será utilizada por una empresa para medir el impacto del humor en la productividad en el trabajo.

Además, se integrará una API de información meteorológica para mostrar el tiempo actual.


## Funcionalidades principales

1. **Mostrar chistes**: 
   - La web obtiene y muestra un chiste aleatorio al cargar la página.
   - Un botón permite obtener un nuevo chiste y reemplazar el anterior.

2. **Valoración de chistes**:
   - El usuario puede valorar cada chiste con una puntuación del 1 al 3.
   - Se actualiza un informe (`reportAcudits`) con los chistes y su valoración.

3. **Historial de chistes**:
   - Cada chiste mostrado se almacena con su valoración y fecha.
   - El historial se muestra en la consola para hacer un seguimiento del uso.

4. **Información meteorológica**:
   - La web muestra la información meteorológica actual al iniciar.
   - Los datos se consumen de una API meteorológica y se muestran con iconos visuales para el usuario.

5. **Alternancia de APIs de chistes**:
   - Se alternarán chistes de diversas fuentes (**Dad Jokes API** y **Chuck Norris Jokes API**) para hacer la web más dinámica.

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/mcallejo-10/S4-API.git
   ```

2. **Instalar las dependencias**:
   Asegúrate de tener **Node.js** instalado. Luego ejecuta:
   ```bash
   npm install
   ```

3. **Compilar TypeScript**:
   Compila el proyecto de TypeScript a JavaScript con:
   ```bash
   npm run build
   ```

4. **Ejecutar el proyecto**:
   Puedes ejecutar el proyecto en un servidor local con:
   ```bash
   npm start
   ```


   
## Tecnologías utilizadas

- **TypeScript**
- **JavaScript (ES6)** para la lógica y manipulación de datos.
- **Fetch API** para consumir datos de la API de chistes.
- **HTML5/CSS3** para la maquetación.
- **SASS** para estilos dinámicos.
- **APIs de chistes**:
  - [Dad Jokes API](https://icanhazdadjoke.com/)
  - [Chuck Norris Jokes API](https://api.chucknorris.io/)
- **API meteorológica**: OpenWeatherMap y Meteocat API.
- **Postman** para testear las APIs antes de ponerlas en el código.



## Instrucciones de uso

1. Al cargar la página, se mostrará un chiste aleatorio junto con la información meteorológica actual.
2. El usuario puede ver un nuevo chiste haciendo clic en el botón "Siguiente chiste".
3. Se pueden dar puntuaciones a los chistes (1-3) haciendo clic en los botones de valoración.
4. Las valoraciones se almacenan en el reporte de seguimiento que se muestra en la consola.



![Captura de pantalla 2024-09-12 a las 16 08 34](https://github.com/user-attachments/assets/90a55860-c387-4735-9ad4-88bf9bc0ccd5)




Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.
