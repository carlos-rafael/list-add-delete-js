var cont=0;
var result = document.getElementById('result');
var addBtn = document.getElementById('addBtn');
var table = document.getElementById('table');
var listModule = (function(){

   
    return{
        draw:function(item){

            var dataItem = document.createElement('tr');
            
            var dataNameData = document.createElement('td');
            var newTextNode = document.createTextNode(item.name);
            dataNameData.appendChild(newTextNode);
            dataItem.appendChild(dataNameData);
            console.log(dataItem);

            var dataEmailData = document.createElement('td');
            var newTextNode = document.createTextNode(item.email);
            dataEmailData.appendChild(newTextNode);
            dataItem.appendChild(dataEmailData);
            console.log(dataItem);

            var dataTelData = document.createElement('td');
            var newTextNode = document.createTextNode(item.tel);
            dataTelData.appendChild(newTextNode);
            dataItem.appendChild(dataTelData);
            console.log(dataItem);

            function removeData(object){
        
                while(object.tagName != 'TR'){
                    object = object.parentNode;
                }
                object.parentNode.removeChild(object);
            }

            var dataImgData = document.createElement('td');
            var img = document.createElement('img');
            img.src= 'close.png';
            img.onclick = function(){
                removeData(this);
            };
            dataImgData.appendChild(img);
            dataItem.appendChild(dataImgData);

            table.appendChild(dataItem);

        },

        addItem:function(item){
            item.id=cont;
            cont++;
            console.log(item);
        },
    };

})();


addBtn.onclick = function(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var tel = document.getElementById('tel').value;
    var obj = {
        name:name,
        email:email,
        tel:tel 
    }
    listModule.addItem(obj);

    listModule.draw(obj);
}
