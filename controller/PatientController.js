var IdValidator=require('../validator/IdValidator');
var MRNumberValidator=require('../validator/MRNumberValidator');
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