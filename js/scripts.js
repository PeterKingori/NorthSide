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
	prices.forEach(function (price) {
		firstCost += price;
	})
	return firstCost;
}


// user interface logic
$(document).ready(function () {
	$('button#order-clicked').click(function () {
		$('form#order-form').slideDown('slow');
		$('div.total-pizza-cost').show('slow');
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


		// conditional statements to add prices of toppings to array depending on size of pizza chosen
		var toppingsCost = [];
		if (inputSize === 'small') {
			userToppings.forEach(function (item) {
				switch (item) {
					case 'sausage':
						toppingsCost.push(100);
						break;
					case 'bacon':
						toppingsCost.push(120);
						break;
					case 'mushrooms':
						toppingsCost.push(80);
						break;
					case 'chicken':
						toppingsCost.push(150);
						break;
					case 'meatballs':
						toppingsCost.push(180);
						break;
					case 'garonpep':
						toppingsCost.push(60);
						break;
				}
			})
		} else if (inputSize === 'medium') {
			userToppings.forEach(function (item) {
				switch (item) {
					case 'sausage':
						toppingsCost.push(150);
						break;
					case 'bacon':
						toppingsCost.push(170);
						break;
					case 'mushrooms':
						toppingsCost.push(130);
						break;
					case 'chicken':
						toppingsCost.push(200);
						break;
					case 'meatballs':
						toppingsCost.push(230);
						break;
					case 'garonpep':
						toppingsCost.push(110);
						break;
				}
			})
		} else if (inputSize === 'large') {
			userToppings.forEach(function (item) {
				switch (item) {
					case 'sausage':
						toppingsCost.push(200);
						break;
					case 'bacon':
						toppingsCost.push(220);
						break;
					case 'mushrooms':
						toppingsCost.push(180);
						break;
					case 'chicken':
						toppingsCost.push(250);
						break;
					case 'meatballs':
						toppingsCost.push(280);
						break;
					case 'garonpep':
						toppingsCost.push(160);
						break;
				}
			})
		}
		var secondCost = 0;
		toppingsCost.forEach(function (item) {
			secondCost += item;
		})

		$('#show-order').show();
		$('.show-size').text(newPizza.size);
		$('.show-crust').text(newPizza.crust);


		var totalCost = newPizza.pizzaCost() + secondCost;
		document.getElementById('total-cost').innerHTML = totalCost;




	})

})
