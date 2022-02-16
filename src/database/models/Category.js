module.exports=(sequelize, dataTypes) => {
    let alias = "Category";
    let cols = {
        idCategory:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        category_name:{
            type: dataTypes.STRING,
            allowNull: false
        }
        
    }
    let config = {
        tableName: "categories",
        timestamps: false
    }

    const Category = sequelize.define(alias, cols, config);
    Category.associate=(models)=>{
        Category.hasMany(models.Product,{
        as:'products',
        foreignKey:'categories_idCategory'
        })
    }
return Category;
}