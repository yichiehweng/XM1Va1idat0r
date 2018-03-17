class MRNumberValidator{
    constructor(){
    }
    static valiadteMRNumber(id) {
        if(id=""){
            return false;
        }else{
            return true;
        }         
    };
}

module.exports = MRNumberValidator;