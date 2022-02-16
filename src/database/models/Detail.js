module.exports=(sequelize, dataTypes) => {
    let alias = "Detail";
    let cols = {
        idDetail:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        quantity:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        price:{
            type: dataTypes.FLOAT,
            allowNull: false
        },
        total:{
            type: dataTypes.FLOAT,
            allowNull: false
        },
        invoices_idInvoice:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        products_idProduct:{
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }
    let config = {
        tableName: "details",
        timestamps: false
    }

    const Detail = sequelize.define(alias, cols, config);
  
    return Detail;
}