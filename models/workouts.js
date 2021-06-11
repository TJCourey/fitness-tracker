const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  date: {
    type: String,
    unique: true,
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercises",
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
