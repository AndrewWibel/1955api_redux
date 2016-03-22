var mongoose = require('mongoose');
var BoomerSchema = new mongoose.Schema({
	name: String
});
mongoose.model("Boomer", BoomerSchema);