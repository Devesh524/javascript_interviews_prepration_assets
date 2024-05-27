document
  .getElementsByClassName('accordion')[0]
  .addEventListener('click', function (e) {
    document
      .getElementsByClassName('accordion-content')[0]
      .classList.toggle('active');
  });
