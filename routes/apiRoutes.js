const { Workout } = require("../models")
const router = require("express").Router()


//GET  /api/workouts get all workouts
router.get("/workouts", async function (req, res) {

    try {
        const data = await Workout.aggregate([
            {
                $addFields: {
                    totalDuration: {
                        $sum: "$exercises.duration"
                    }
                }
            }
        ])
        res.json(data)
    }
    catch (err) {
        res.json(err);
    }

});

//GET /api/workouts post a new workout to database
router.post("/workouts", ({ body }, res) => {
    Workout.create(body)
        .then((dbWorkout => {
            res.json(dbWorkout);
        })).catch(err => {
            res.json(err);
        })

});



router.put("/workouts/:id", ({ body, params }, res) => {

    Workout.findOneAndUpdate(
        { _id: params.id },
        {
            $push: { exercises: body }
        },
        { new: true, runValidators: true }).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });

});

router.get("/workouts/range", async function (req, res) {
    try {
        const data = await Workout.aggregate([
            {
                $addFields: {
                    totalDuration: {
                        $sum: "$exercises.duration"
                    }
                }
            }
        ]).sort({_id: -1}).limit(7)

        res.json(data)
    } catch (err) {
        res.json(err);
    }
})



module.exports = router;

