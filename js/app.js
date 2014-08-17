(function(){
	var plus = function(){
		alert('plus function called');
		var x = document.getElementById('x');
		var y = document.getElementById('y');

		var validX = typeof x === 'number';
		var validY = typeof y === 'number';

		if (validX && validY)
		{
			// write value of x + y into result
		}
		else
		{
			// write invalid input in the result
		}
	};
	var minus = function(){
		alert('minus function called');
	};

	document.addEventListener("DOMContentLoaded", function(event) {
    	document.querySelector(".plus").addEventListener('click', plus);
  	});
}());