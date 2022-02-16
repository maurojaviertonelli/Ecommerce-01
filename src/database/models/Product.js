module.exports=(sequelize, dataTypes) => {
    let alias = "Product";
    let cols = {
        idProduct:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type: dataTypes.STRING,
            allowNull: false
        },
        description:{
            type: dataTypes.STRING,
            allowNull: false
        },
        price:{
            type: dataTypes.FLOAT,
            allowNull: false
        },
        image:{
            type: dataTypes.STRING,
            allowNull: false
        },
        editorials_idEditorial:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        categories_idCategory:{
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }
    let config = {
        tableName: "products",
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config);
        Product.associate=(models)=>{
            Product.belongsToMany(models.Invoice,{
        as:'invoices',        //el as es lo q uso para llamar a la asociacion en mi controlador, es el identificador de la asosiacion
        through:'details',
        foreignKey:'products_idProduct',
        otherKey:'invoices_idInvoice',
        timestamps:false
        }),
        Product.belongsTo(models.Category,{
            as:'categories',
            foreignKey:'categories_idCategory'
        }),
        Product.belongsTo(models.Editorial,{
            as:'editorials',
            foreignKey:'editorials_idEditorial'
        })
    }
    return Product;
}