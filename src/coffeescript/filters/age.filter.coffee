###
This is an angular filter that takes a DOB
and returns the age of the person
###

angular.module "DirectAsia"
	.filter "age", ->
		(input, total) ->

			today = new Date()
			birthDate = new Date input
			age = today.getFullYear() - birthDate.getFullYear()
			m = today.getMonth() - birthDate.getMonth()
			if m < 0 or (m is 0 and today.getDate() < birthDate.getDate())
				age--

			return age