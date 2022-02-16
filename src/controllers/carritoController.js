
const carritoController = {
    index: (req, res) => {
        let productos = [];
        let producto = {"name": "Harry Potter", "price": 152};
        productos.push(producto);
        let producto2 = {"name": "Wolverine", "price": 1950};
        productos.push(producto2);
        res.render('carrito/carrito', {
            pageTitle: 'Carrito',
            carrito: productos
        });
    }
}

module.exports = carritoController;