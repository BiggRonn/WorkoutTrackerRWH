const Workout = require("../models/workout")
const router = require("express").Router()


//get all workouts
router.get("/workouts",function(req,res){  
    Workout.find({})
    .then(data =>{  
        res.json(data)
    })
    .catch(err => { 
        res.json(err)
    })
});

//post a new workout to database
router.post("/workouts", ({body}, res) => {
    Workout.create(body)
        .then((dbWorkout => {
            res.json(dbWorkout);
        })).catch(err => {
            res.json(err);
        })
      
  });

  module.exports = router;



//   app.post("/submit", ({body}, res) => {
//     db.Book.create(body)
//       .then(({_id}) => db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
//       .then(dbLibrary => {
//         res.json(dbLibrary);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   }); 




//   db.orders.aggregate([
//     { $match: { status: "A" } },
//     { $group: { _id: "$cust_id", total: { $sum: "$amount" } } }
//  ])
 
//  First Stage: The $match stage filters the documents by the status field and passes to the next stage those documents that have status equal to "A".
 
//  Second Stage: The $group stage groups the documents by the cust_id field to calculate the sum of the amount for each unique cust_id.