const { Workout } = require("../models")
const router = require("express").Router()


//GET  /api/workouts get all workouts
router.get("/workouts",async function(req,res){  
    const data = await Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }
    ])
    Workout.find({})
    .then(data =>{  
        res.json(data)
    })
    .catch(err => { 
        res.json(err)
    })
});

//GET /api/workouts post a new workout to database
router.post("/workouts", ({body}, res) => {
    Workout.create(body)
        .then((dbWorkout => {
            res.json(dbWorkout);
        })).catch(err => {
            res.json(err);
        })
      
  });

  
  //   router.put("/workouts/:id", async function (req, res){
      //       Workout.findOneAndUpdate(
          //         { _id: req.params.id }
          //   })
          
          router.get("/workouts/range", async function (req, res){})
          
          
          
          module.exports = router;
          
  