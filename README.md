# Listado Básico de Estudiantes

Front de un proyecto a modo de test. La app permite listar estudiantes y ver sus detalles como nombre, dirección, descripción, email, etc. También permite editar y eliminar estudiantes(permanentemente o temporal), así como también inscrirlos a asignaturas. Estas últimas también pueden ser creadas, eliminadas y editadas. La inscripción a asignaturas aún no se almacena en la base de datos, pero esta se guarda en el localStorage del navegador.

Este proyecto complementa la API desarrollada con el mismo nombre. [Ir a la API](https://github.com/fgamester/students-api)

## Tecnologías Utilizadas

- **VueJS:** Framework de JavaScript para construir interfaces de usuario.
- **TypeScript:** Lenguaje de programación que es un superconjunto de JavaScript, que añade tipado estático.
- **Vue Router:** Librería para manejar rutas en aplicaciones Vue.js.

## Guías

### Obtener el proyecto

Para obtener el proyecto, puedes clonar el repositorio desde GitHub:

```bash
git clone https://github.com/fgamester/student-front.git
```

Luego instalas las dependencias:

```bash
npm install
```

Como mencioné anteriormente, este proyecto complementa la API desarrollada con el mismo nombre. Por lo tanto, es necesario tenerla corriendo para que la app funcione correctamente.

Teniendo esto en cuenta, deberás configurar la URL de la API en el archivo `src/api/axios.ts`. Por defecto, la URL está configurada para apuntar a `http://localhost:3000`, pero puedes cambiarla a la URL de tu API.

```typescript
import axios from "axios";

const axiosApi = axios.create({
  baseURL: "http://localhost:3000", // Cambia esto por la URL de tu API
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosApi;
```

Ejecutamos el proyecto con el siguiente comando:

```bash
npm run dev
```
Esto abrirá la aplicación en tu navegador en `http://localhost:5173`.

>En caso de que el puerto se encuentre en uso, el servicio intentará abrirse en el siguiente puerto disponible como el `5174` y así hasta encontrar uno disponible.

### Ejecutar contenedor de Docker

Primero deberemos realizar un pull de la imagen de Docker:
```bash
docker pull fgamester/students-front
```

Luego ejecutamos el contenedor:
```bash
docker run --name <nombre-container> -d -p <5173>:5173 fgamester/students-front
```

#### ¿Que puedes cambiar aquí?
- `<nombre-container>`: Nombre del contenedor de la API. Puedes ponerle el nombre que desees.
- `<5173>`: Puerto en el que se ejecutará el contenedor. Puedes cambiarlo por el puerto que desees.

Adicionalmente puedes especificar una variable de entorno para la conexión a la API:
```bash
docker run --name <nombre-container> -d -p <5173>:5173 -e VITE_API_BASE_URL=http://localhost:3000 fgamester/students-front
```

Esto es opcional, ya que por defecto la API se conecta a `http://localhost:3000`.

Si todo ha ido bien, la terminal responderá con el ID del contenedor y podrás acceder a la aplicación en `http://localhost:5173` o el puerto que hayas especificado.

#### Comandos adicionales

Para detener el contenedor puedes usar el siguiente comando:
```bash
docker stop <nombre-container>
```
Para iniciar el contenedor nuevamente puedes usar el siguiente comando:
```bash
docker start <nombre-container>
```
Para eliminar el contenedor puedes usar el siguiente comando:
```bash
docker rm <nombre-container>
```
Para eliminar la imagen puedes usar el siguiente comando:
```bash
docker rmi <nombre-imagen>
```