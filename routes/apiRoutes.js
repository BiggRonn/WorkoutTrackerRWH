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


router.post("/workouts", ({body}, res) => {
    Workout.create(body)
        .then()
      
  });

  module.exports = router;