//display item with filter

app.filter("idFilter1",function(){
    return function(input,option){
        var output=[];
        if(option)
        {
            angular.forEach(input,function(value,key){
            if(value.type==option)
            {
                output.push(value);
            }
            });
            return output;
        }
        else
        {
            return input;
        }
    }
});
