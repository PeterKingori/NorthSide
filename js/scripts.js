//business logic

// user interface logic
$(document).ready(function() {
	$('button#order-clicked').click(function() {
		$('form#order-form').show();
	});
	
	$('form#order-form').submit(function(event) {
		event.preventDefault();
		
		var size = $('input:radio[name="pizza-size"]:checked').val();
		var crust = $('input:radio[name="pizza-crust"]:checked').val();
		var toppings = [];
				$('input:checkbox[name="toppings"]:checked').each(function() {
					toppings.push(this.value);
				});
	})
	
	
	
})