module.exports=(sequelize, dataTypes) => {
    let alias = "Card";           //mayuscula y singular como el nombre del archivo
    let cols = {
        idCard:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        card_number:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        expire_date:{
            type: dataTypes.DATE,
            allowNull: false
        },
        security_code:{
            type: dataTypes.TINYINT,
            allowNull: false
        },
        entities_idEntitie:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        users_idUser:{
            type: dataTypes.INTEGER,
            allowNull: false
        },

        
    }
    let config = {
        tableName: "cards",      //nombre tabla en base de datos generalmente en plural
        timestamps: false
    }

    const Card = sequelize.define(alias, cols, config);
    Card.associate=(models)=>{
        Card.belongsTo(models.Entitie,{
            as:'entities',
            foreignKey:'entities_idEntitie'
        }),
        Card.hasMany(models.Invoice,{
            as:'invoices',
            foreignKey:'cards_idCard'
        }),
        Card.belongsTo(models.User,{
            as:"users",
            foreignKey:"users_idUser"
        })
    }
  
   
    return Card;
}