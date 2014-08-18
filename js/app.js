(function(){
	var plus = function(){
		compute('plus');		
	};

	var minus = function(){
		compute('minus');
	};

	var compute = function(operator){
		var x = document.getElementById('x').value.trim();
		var y = document.getElementById('y').value.trim();	

		if (x !== '' && Math.floor(x) == x && y !== '' && Math.floor(y) == y)
		{
			if (operator === 'plus')
				writeResult(true, parseInt(x)+parseInt(y));
			else
				writeResult(true, parseInt(x)-parseInt(y));
		}
		else
		{
			writeResult(false, 'invalid input arguments! Both arguments must be integers');
		}
	}

	document.addEventListener("DOMContentLoaded", function(event) {
    	document.querySelector(".plus").addEventListener('click', plus);
    	document.querySelector(".minus").addEventListener('click', minus);
  	});

  	var writeResult = function(valid, message){
  		document.getElementById("result").innerHTML = message;
  		if (valid)
  			document.getElementById("result").className = 'success';
  		else
			document.getElementById("result").className = 'failure';
  	}
}());