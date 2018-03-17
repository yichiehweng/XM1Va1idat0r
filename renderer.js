var fs= require('file-system');

var app = require('electron').remote; 
var dialog = app.dialog;

var xml2js= require('xml2js');
var parser=new xml2js.Parser();
var PatientController = require("./controller/PatientController");
var MakeUL=require("./util/makeUL");
var filePath=document.getElementById("filePath");
var openFile=document.getElementById("openFile");   
var btn_upload=document.getElementById("btn_upload");

openFile.addEventListener('click',function(){
    dialog.showOpenDialog({ filters: [
        { name: 'xml', extensions: ['xml'] }
       ]}, function (fileNames) {
       if (fileNames === undefined) return;
       var fileName = fileNames[0];
       
       filePath.value=fileName;
      }); 
});


btn_upload.addEventListener('click',function(){

    //var xmlfile = __dirname + "/public/xmlfiles/patient.xml";
    var xmlfile=filePath.value; 

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
                   

                    var MRNNumber=patient['identification'][0]['MRNNumber'];
                    var MRNNumberResult=patientController.valiadteMRNNumber(MRNNumber);

                    var validationResults=[idResult,MRNNumberResult];
                     var makeUL=new MakeUL();
                    document.getElementById('results').appendChild(makeUL.makeTable(validationResults));
                }
            });
        } 
    });

});



