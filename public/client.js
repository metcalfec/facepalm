var keywords = document.getElementById('keywords');
var search = document.getElementById('search');
var jumbo = document.getElementById('jumbo');
var timeline = document.getElementById('timeline');
var friends = document.getElementById('friends');
var currentUser = document.getElementById('current-user');


var activeUserFriends = [];
var otherFriends = [];


function clearPage(parent) {
  if (parent) {
    parent.className = "";
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
}


timeline.addEventListener('click', function(event) {
  event.preventDefault();
  var theClick = event.target;
  var clickID = theClick.getAttribute('data-id');
  var buttonText = theClick.textContent;
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/timeline/');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify({click: clickID, text: buttonText}));

  xhr.addEventListener('load', function(event) {
    event.preventDefault();
    console.log(theClick)
    var allLikes = event.target.parentNode;
    var responseObject = JSON.parse(xhr.responseText);
    var userLiked = responseObject.userLiked;
    console.log(userLiked)
    console.log(responseObject);
    getPalmed(theClick, userLiked);


  });
});

//////////
friends.addEventListener('click', function(event) {
  event.preventDefault();
  var click = event.target;
  var friendID = click.getAttribute('data-id');
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/view-friend/');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify({friend: friendID}));

  xhr.addEventListener('load', function() {
    clearPage(timeline);
    clearPage(jumbo);
    clearPage(friends);
    var responseObject = JSON.parse(xhr.responseText);
    var theTimeline = responseObject.matched.posts;
    var active = responseObject.active;
    var activeFriends = responseObject.active.friends;
    var matched = responseObject.matched;
    var matchedFriends = responseObject.matched.friends;

    timeline.className = 'col-md-9';
    showPosts(theTimeline);


    friends.className = 'col-md-3 buffer';
    showFriends(matchedFriends);
    showJumbo(matched, active);
  });
});

////////////////////////////////////////////////////////////////////////////////
//Jumbo Event Delegation
////////////////////////////////////////////////////////////////////////////////

jumbo.addEventListener('click', function(event) {
  event.preventDefault();
  var click = event.target;
  var buttonId = click.getAttribute('data-id');
  var buttonText = click.textContent;
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/add-friend/');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify({button: buttonId, text: buttonText}));

  xhr.addEventListener('load', function() {
    var responseObject = JSON.parse(xhr.responseText);
    console.log(responseObject)
    var unfriend = document.getElementsByTagName('button');
    if (responseObject.targetClick === 'Photos') {
      clearPage(friends);
      clearPage(timeline);
      timeline.className = 'col-md-10 col-md-offset-1';
      var title = document.createElement('h1');
      title.textContent = 'Photos';
      title.className = 'title-photo';
      var hr = document.createElement('hr');
      timeline.appendChild(title);
      timeline.appendChild(hr);
      unfriend[1].className = 'hide';
      showPhotos(responseObject.photos);
    }
    if (responseObject.friends === true) {
      clearPage(friends);
      friends.className = 'col-md-3 buffer';

      showFriends(responseObject.targetFriends);

      if (unfriend[1].textContent === 'Add Friend') {
        unfriend[1].textContent = 'Kill Friend';
        unfriend[1].className = 'btn btn-danger add-remove';
      }
      else {
        unfriend[1].textContent = 'Add Friend';
        unfriend[1].className = 'btn btn-primary add-remove';
      }
    }
  });
});


////////////////////////////////////////////////////////////////////////////////
//Search and View Users
////////////////////////////////////////////////////////////////////////////////

search.addEventListener('submit', function(event) {
  event.preventDefault();
  var theClick = event.target;
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/search/');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify({search: keywords.value}));

  xhr.addEventListener('load', function() {
    clearPage(timeline);
    clearPage(jumbo);
    clearPage(friends);

    var responseObject = JSON.parse(xhr.responseText);
    console.log(responseObject);

    if (responseObject.locate !== true) {
      clearPage(timeline);
      clearPage(jumbo);
      clearPage(friends);
      jumbo.className = 'col-md-12';
      var noResults = document.createElement('p');
      noResults.className = 'no-results text-center';
      noResults.textContent = '\'' + responseObject.search + '\'' + ' was not found. Try searching for \'Ted Bell\'';

      jumbo.appendChild(noResults);
    }
    else {
      var theTimeline = responseObject.matched.posts;
      var active = responseObject.active;
      var activeFriends = responseObject.active.friends;
      var matched = responseObject.matched;
      var matchedFriends = responseObject.matched.friends;

      timeline.className = 'col-md-9';
      showPosts(theTimeline);


      friends.className = 'col-md-3 buffer';
      showFriends(matchedFriends);
      showJumbo(matched, active);
    }

  });
});

function showJumbo(matched, active) {

  var column = document.createElement('div');
  column.className = 'col-md-12';

  var banner = document.createElement('img');
  banner.className = 'timeline-photo';
  banner.setAttribute('src', matched.banner);
  banner.setAttribute('width', '100%');
  banner.setAttribute('height', '315px');

  var panel = document.createElement('div');
  panel.className = 'panel panel-default';

  var imageLg = document.createElement('img');
  imageLg.className = 'user-img-lg img-thumbnail';
  imageLg.setAttribute('src', matched.image);
  imageLg.setAttribute('width', '150px');

  var name = document.createElement('h3');
  name.className = "user-name";
  name.textContent = matched.name;

  var panelBody = document.createElement('div');
  panelBody.className = 'panel-body bg-info buffer-sm';

  var  aboutCol = document.createElement('div');
  aboutCol.className = 'col-md-4';

  var aboutUl = document.createElement('ul');

  var ListOne = document.createElement('li');
  ListOne.textContent = matched.about[0];

  var ListTwo = document.createElement('li');
  ListTwo.textContent = matched.about[1];

  var photoCol = document.createElement('div');
  photoCol.className = 'col-md-2 col-md-offset-1';

  for (var i = 6; i < matched.photos.length && i > 0; i--) {
    var photo = document.createElement('img');
    photo.setAttribute('src', matched.photos[i]);
    photo.setAttribute('class', 'img-thumbnail');
    photo.setAttribute('width', '40px');

    photoCol.appendChild(photo)
  }

  var addCol = document.createElement('div');
  addCol.className = 'col-md-2 col-md-offset-3';

  var jumboFooter = document.createElement('div');
  jumboFooter.className = 'panel-body footer-sm';

  var jumboLabelAboutCol = document.createElement('div');
  jumboLabelAboutCol.className = 'col-md-4 col-md-offset-1'

  var jumboLabelAbout = document.createElement('p');
  jumboLabelAbout.textContent = 'About'
  jumboLabelAbout.className = 'jumbo-label-buffer jumbo-about-buffer'

  var jumboLabelPhotosCol = document.createElement('div');
  jumboLabelPhotosCol.className = 'col-md-2'

  var jumboPhotoLink = document.createElement('a');
  jumboPhotoLink.setAttribute('href', '#');


  var jumboLabelPhotos = document.createElement('p');
  jumboLabelPhotos.textContent = 'Photos'
  jumboLabelPhotos.className = 'jumbo-label-buffer'
  jumboLabelPhotos.setAttribute('data-id', 'photos');

  column.appendChild(banner);
  aboutUl.appendChild(ListOne);
  aboutUl.appendChild(ListTwo);
  aboutCol.appendChild(aboutUl);
  panelBody.appendChild(aboutCol);
  panelBody.appendChild(photoCol)
  panelBody.appendChild(addCol);
  jumboLabelAboutCol.appendChild(jumboLabelAbout);
  jumboFooter.appendChild(jumboLabelAboutCol);
  jumboLabelPhotosCol.appendChild(jumboLabelPhotos);
  jumboPhotoLink.appendChild(jumboLabelPhotos);
  jumboLabelPhotosCol.appendChild(jumboPhotoLink);
  jumboFooter.appendChild(jumboLabelPhotosCol);
  panel.appendChild(imageLg);
  panel.appendChild(name);
  panel.appendChild(panelBody);
  panel.appendChild(jumboFooter);
  column.appendChild(panel);
  jumbo.appendChild(column);

  var myFriend = false;

  if (matched.name !== active.name) {

    var add = document.createElement('button');
    add.setAttribute('type', 'button');
    add.setAttribute('id', 'add-friend');
    add.setAttribute('data-id', matched.id);
    add.setAttribute('class', 'btn btn-primary add-remove');


    for (var i = 0; i < matched.friends.length; i++) {
      if (matched.friends[i].name === active.name) {
        myFriend = true;
      }
    }
    if (myFriend) {
      add.textContent = 'Kill Friend';
      add.setAttribute('class', 'btn btn-danger add-remove');
    }
    else {
      add.textContent = 'Add Friend';
      add.setAttribute('class', 'btn btn-primary add-remove');
    }

    addCol.appendChild(add);
  }
}

function showFriends(friend) {
  for (var i = 0; i < friend.length; i++) {
    var friendThumbnail = document.createElement('img');
    friendThumbnail.setAttribute('src', friend[i].image);
    friendThumbnail.setAttribute('alt', friend[i].name);
    friendThumbnail.setAttribute('data-id', friend[i].id);
    friendThumbnail.setAttribute('class', 'img-thumbnail');
    friendThumbnail.setAttribute('width', '84px');

    friends.appendChild(friendThumbnail);
  }
}

function showPhotos(photo) {
  for (var i = 1; i < photo.length; i++) {
    var photoThumbnail = document.createElement('img');
    photoThumbnail.setAttribute('src', photo[i]);
    photoThumbnail.setAttribute('class', 'img-thumbnail photo-thumbs');
    photoThumbnail.setAttribute('width', '135px');
    timeline.appendChild(photoThumbnail);
  }
  var defaultPhoto = document.createElement('img');
  defaultPhoto.setAttribute('src', photo[0]);
  defaultPhoto.setAttribute('class', 'img-thumbnail');
  defaultPhoto.setAttribute('width', '810px');
  timeline.appendChild(defaultPhoto);
}

function getPalmed(button, likes) {
  var parent = button.parentElement;
  console.log(button.name);
  if (button.name === 'palm' && button.textContent === 'Palm') {
    for (var i = 0; i < likes.length; i++) {
      var palmContributor = document.createElement('img');
      palmContributor.className = 'palm-contributor';
      palmContributor.setAttribute('src', likes[i].image);
      palmContributor.setAttribute('width', '40px');

      parent.appendChild(palmContributor);
    }
    button.textContent = 'UnPalm'
  }
  else if (button.name === 'palm' && button.textContent === 'UnPalm') {
    button.textContent = 'Palm';
    var child = document.getElementsByClassName('palm-contributor');
    parent.removeChild(child[0]);
  }
}


function showPosts(post) {
  for (var i = 0; i < post.length; i++) {
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
    userImage.setAttribute('src', post[i].thumbnail);
    userImage.setAttribute('width', '45px');

    var mediaBody = document.createElement('div');
    mediaBody.setAttribute('class', 'media-body');

    var linkName = document.createElement('a');
    linkName.setAttribute('href', '#');

    var poster = document.createElement('h5');
    poster.setAttribute('class', 'media-heading');
    poster.textContent = post[i].poster;

    var hr = document.createElement('hr');

    var messageBody = document.createElement('p');
    messageBody.textContent = post[i].post;

    var panelFooter = document.createElement('div');
    panelFooter.setAttribute('class', 'panel-footer');

    var palm = document.createElement('a');
    palm.setAttribute('href', '#');
    palm.setAttribute('name', 'palm');
    palm.setAttribute('data-id', post[i].postID)
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
    timeline.appendChild(panel);
  }
}
