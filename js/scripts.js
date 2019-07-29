//business logic
function Pizza(size, crust) {
	this.size = size;
	this.crust = crust;
}


Pizza.prototype.pizzaCost = function () {
	var firstCost = 0;
	var prices = [];
	if (this.size === 'small') {
		prices.push(200);
	} else if (this.size === 'medium') {
		prices.push(400);

	} else if (this.size === 'large') {
		prices.push(600);

	}
	switch (this.crust) {
		case 'thin':
			prices.push(50);
			break;
		case 'thick':
			prices.push(70);
			break;
		case 'wheat':
			prices.push(90);
			break;
		case 'deep':
			prices.push(120);
			break;
		case 'flatbread':
			prices.push(60);
			break;
	}
	prices.forEach(function(price) {
		firstCost += price;
	})
	return firstCost;
}


// user interface logic
$(document).ready(function () {
	$('button#order-clicked').click(function () {
		$('form#order-form').show();
		$('div.total-pizza-cost').show();
	});

	$('form#order-form').submit(function (event) {
		event.preventDefault();

		let inputSize = $('input:radio[name="pizza-size"]:checked').val();
		let inputCrust = $('input:radio[name="pizza-crust"]:checked').val();
		let newPizza = new Pizza(inputSize, inputCrust);

		let userToppings = [];
		$.each($('input:checkbox[name="toppings"]:checked'), function () {
			userToppings.push($(this).val());
		});
		newPizza.toppings.push(userToppings);

		
		})
	
})