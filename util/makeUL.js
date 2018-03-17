class MakeUL
{
    constructor(){
    }
    makeUL(array) {
        // Create the list element:
        var list = document.createElement('ul');
    
        for(var i = 0; i < array.length; i++) {
            // Create the list item:
            var item = document.createElement('li');   
            // Set its contents:
            item.appendChild(document.createTextNode(array[i]));   
            // Add it to the list:
            list.appendChild(item);
        }   
        // Finally, return the constructed list:
        return list;
    }

    makeTable(objects){
        var row=null;
        var table= document.createElement("table");
        for (var i=0; i < objects.length; i++){
            console.log("i:"+ objects.length);           
            row= table.insertRow()
            var keySize=Object.keys(objects[i]).length;
            console.log("j"+ keySize);
            for(var j=0; j < keySize; j++){
                var key = Object.keys(objects[i])[j];
                var value = objects[i][key];
                console.log(value);
                row.insertCell().textContent=value;
            }
        }
       return table;  
    }

   

    
    
    
}
module.exports = MakeUL;