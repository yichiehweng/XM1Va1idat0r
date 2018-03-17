class IdValidator{
    constructor(){
    }
    static valiadteId(id) {
        var validationResult="Not Pass";

        if(id!=""){
            validationResult="Pass";
        }    
        return {item:"Id",result:validationResult}
    };
}

module.exports = IdValidator;
