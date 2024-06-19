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

## Funcionalidad boton agregar al carro producto y boton eliminar producto del carro
- Funcion onAddProductCart: He implementado la funcion onClick en los dos botones en el boton agregar de cada producto del catalogo utilizando en la funcion agregar al carro "onAddProductCart" que se encuentra en el componente principal CartApp y la paso por parametro en las props, esta funcion recibe por por las props los atributos del objeto producto que son "id, name, description, price" para poder añadir al array de productos del carro y en la funcion onAddProductCart crea un objeto de tipo productIitemCart para añadirlo al array de prodcutos del carro.

- Funcion onDeletedProductCart: Esta funcion que recibe por props un id para despues en el array de productsCart le aplicamos el metodo filte que devolvera otro array nuevo con el objeto eliminado y actualizamos con el metodo del useState setProductsCart, se pasa a traves de props handler al componente CartView que es en este donde pasa por props a la fincion onDeletePRoductsCart mediante la funcion onClick del boton eliminar del objeto productItemCart. 
