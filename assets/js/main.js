document.addEventListener("DOMContentLoaded", () => {

	new countUp.CountUp('years-counter', 10, {
		duration: 4,
		autoAnimate: true
	}).start();

	new countUp.CountUp('projects-counter', 75, {
		duration: 4,
		autoAnimate: true
	}).start();

	new countUp.CountUp('clients-counter', 30, {
		duration: 4,
		autoAnimate: true
	}).start();

	new countUp.CountUp('rating-counter', 4.9, {
		duration: 4,
		decimalPlaces: 1,
		autoAnimate: true
	}).start();


	GLightbox();


	$('#contactForm').on('submit', function(event) {
		event.preventDefault();

		var form = this;

		$.ajax({
			type: form.method,
			url: form.action,
			data: $(form).serialize(),
			headers: {
				'Accept': 'application/json'
			},
			success: function(response) {
				if (response.ok) {
					$('#contactForm').fadeOut();
					$('#message-success').removeClass('d-none').fadeIn();
					$('#message-warning').addClass('d-none')
				}
				else
					$('#message-warning').removeClass('d-none').fadeIn();
			},
			error: function() {
				$('#message-warning').removeClass('d-none').fadeIn();
			}
		});

	});

});
