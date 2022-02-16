

module.exports=(sequelize, dataTypes) => {
    let alias = "Entitie";
    let cols = {
        idEntitie:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type: dataTypes.STRING,
            allowNull: false
        },
    }
    let config = {
        tableName: "entities",
        timestamps: false
    }

    const Entitie = sequelize.define(alias, cols, config);
    Entitie.associate=(models)=>{
        Entitie.hasMany(models.Card,{
            as:'cards',
            foreignKey:'entities_idEntitie'
        })
    }
    return Entitie;
}