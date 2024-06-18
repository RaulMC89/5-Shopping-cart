# Tecnologias usadas
- Vite: Servidor de desarrollo local
- BootsTrap: es un framework que permite a los desarrolladores web construir páginas web responsives de una forma más rápida y sencilla.
- React: biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.

## Primer commit creacion del primer componente principal CartApp
- He credo el primer componente con 6 cartas de bootsTrap en estatico el la pantalla principal.

## Segundo commit Creamos Tabla de carro de compras
-Hemos creado una tabla estatica por ahora del carro del compras.

## Tercer commit data, services, map para columna
-Hemos creado una carpeta para alojar o simular la data, y otra carpeta par los servicios que nos proveera de los datos, hacemos un map en el componente principar para crear uns coluna por cada producto, ya hago uso del useEffect para que solo se haga una unica peticion al services y useState para controlar el estado de el array de productos.

## Desacoplamiento componente ProductView y CartView
Para poder reutilizar codigo y que no se vea el componente principal sobre cargado y desacoplado el componente ProdcutView que es donde se encuentran todos los productos que tenemos para comprar y CartView es un carro de compras donde se añadiran los productos ha comprar, todo ello para la mejor reutilizacion del codigo.

## Intalacion de la dependencia propTypes y descoplamiento de ProductsItem
Para la validacion de los props que se pasan por una expresion lambda instalamos la dependencia PropTypes, para mejorar la sobre carga de codigo del componente principal desacoplamos en un componente aparte ProductItem es un carta de un productos, para poder reutilizar el codigo lo hago un componente aparte.
