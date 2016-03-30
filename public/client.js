var keywords = document.getElementById('keywords');
var search = document.getElementById('search');
var jumbo = document.getElementById('jumbo');
var timeline = document.getElementById('timeline');

search.addEventListener('submit', function(event) {
  event.preventDefault();

  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/users/:name');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify({user: keywords.value}));

  xhr.addEventListener('load', function() {
    clearPage(timeline);

    var responseObject = JSON.parse(xhr.responseText);

    var column = document.createElement('div');
    column.setAttribute('class', 'col-md-6');

    var panel = document.createElement('div');
    panel.setAttribute('class', 'panel panel-default buffer');

    var panelBody = document.createElement('div');
    panelBody.setAttribute('class', 'panel-body');

    var media = document.createElement('div');
    media.setAttribute('class', 'media');

    var mediaLeft = document.createElement('div');
    mediaLeft.setAttribute('class', 'media');

    var linkImage = document.createElement('a');
    linkImage.setAttribute('href', '#');

    var userImage = document.createElement('img');
    userImage.className = 'media-object';
    userImage.setAttribute('src', responseObject.image);
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
    messageBody.textContent = responseObject.post[0];

    var panelFooter = document.createElement('div');
    panelFooter.setAttribute('class', 'panel-footer');

    var palm = document.createElement('a');
    palm.setAttribute('href', '#');
    palm.textContent = 'Palm';


    mediaLeft.appendChild(linkName);
    linkName.appendChild(poster);
    mediaBody.appendChild(messageBody);
    linkImage.appendChild(userImage);
    mediaLeft.appendChild(linkImage);
    media.appendChild(mediaLeft);
    panelBody.appendChild(hr);
    media.appendChild(mediaBody);
    panelBody.appendChild(media);
    panelFooter.appendChild(palm);
    panel.appendChild(panelBody);
    panel.appendChild(panelFooter);
    column.appendChild(panel);
    timeline.appendChild(column);


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


function showTimeline(post) {

};
