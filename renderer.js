var fs= require('file-system');
var xml2js= require('xml2js');
var parser=new xml2js.Parser();
var PatientController = require("./Controller/PatientController");

var btn_upload=document.getElementById("btn_upload");

btn_upload.addEventListener('click',function(){
    var xmlfile = __dirname + "/public/xmlfiles/patient.xml";
    fs.readFile(xmlfile,'utf-8',function (error, xml){
        if (error) {
            console.log(error);
        }else{          
            parser.parseString(xml, function (error, result) {
                if(error){
                    console.log(error);
                }else{
                    var patient=result["patient"];
                    var patientController=new PatientController();

                    var id=patient['identification'][0]['id'];                      
                    var idResult=patientController.valiadteId(id);
                    console.log(idResult);

                    var MRNNumber=patient['identification'][0]['MRNNumber'];
                    var MRNNumberResult=patientController.valiadteId(MRNNumber);
                    console.log(MRNNumberResult);
                }
            });
        } 
    });

});
