class IdValidator{
    constructor(){
    }
    static valiadteId(id) {
        if(id=""){
            return false;
        }else{
            return true;
        }         
    };
}

module.exports = IdValidator;
