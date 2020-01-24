$(document).ready(
		function() {
			$('#userAgeGet').blur(
					function() {

						if (isNaN($(this).val()) || $(this).val() < 1
								|| $(this).val() > 100) {

							$('#userAgeGet').val('Only Number from 1 to 100');
							$('#userAgeGet').focus();

						} else {

							$('#userAddressGet').focus();
						}

					});
			$('#userAgePost').blur(
					function() {

						if (isNaN($(this).val()) || $(this).val() < 1
								|| $(this).val() > 100) {

							$('#userAgePost').val('Only Number from 1 to 100');
							$('#userAgePost').focus();

						} else {

							$('#userAddressPost').focus();
						}

					});

			$('#sendGEt').bind(
					'click',
					function() {
						$.ajax({
							type : "GET",

							contentType : 'application/json',
							url : 'http://localhost:3000/formGet?lName='
									+ $('#userLastNameGet').val() + '&fName='
									+ $('#userFirstNameGet').val() + '&age='
									+ $('#userAgeGet').val() + '&address='
									+ $('#userAddressGet').val(),
							success : function(data) {
								console.log('success');
								console.log(JSON.stringify(data));
							}

						})
					});

			$('#sendPost').bind('click', function() {
				$.ajax({
					type : "POST",
					data : JSON.stringify({
						lName : $('#userLastNameGet').val(),
						fName : $('#userFirstNameGet').val(),
						age : $('#userAgeGet').val(),
						address : $('#userAgeGet').val()
					}),
					contentType : 'application/json',
					url : 'http://localhost:3000/userPost',
					success : function(data) {
						console.log('success');
						console.log(JSON.stringify(data));
					}

				})
			});

		});
