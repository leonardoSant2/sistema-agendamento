var appointment = require("../models/Appointment");
var mongoose = require("mongoose");

const Model = mongoose.model("Appointment", appointment)

class AppointmentService {

    async Create(name, email, description, cpf, date, time){
        var newAppointment = new Model({
            name,
            email,
            description,
            cpf,
            date,
            time,
            finished: false
        });

        try{
            await newAppointment.save();
            return true;
        }catch(err){
            return false;
        }


        
    }
}

module.exports = new AppointmentService();