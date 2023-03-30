$(document).ready(function(){
	$('#firstname').focus();
	$('#formRegisterEmployee').validate({
		rules:{
			firstname: {
				required: true,
				lettersonly:true
			},
			lastname: {
				required: true,
				lettersonly:true
			},
			dob: "required",
			gender: "required",
			email: "required",
			phone: {
				required:true,
				minlength:10,
				number:true
			},
			country: {
				required: true,
				lettersonly: true
			},
			state: {
				required: true,
				lettersonly: true
			},
			city: {
				required:true,
				lettersonly: true
			},
			zipcode: {
				required: true,
				minlength: 6,
				maxlength: 6
			},
			address: "required",
			designation: "required",
			doj: "required"
		},
		messages:{
			firstname: {
				required: "First Name required!",
			},
			lastname: {
				required: "Last Name required!",
			},
			dob: "Date of Birth required!",
			gender: "Select your gender!",
			email: "Email ID required!",
			phone: {
				required: "Phone Number required",
				number: "Characters not allowed!",
				minlength: "Minimum length is 10!"
				
			},
			country: {
				required: "Country required!",
			},
			state: {
				required: "State required!"
			},
			city: {
				required: "City required!"
			},
			zipcode: {
				required: "Zip Code required!",
				minlength: "Should be of 6 digits!"
			},
			address: "Address required!",
			designation: "Select designation!",
			doj: "Date of Joining required!"
		},
		errorPlacement: function(error, element){
			if(element.attr('name') == 'gender'){
				error.appendTo('#errorGender');
			}
			else{
				error.insertAfter(element);
			}
			
		},
		submitHandler: function(form) {
			form.submit();
	    }
	});
	jQuery.validator.addMethod("lettersonly", function(value, element) {
		  return this.optional(element) || /^[a-z]+$/i.test(value);
		}, "Letters only please"); 
});