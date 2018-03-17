class MRNumberValidator{
    constructor(){
    }
    static valiadteMRNumber(id) {
        var validationResult="Not Pass";
        if(id!=""){
            validationResult="Pass";
        }    
        return {item:"MRNumber",result:validationResult}
    };
}

module.exports = MRNumberValidator;