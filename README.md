## Description

## Installation

```bash
$ npm install
```

## Running the app

```bash
# Only before development mode
$ npm prepare

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Parte 1:

Después de analizar detenidamente el caso de Makea y reflexionar sobre las áreas de mejora, he añadido diversos comentarios en el documento original. Estos servirán como base para una discusión exhaustiva y un análisis en profundidad con el equipo, lo que nos permitirá abordar las oportunidades de mejora de manera más profesional y sólida.

<!-- TODO añadir link al archivo con los comentarios -->

> Caso Makea: [doc](https://docs.google.com/document/d/1kJ1FqFYLpJUZKFp5RgBzKW1zFTRuKlBSph3Lx1N4ZHk/edit?usp=sharing)

## Parte 2: Las necesidades del negocio en forma de producto tecnológico

1. Descripción del problema: <br />
   El problema principal de MAKEA parece ser la falta de una <strong>_plataforma de comercio electrónico_</strong> y la dependencia de tiendas físicas, catálogos en papel y centros de llamadas para realizar pedidos. En la era digital actual, la ausencia de una tienda en línea fácil de navegar y accesible podría limitar su alcance y crecimiento potencial, además de generar inconvenientes y frustraciones para los clientes que prefieren comprar en línea. A pesar de su enfoque único y distintivo en la experiencia de compra en tiendas físicas, MAKEA podría beneficiarse de adaptarse a las expectativas del mercado moderno y ofrecer una experiencia de compra en línea más fluida y eficiente.

2. Solución propuesta:<br />

- Desarrollo de una plataforma de comercio electrónico: Crear un sitio web o mobile de comercio electrónico fácil de usar y accesible, que permita a los clientes navegar por el catálogo de productos, realizar compras y gestionar entregas desde la comodidad de sus hogares. Esto mejoraría la experiencia del cliente y expandiría el alcance de MAKEA a un público más amplio.

- Integración de herramientas de búsqueda y filtrado avanzadas: Implementar funciones de búsqueda y filtrado en el sitio web y en las aplicaciones móviles para facilitar a los clientes encontrar productos específicos rápidamente, lo que les permitirá acceder a sus productos deseados de manera más eficiente.

- Optimización de la experiencia de compra en línea: Ofrecer una experiencia de compra en línea personalizada mediante el uso de algoritmos de recomendación basados en el historial de compras y preferencias de los clientes. Esto facilitaría la búsqueda de productos y mejoraría la satisfacción del cliente.

- Mejora de la logística y distribución (opcional): Establecer una red de distribución y logística eficiente para garantizar entregas rápidas y precisas a los clientes que realicen compras en línea. Esto mejoraría la satisfacción del cliente y fortalecería la confianza en el servicio de comercio electrónico de MAKEA.

3. Diagramas: [Diagrama](https://drive.google.com/file/d/1q671JquVczyDDxHj1dm24PdivlY-x_Z1/view?usp=sharing)

4. Pseudocódigo:

```
// Front-end (React)

// Componente Producto
- Mostrar información del producto (nombre, descripción, precio, imagen)
- Botón para agregar el producto al carrito

// Componente Carrito
- Listar productos agregados al carrito
- Mostrar cantidad y precio total
- Botón para confirmar pedido

// Componente ConfirmarPedido
- Solicitar información de envío (nombre, dirección, teléfono)
- Enviar información del pedido al back-end

// Back-end (Nestjs - Prisma - MongoDB)

// Modelo Producto
- Definir atributos del producto (ID, nombre, descripción, precio, imagen, categoría)

// Modelo Pedido
- Definir atributos del pedido (ID, ID del cliente, productos, cantidades, información de envío, estado)

// Rutas de API

// Obtener lista de productos
GET /api/productos
- Devolver una lista de productos disponibles

// Crear un nuevo pedido
POST /api/pedidos
- Recibir información del pedido desde el front-end
- Guardar el pedido en la base de datos
- Devolver una confirmación al cliente

// --------------------------------------------
// Ejemplo de flujo de la aplicación
// --------------------------------------------

1. El cliente visita la tienda en línea y ve una lista de productos disponibles.
2. El cliente agrega productos al carrito de compras.
3. Cuando el cliente está listo para hacer el pedido, hace clic en el botón "Confirmar pedido".
4. Se solicita al cliente que proporcione información de envío.
5. El cliente envía la información del pedido, incluida la información de envío, al back-end.
6. El back-end guarda el pedido en la base de datos y envía una confirmación al cliente.
```

6. Pasos de implementación: <br />
  * Diseñar la interfaz de usuario
  * Definir estructura de datos que se esperan usar. Ejp: (producto, pedidos)
  * Crear modelos para la base de datos
  * Definir como se relacionaran 
  * Empezar API 
  * Empezar la maquetacion de la interfaz con React Native
7. Pros y contras: <br />
  - Pros 
    - Escalable
    - facil de implementar
    - rapido de construir
    - Usara la misma infrastructura existente para los pedidos por catalogo
  - Contras
    - Necesitara mantenimiento constante
    - habra que pagar por servicios de bases de datos
