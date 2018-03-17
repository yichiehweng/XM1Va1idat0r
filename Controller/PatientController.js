var IdValidator=require('../Validator/IdValidator');
var MRNumberValidator=require('../Validator/MRNumberValidator');
class PatientController {

    constructor(){
    }

    valiadteId(id) {
        return IdValidator.valiadteId(id);
    };

    valiadteMRNNumber(MRNNumber) {
        return MRNumberValidator.valiadteMRNumber(MRNNumber)   
    };
}

module.exports = PatientController;