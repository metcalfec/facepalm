var keywords = document.getElementById('keywords');
var search = document.getElementById('search');
var jumbo = document.getElementById('jumbo');
var timeline = document.getElementById('timeline');

////////////////////////////////////////////////////////////////////////////////
//Search and View Users
////////////////////////////////////////////////////////////////////////////////

search.addEventListener('submit', function(event) {
  event.preventDefault();

  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/users/');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify({user: keywords.value}));

  xhr.addEventListener('load', function() {
    clearPage(timeline);
    clearPage(jumbo);

    var responseObject = JSON.parse(xhr.responseText);
    console.log(responseObject);
    var posts = responseObject.posts;

    for (var i = 0; i < posts.length; i++) {

      var column = document.createElement('div');
      column.setAttribute('class', 'col-md-6');

      var panel = document.createElement('div');
      panel.setAttribute('class', 'panel panel-default buffer');

      var panelBody = document.createElement('div');
      panelBody.setAttribute('class', 'panel-body');

      var media = document.createElement('div');
      media.setAttribute('class', 'media');

      var mediaLeft = document.createElement('div');
      mediaLeft.setAttribute('class', 'media-left');

      var linkImage = document.createElement('a');
      linkImage.setAttribute('href', '#');

      var userImage = document.createElement('img');
      userImage.className = 'media-object';
      userImage.setAttribute('src', responseObject.imageSm);
      userImage.setAttribute('width', '45px');

      var mediaBody = document.createElement('div');
      mediaBody.setAttribute('class', 'media-body');

      var linkName = document.createElement('a');
      linkName.setAttribute('href', '#');

      var poster = document.createElement('h5');
      poster.setAttribute('class', 'media-heading');
      poster.textContent = responseObject.name;

      var hr = document.createElement('hr');

      var messageBody = document.createElement('p');
      messageBody.textContent = responseObject.posts[i];

      var panelFooter = document.createElement('div');
      panelFooter.setAttribute('class', 'panel-footer');

      var palm = document.createElement('a');
      palm.setAttribute('href', '#');
      palm.textContent = 'Palm';

      linkName.appendChild(poster);
      mediaBody.appendChild(linkName);
      media.appendChild(mediaLeft);
      media.appendChild(mediaBody);
      media.appendChild(hr);
      linkImage.appendChild(userImage);
      mediaLeft.appendChild(linkImage);
      media.appendChild(messageBody);

      panelBody.appendChild(media);
      panel.appendChild(panelBody);
      panelFooter.appendChild(palm);
      panel.appendChild(panelFooter);
      column.appendChild(panel);
      timeline.appendChild(column);
    }

    var column = document.createElement('div');
    column.className = 'col-md-12'

    var banner = document.createElement('img');
    banner.className = 'timeline-photo';
    banner.setAttribute('src', responseObject.banner);
    banner.setAttribute('width', '100%');
    banner.setAttribute('height', '315px');

    var panel = document.createElement('div');
    panel.className = 'panel panel-default'

    var imageLg = document.createElement('img');
    imageLg.className = 'user-img-lg';
    imageLg.setAttribute('src', responseObject.imageLg);
    imageLg.setAttribute('width', '150px');

    var name = document.createElement('h3');
    name.className = "user-name";
    name.textContent = responseObject.name;

    var panelBody = document.createElement('div');
    panelBody.className = 'panel-body';

    var  aboutCol = document.createElement('div');
    aboutCol.className = 'col-md-4';

    var aboutUl = document.createElement('ul');

    var ListOne = document.createElement('li');
    ListOne.textContent = responseObject.about[0];

    var ListTwo = document.createElement('li');
    ListTwo.textContent = responseObject.about[1];

    column.appendChild(banner);
    aboutUl.appendChild(ListOne);
    aboutUl.appendChild(ListTwo);
    aboutCol.appendChild(aboutUl);
    panelBody.appendChild(aboutCol);
    panel.appendChild(imageLg);
    panel.appendChild(name);
    panel.appendChild(panelBody);
    column.appendChild(panel);
    jumbo.appendChild(column);
  });
});

function clearPage(parent) {
  if (parent) {
    parent.className = "";
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
}
