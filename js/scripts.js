//business logic
function Pizza(size, crust) {
	this.size = size;
	this.crust = crust;
	this.toppings = [];
}

Pizza.prototype.allToppings = function() {
	return this.size + ',' + this.crust + ',' + this.toppings;
}

// user interface logic
$(document).ready(function () {
	$('button#order-clicked').click(function () {
		$('form#order-form').show();
	});

	$('form#order-form').submit(function (event) {
		event.preventDefault();

		var inputSize = $('input:radio[name="pizza-size"]:checked').val();
		var inputCrust = $('input:radio[name="pizza-crust"]:checked').val();
		var newPizza = new Pizza(inputSize, inputCrust);
		
		var userToppings = [];
		$.each($('input:checkbox[name="toppings"]:checked'), function() {
			userToppings.push($(this).val());
		});
		newPizza.toppings.push(userToppings);
		
		
//		$('.toppings').each(function () {
//			var inputSausage = $(this).find('input.sausage').val();
//			var inputBacon = $(this).find('input.bacon').val();
//			var inputMushrooms = $(this).find('input.mushrooms').val();
//			var inputChicken = $(this).find('input.chicken').val();
//			var inputMeatballs = $(this).find('input.meatballs').val();
//			var inputGaronpep = $(this).find('input.garonpep').val();
//			var newTopping = new Topping(inputSausage, inputBacon, inputMushrooms, inputChicken, inputMeatballs, inputGaronpep);
//			newPizza.toppings.push(newTopping);
//		alert('The values are ' + newTopping.allToppings());			
//		});

	})



})
