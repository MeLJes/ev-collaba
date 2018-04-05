(function () {
	let people = {
		people: [],
		init: function() {
			this.cashElements();
			this.bindEvents();
			this.render();
		},
		cashElements: function() {
			this.formInput = document.querySelector('.personName');
			this.formButton = document.querySelector('.addPerson');
			this.persons = document.querySelector('.persons');
			this.personRemove = document.querySelector('.remove');
		},
		bindEvents: function() {
			this.formButton.addEventListener('click', this.addPerson.bind(this));
			this.formButton.addEventListener('click', this.removePerson.bind(this));
		},
		render: function() {
			let personsList = this.people.map(function(person) {
				return `<li class="person">
					${person}
					<button type="button" class="remove"></button>
				</li>`;
			}).join('');

			this.persons.innerHTML = personsList;
		},
		addPerson: function() {
			this.people.push(this.formInput.value);
			this.render();
			this.formInput.value = '';
		},
		removePerson: function () {

		}
	};

	people.init();
})();
