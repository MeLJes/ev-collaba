let people = (function () {
	let people = [],
		formInput = document.querySelector('.personName');
	formButton = document.querySelector('.addPerson');
	persons = document.querySelector('.persons');

	formButton.addEventListener('click', addPerson);
	persons.addEventListener('click', removePerson);

	_render();

	function _render() {
		let personsList = people.map(function (person) {
			return `<li class="person">
					${person}
					<button type="button" class="remove"></button>
				</li>`;
		}).join('');

		persons.innerHTML = personsList;
	}
	function addPerson(person) {
		let name = person || formInput.value;

		if (name.length) {
			people.push(name);
			_render();
			formInput.value = '';
		} else {
			console.warn('Enter name!');
		}
	}
	function removePerson(event) {
		if (event.target && event.target.classList.contains('remove')) {
			let item = event.target.closest('li');
			let personaName = item.innerText.trim();

			people = people.filter(function (person) {
				return person !== personaName;
			});
			_render();
		}
	}

	return {
		addPerson: addPerson,
		removePerson: removePerson
	}
})();
