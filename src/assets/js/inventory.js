function _priceQuantity(_id){
    var a  = _id;
    var i = a.substring(13);
    var x  = document.getElementById(_id).value;
    if(x > 0){
        var y  = document.getElementById("inputPrecioU"+i).value;
        document.getElementById("inputPrecioT"+i).value = (x * y);
    }
    else{
        document.getElementById("inputPrecioT"+i).value = (0);
    }
}