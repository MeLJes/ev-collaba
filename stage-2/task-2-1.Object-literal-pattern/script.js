(function () {
	let people = {
		people: ['will', 'laura'],
		init: function() {
			this.controlElements();
			this.render();
		},
		controlElements: function() {
			this.formInput = document.getElementsByClassName('.personName'),
			this.formButton = document.getElementsByClassName('.addPerson'),
			this.persons = document.getElementsByClassName('persons'),
			this.template = this.persons.innerHTML
		},
		render: function() {
			let data = this.people.map(function(person) {
				return '<li>' + person + '<button type="button" class="remove"></button></li>';
			});

			this.template = data

			console.log(this);
			console.log(this.people);
		}
	};

	people.init();
})();
