const db = require('../database/models');

const APIController = {
    users: (req, res) => {
        db.User.findAll()
            .then(users => {
                const data = {}
                data.count = users.length;
                const newUsers = users.map(user => {
                    const newUser = {}
                    newUser.id = user.idUser;
                    newUser.name = user.user_name;
                    newUser.email = user.user_email;
                    newUser.detail = `/users/detail/${user.idUser}`;
                    return newUser;
                })
                data.users = [...newUsers];
                JSON.stringify(data);
                res.send(data);
            })
            .catch(err => {
                res.send(err);
                throw err;
            });
    },
    usersDetail: (req, res) => {
        db.User.findByPk(req.params.id)
            .then(user => {
                if (user) {
                    delete user.dataValues.password;
                    delete user.dataValues.user_type;
                    res.send(user);
                    return;
                }
                res.send({ msg: 'Usuario no encontrado', isData: false })
            })
            .catch(err => {
                res.send(err);
                throw err;
            });
    },
    products: (req, res) => {
        db.Product.findAll({
                include: [{ association: "editorials" }, { association: "categories" }],
            })
            .then(products => {
                const data = {}
                data.count = products.length;
                data.countByCategory = [
                    {category:'Coleccionable',count:products.filter(product => product.categories.category_name == 'Coleccionable').length},
                    {category:'Libros', count:products.filter(product => product.categories.category_name == 'Libros').length},
                   {category:'Comics', count:products.filter(product => product.categories.category_name == 'Cómics').length},
                    {category:'Escritorio', count:products.filter(product => product.categories.category_name == 'Escritorio').length},
                    {category:'Ropa',count:products.filter(product => product.categories.category_name == 'Ropa').length},
                    {category:'Coleccionable',count: products.filter(product => product.categories.category_name == 'Coleccionable').length},
                   {category:'Otros',count: products.filter(product => product.categories.category_name == 'Otros').length}
                ]
                data.countByWire = {
                    Marvel: products.filter(product => product.editorials.editorial_name == 'Marvel').length,
                    DC: products.filter(product => product.editorials.editorial_name == 'DC').length,
                    Harry_Potter: products.filter(product => product.editorials.editorial_name == 'Harry Potter').length,
                    Star_Wars: products.filter(product => product.editorials.editorial_name == 'Star Wars').length,
                    Simpsons: products.filter(product => product.editorials.editorial_name == 'Simpsons').length,
                    Otros: products.filter(product => product.editorials.editorial_name == 'Otros').length
                }
                const newProducts = products.map(product => {
                    const newProduct = {}
                    newProduct.id = product.idProduct;
                    newProduct.name = product.name;
                    newProduct.description = product.description;
                    newProduct.detail = `/products/detail/${newProduct.id}`;
                    newProduct.relationships = [product.editorials, product.categories];
                    return newProduct;
                })
                data.products = newProducts;
                JSON.stringify(data);
                res.send(data);
            })
    },
    productsDetail: (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(product => {
                res.send(product);
            })
    },
    dashboard:async(req,res)=>{
        let element=[]
        element.push({
        title:'Total Products',
        icon:0,
        data:await db.Product.count(),
        
    })
        element.push({
        title:'Total users',
        icon:1,
        data:await db.User.count(),
        
    } )
        res.send(element)

    }
    
    
}

module.exports = APIController;