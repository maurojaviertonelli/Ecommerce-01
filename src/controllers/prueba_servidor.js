const db=require('../database/models')
const op=db.Sequelize.Op
  let cardsController={
    lista: 
        db.Card.findAll({
          include:[{association:"entities"}]      //dentro de association va el as con el q identifique la relacion, singular y plural
        })
      .then((resultado)=>{
        console.log(resultado)
      }),
    products:db.Category.findAll({
        include:[{association:"products"}],
    })
      .then((resultado)=>{
        console.log(resultado)
    })
  }
    
cardsController.products
