# Weatheria

## Descripción

Weatheria es una aplicación web que permite consultar el pronóstico del tiempo para diferentes ciudades del mundo. 

## Tecnologías

* React
* TypeScript
* Tailwind CSS
* Vite
* Vitest

## Comandos

* `npm install`: Instala las dependencias.
* `npm run dev`: Inicia el servidor de desarrollo.
* `npm run build`: Compila el proyecto.
* `npm run test`: Ejecuta los tests.

## Estructura de carpetas

* `components/`: Componentes de UI. No contienen lógica de negocio compleja.
* `hooks/`: Hooks personalizados que encapsulan lógica reutilizable.
* `layout/`: Layouts de la aplicación.
* `pages/`: Páginas de la aplicación.
* `services/`: Funciones responsables de consumir APIs externas.
* `types/`: Tipos e interfaces de TypeScript compartidos en la aplicación.
* `utils/`: Funciones auxiliares puras (formateo, mapeos, helpers).

Cada carpeta tiene una única responsabilidad claramente definida.

---

##  Convenciones de Código

### 1. Naming de archivos y carpetas

* Carpetas: **kebab-case** (ej. `layout`, `weather-card`)
* Componentes React: **PascalCase**

  * Ejemplo: `SearchBar.tsx`, `ForecastCard.tsx`
* Hooks: prefijo `use` en **camelCase**

  * Ejemplo: `useWeather.ts`, `useGeocoding.ts`
* Servicios: **camelCase** y sufijo `Service`

  * Ejemplo: `weatherService.ts`
* Tipos: **camelCase** para archivos, **PascalCase** para exports

  * Ejemplo: `weather.ts` → `Weather`, `WeatherResponse`

---

### 2. Naming de variables y funciones

* Variables y funciones: **camelCase**

  * Ejemplo: `isLoading`, `fetchWeather`
* Booleanos deben leerse como preguntas

  * Ejemplo: `isLoading`, `hasError`
* Funciones asíncronas deben describir claramente la acción

  * Ejemplo: `getWeatherByCity`, `fetchForecast`

---

### 3. Commits

* Convención basada en Conventional Commits

Ejemplos:

* `chore: initialize project`
* `feat: add city search component`
* `fix: handle city not found error`

---

