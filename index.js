const nestObj = function(obj,attr){
    
    if(typeof(obj) != 'undefined' && typeof(attr) != 'undefined' ){
        attr = attr.replace(/\[(\w+)\]/g, '.$1'); 
        attr = attr.replace(/^\./, '');           
        var a = attr.split('.');

        for (var i = 0; i < a.length ; ++i) {
            var key = a[i];

            if(obj != null){
                if (key in obj) {
                    obj = obj[key];
                } else {
                    return;
                }
            }else{
                return;
            }

        }
        return obj;
    }

    return undefined;
}

module.exports = nestObj;