module.exports=(sequelize,dataTypes) => {
    let alias = "Editorial";
    let cols = {
        idEditorial:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        editorial_name:{
            type:dataTypes.STRING,
            allowNull: false
        }
        
    }
    let config = {
        tableName:"editorials",
        timestamps:false
    }

    const Editorial = sequelize.define(alias, cols, config);
    Editorial.associate=(models)=>{
    Editorial.hasMany(models.Product,{
        as:'products',
        foreignKey:'editorials_idEditorial'
        })
    
    }
    return Editorial;
}