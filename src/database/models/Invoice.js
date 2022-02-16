
module.exports=(sequelize, dataTypes) => {
    let alias = "Invoice";
    let cols = {
        idInvoice:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,

        },
        invoice_type:{
            type: dataTypes.STRING,
            allowNull: false
        },
        invoice_code:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        users_idUser:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        cards_idCard:{
            type: dataTypes.INTEGER,
            allowNull: false
        }

    }
    let config = {
        tableName: "invoices",    //nombre tabla en base de datos
        timestamps: false,
       
    }

    const Invoice = sequelize.define(alias, cols, config);

    Invoice.associate=(models)=>{
        Invoice.belongsTo(models.User,{
            as:"users",
            foreignKey:"users_idUser"
        }),
        Invoice.belongsTo(models.Card,{
            as:"cards",
            foreignKey:"cards_idCard"
        })
        Invoice.belongsToMany(models.Product,{
            as:'products',
            through:'details',
            foreignKey:'invoices_idInvoice',
            otherKey:'products_idProduct',
            timestamps:false
        })
    }
    
  

    return Invoice;
}



