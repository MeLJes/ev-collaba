(function () {
	let people = {
		people: [],
		init: function() {
			this.cacheElements();
			this.bindEvents();
			this.render();
		},
		cacheElements: function() {
			this.formInput = document.querySelector('.personName');
			this.formButton = document.querySelector('.addPerson');
			this.persons = document.querySelector('.persons');
		},
		bindEvents: function() {
			this.formButton.addEventListener('click', this.addPerson.bind(this));
			this.persons.addEventListener('click', this.removePerson.bind(this));
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
			if (this.formInput.value.length) {
				this.people.push(this.formInput.value);
				this.render();
				this.formInput.value = '';
			}
		},
		removePerson: function (event) {
			if (event.target && event.target.classList.contains('remove')) {
				let item = event.target.closest('li');
				let personaName = item.innerText.trim();

				this.people = this.people.filter(function(person) {
					return person !== personaName;
				});
				this.render();
			}

		}
	};

	people.init();
})();
