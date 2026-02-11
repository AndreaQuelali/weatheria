# Weatheria

## Descripción

Weatheria es una aplicación web que permite consultar el pronóstico del tiempo para diferentes ciudades del mundo. 
<img width="1335" height="629" alt="image" src="https://github.com/user-attachments/assets/a0c5612f-0d2b-40a0-bb3d-27e682ef9df4" />

---

## Tecnologías

* React
* TypeScript
* Tailwind CSS
* Vite
* Vitest

---

## Instrucciones de ejecución

Para ejecutar el proyecto en entorno local, primero debes clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
cd weatheria
```

Luego instala las dependencias:

```bash
npm install
```

Para iniciar el servidor en modo desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en:

http://localhost:5173


Para generar la versión de producción:

```bash
npm run build
```

Esto generará la carpeta dist, que contiene los archivos optimizados listos para deploy.

Para previsualizar la versión de producción:

```bash
npm run preview
```

---

## Estructura de carpetas

* `components/`: Componentes de UI. No contienen lógica de negocio compleja.
* `hooks/`: Hooks personalizados que encapsulan lógica reutilizable.
* `layout/`: Layouts de la aplicación.
* `services/`: Funciones responsables de consumir APIs externas.
* `test/`: Tests.
* `types/`: Tipos e interfaces de TypeScript compartidos en la aplicación.
* `utils/`: Funciones auxiliares puras (formateo, mapeos, helpers).

Cada carpeta tiene una única responsabilidad claramente definida.

---

## Convenciones de Código

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

### 2. Naming de variables y funciones

* Variables y funciones: **camelCase**

  * Ejemplo: `isLoading`, `fetchWeather`
* Booleanos deben leerse como preguntas

  * Ejemplo: `isLoading`, `hasError`
* Funciones asíncronas deben describir claramente la acción

  * Ejemplo: `getWeatherByCity`, `fetchForecast`

### 3. Commits

* Convención basada en Conventional Commits

Ejemplos:

* `chore: initialize project`
* `feat: add city search component`
* `fix: handle city not found error`

---

## Flujo de la aplicación

Cuando el usuario abre la aplicación, el hook personalizado useWeather verifica si existe una ciudad guardada en localStorage. Si existe, automáticamente realiza la consulta del clima para esa ciudad.

Cuando el usuario busca una ciudad:

1. Se consulta la API de geocoding de Open-Meteo para obtener las coordenadas (latitud y longitud).
2. Con esas coordenadas, se consulta la API de forecast para obtener:

   * Clima actual
   * Pronóstico diario
   * Códigos meteorológicos que son transformados en descripciones legibles mediante la función getWeatherDescription.

3. El estado global del clima se maneja a través del hook useWeather, que centraliza:

   * currentWeather
   * forecast
   * loading
   * error
   * searchCity

4. Los componentes visuales consumen este estado, manteniendo separación clara entre lógica y presentación.

---

## Tests

El proyecto utiliza:

* Vitest
* Testing Library
* jsdom

Los tests cubren principalmente el hook useWeather, verificando:

* Estado inicial correcto
* Flujo exitoso de búsqueda
* Manejo adecuado de errores

Para ejecutar los tests:

```bash
npm run test
```

El testing se enfoca en la lógica crítica de negocio, especialmente en el manejo de estados asincrónicos y control de errores.

---

## Decisiones técnicas

TailwindCSS fue seleccionado para mantener consistencia visual, rapidez en el desarrollo de UI y evitar CSS innecesario.

La lógica de negocio fue separada en:

* services → comunicación con APIs externas
* hooks → manejo de estado y orquestación
* types → definición de contratos de datos
* components/ui → componentes reutilizables

Esta separación mejora la escalabilidad y facilita testing.

El uso de un hook personalizado (useWeather) permite desacoplar la lógica de obtención de datos de la capa visual.

Se implementó persistencia en localStorage para mejorar experiencia de usuario.
