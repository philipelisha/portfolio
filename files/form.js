$(function() {
	$("#submit_btn").click(function() {
		// validate and process form
		// first hide any error messages
		$('.error').hide();


		var name = $("#contact_form_name");
		if (name.val() == "") {
			$(".error").show().html("Please let me know who you are.");
			name.focus();
			return false;
		}

		var email = $("#contact_form_email")
		if (email.val() == "") {
			$(".error").show().html("I need your email to contact you.");
			email.focus();
			return false;
		}

		var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(reg.test(email.val()) == false) {
			$(".error").show().html("That's an invalid email address");
			email.focus();
			return false;
		}

		var message = $("#contact_form_message");
		if (message.val() == "") {
			$(".error").show().html("Please write a message.");
			message.focus();
			return false;
		}

		$('#contactLoading').show();

		var dataString = 'name='+ name.val() + '&email=' + email.val() + '&message=' + message.val();

		$.ajax({
			type: "POST",
			url: "/mailingList/process.php",
			data: dataString,
			success: function() {
				$('#contactForm').html("<div id='success'></div>");
				$('#success').html("<h2 class='success_message'>Message Sent!</h2>")
				.append("<p class='success_message'>I will contact you soon.</p>")
				.hide()
				.fadeIn(1500, function() {
					$('#success').append("<img id='checkmark' src='/images/check.png' />");
				});
			}
		});
		return false;
	});
});