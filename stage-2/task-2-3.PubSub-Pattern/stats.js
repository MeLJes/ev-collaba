let stats = (function () {
  let people = 0,
      peopleCount = document.querySelector('.people-count');

  events.on('peopleChanged', setPeople);

  render();

  function render() {
    peopleCount.innerHTML = people;
  }
  function setPeople(newPeople) {
    people = newPeople;
    render();
  }
})();
