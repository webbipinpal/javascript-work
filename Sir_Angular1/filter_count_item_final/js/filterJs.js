
//display item with filter
app.filter("filterAll",function(){
    return function(input, displayProList, selectedYear, selectCheckBox,scope)
    {
      var output=[],allitem,chkListType=[];
      console.log(displayProList);
      console.log(selectedYear.yearList);
      console.log(selectCheckBox);
	  for(var i=0;i<selectCheckBox.length;i++)
	  {
		 if(selectCheckBox[i].status==true)
		 {
			chkListType.push(selectCheckBox[i].type);
		 }
	  }
	  console.log(chkListType); 
    // Year Filter begain 
        if(selectedYear){
            angular.forEach(input,function(value,key){
            if(value.year == selectedYear.yearList){
                console.log(value.year);
                output.push(value);
            }
            });
     // Year filter end         
           
             //display produch list related to college start here
                 var CollageOutput=[]
                 if(displayProList){
                    angular.forEach(output,function(value,key){
                    if(value.type == displayProList){
                        console.log(value.year);
                        CollageOutput.push(value);
                    }
                    });
					if(chkListType)
					{
						angular.forEach(CollageOutput,function(value,key){
							
						if(value.chktype == chkListType[]){
							console.log(value.year);
							CollageOutput.push(value);
						}
						});
					}
					else{
						scope.allitem=output.length;  // Get total Length according to year after filter 
						return CollageOutput;
					}					
                 }
                
                else{
                    scope.allitem=output.length;  // Get total Length according to year after filter 
                    
                    return output;
                } 
            
                //display produch list related to college start here
            
        }
    }
});