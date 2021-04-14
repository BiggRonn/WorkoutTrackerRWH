const Workout = require("../models/workout")

app.get("/api/workouts",function(req,res){  
    Workout.find({})
    .then(data =>{  
        res.json(data)
    })
    .catch(err => { 
        res.json(err)
    })
});


app.post("/", ({body}, res) => {
    Workout.create(body)
        .then()
      
  });