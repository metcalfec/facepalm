var navbarHome = document.getElementById('nav-bar-home');
var navbarProfile = document.getElementById('nav-bar-profile');
var keywords = document.getElementById('keywords');
var search = document.getElementById('search');
var jumbo = document.getElementById('jumbo');
var timeline = document.getElementById('timeline');
var friends = document.getElementById('friends');
var currentUser = document.getElementById('current-user');
var map = document.getElementsByClassName('map-preview');
var home = document.getElementById('home');
var activeUserFriends = [];
var otherFriends = [];

////////////////////////////////////////////////////////////////////////////////
//Navbar Event Delegation
////////////////////////////////////////////////////////////////////////////////

navbarHome.addEventListener('click', function(event) {
  event.preventDefault();
  var click = event.target;
  var clickID = click.getAttribute('data-id');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/home/');
  xhr.send();

  xhr.addEventListener('load', function() {
    window.scroll(0, 0);
    clearPage(timeline);
    clearPage(jumbo);
    clearPage(friends);
    clearPage(home);
    var landing = document.createElement('img');
    landing.setAttribute('src', 'images/face-palm-cover.jpg');
    landing.setAttribute('width', '100%');
    friends.className = 'buffer';
    home.className = '';
    home.appendChild(landing);
  })
})

navbarProfile.addEventListener('click', function(event) {
  event.preventDefault();
  var click = event.target;
  var clickID = click.getAttribute('data-id');
  var clickText = click.textContent;
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/profile/');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify({ID: clickID, text: clickText}));

  xhr.addEventListener('load', function() {
    window.scroll(0, 0);
    var responseObject = JSON.parse(xhr.responseText);
    clearPage(timeline);
    clearPage(jumbo);
    clearPage(friends);
    home.className = 'hide';
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

  })
})

////////////////////////////////////////////////////////////////////////////////
//Timeline Event Delegation
////////////////////////////////////////////////////////////////////////////////

timeline.addEventListener('click', function(event) {
  event.preventDefault();
  var click = event.target;
  var clickID = click.getAttribute('data-id');
  var buttonText = click.textContent;
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/timeline/');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify({click: clickID, text: buttonText}));

  xhr.addEventListener('load', function() {
    var responseObject = JSON.parse(xhr.responseText);
    if (responseObject.palm === true) {
      var userLiked = responseObject.userLiked;
      getPalmed(click, userLiked);
    }
    else if (responseObject.back === true) {
      window.scroll(0, 0);
      clearPage(timeline);
      clearPage(jumbo);
      clearPage(friends);
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
    else {
      window.scroll(0, 0);
      clearPage(timeline);
      clearPage(jumbo);
      clearPage(friends);
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

////////////////////////////////////////////////////////////////////////////////
//Friends Event Delegation
////////////////////////////////////////////////////////////////////////////////

friends.addEventListener('click', function(event) {
  var click = event.target;
  var friendID = click.getAttribute('data-id');
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/view-friend/');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify({friend: friendID}));

  xhr.addEventListener('load', function() {
    window.scroll(0, 0);
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
    var unfriend = document.getElementsByTagName('button');
    if (responseObject.targetClick === 'Photos') {
      window.scroll(0, 550);
      clearPage(friends);
      clearPage(timeline);
      timeline.className = 'col-md-12';
      var title = document.createElement('h1');
      title.textContent = 'Photos';
      title.className = 'title-photo';
      var link = document.createElement('a');
      link.setAttribute('href', '#');
      var back = document.createElement('h5');
      back.textContent = 'back to profile';
      back.setAttribute('data-id', responseObject.profile.id)
      back.className = 'back-to-profile';
      var hr = document.createElement('hr');
      timeline.appendChild(title);
      link.appendChild(back);
      timeline.appendChild(link);
      timeline.appendChild(hr);
      if (responseObject.activeUser === true) {
        showPhotos(responseObject.photos);
      }
      else {
        unfriend[1].className = 'hide';
        map[0].className = 'map-preview-shift';
        showPhotos(responseObject.photos);
      }
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
  xhr.send(JSON.stringify({search: keywords.value.toLowerCase()}));

  xhr.addEventListener('load', function() {
    window.scroll(0, 0);
    clearPage(timeline);
    clearPage(jumbo);
    clearPage(friends);
    var responseObject = JSON.parse(xhr.responseText);
    if (responseObject.locate !== true) {
      clearPage(home);
      var landing = document.createElement('img');
      landing.setAttribute('src', 'images/face-palm-cover.jpg');
      landing.setAttribute('width', '100%');
      var noResults = document.createElement('p');
      noResults.className = 'no-results text-center';
      noResults.textContent = '\'' + responseObject.search + '\'' + ' was not found. Try searching for \'Ted Bell\'';
      friends.className = 'buffer';
      home.className = '';
      home.appendChild(landing);
      home.appendChild(noResults);
    }
    else {
      home.className = 'hide';
      var theTimeline = responseObject.matched.posts;
      var active = responseObject.active;
      var activeFriends = responseObject.active.friends;
      var matched = responseObject.matched;
      var matchedFriends = responseObject.matched.friends;
      timeline.className = 'col-md-9';
      showPosts(theTimeline, active);
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
  name.textContent = titleCase(matched.name);;

  var panelBody = document.createElement('div');
  panelBody.className = 'panel-body bg-info buffer-sm';

  var  aboutCol = document.createElement('div');
  aboutCol.className = 'col-md-4';

  var aboutUl = document.createElement('ul');

  var ListOne = document.createElement('li');
  ListOne.textContent = matched.about[0];

  var ListTwo = document.createElement('li');
  ListTwo.textContent = matched.about[1];

  var ListThree = document.createElement('li');
  ListThree.textContent = matched.about[2];

  var ListFour = document.createElement('li');
  ListFour.textContent = matched.about[3];

  var photoCol = document.createElement('div');
  photoCol.className = 'col-md-2 col-md-offset-1';

  for (var i = 6; i < matched.photos.length && i > 0; i--) {
    var photoDiv = document.createElement('div');
    photoDiv.className = 'thumb-preview';
    var photo = document.createElement('img');
    photo.setAttribute('src', matched.photos[i]);
    photoDiv.appendChild(photo);
    photoCol.appendChild(photoDiv);
  }

  if (matched.name == active.name) {
    var mapCol = document.createElement('div');
    mapCol.className = 'col-md-2 col-md-offset-2';

    var mapDiv = document.createElement('div');
    mapDiv.className = 'map-preview-shift';

    var map = document.createElement('img');
    map.setAttribute('src', matched.map);
  }

  else {
    var mapCol = document.createElement('div');
    mapCol.className = 'col-md-2 col-md-offset-2';

    var mapDiv = document.createElement('div');
    mapDiv.className = 'map-preview';

    var map = document.createElement('img');
    map.setAttribute('src', matched.map);
  }

  var addCol = document.createElement('div');
  addCol.className = 'col-md-2 col-md-offset-3';

  var jumboFooter = document.createElement('div');
  jumboFooter.className = 'panel-body footer-sm';

  var jumboLabelAboutCol = document.createElement('div');
  jumboLabelAboutCol.className = 'col-md-4 col-md-offset-1';

  var jumboLabelAbout = document.createElement('p');
  jumboLabelAbout.textContent = 'About';
  jumboLabelAbout.className = 'jumbo-label-buffer jumbo-about-buffer';

  var jumboLabelPhotosCol = document.createElement('div');
  jumboLabelPhotosCol.className = 'col-md-2';

  var jumboPhotoLink = document.createElement('a');
  jumboPhotoLink.setAttribute('href', '#');

  var jumboLabelPhotos = document.createElement('p');
  jumboLabelPhotos.textContent = 'Photos';
  jumboLabelPhotos.className = 'jumbo-label-buffer';
  jumboLabelPhotos.setAttribute('data-id', matched.id);

  var jumboLabelMapCol = document.createElement('div');
  jumboLabelMapCol.className = 'col-md-4';

  var jumboLabelMap = document.createElement('p');
  jumboLabelMap.textContent = 'Map';
  jumboLabelMap.className = 'jumbo-label-buffer jumbo-map-buffer';

  column.appendChild(banner);
  aboutUl.appendChild(ListOne);
  aboutUl.appendChild(ListTwo);
  aboutUl.appendChild(ListThree);
  aboutUl.appendChild(ListFour);
  aboutCol.appendChild(aboutUl);
  mapDiv.appendChild(map);
  mapCol.appendChild(mapDiv);
  panelBody.appendChild(aboutCol);
  panelBody.appendChild(photoCol);
  panelBody.appendChild(addCol);
  panelBody.appendChild(mapCol);
  jumboLabelAboutCol.appendChild(jumboLabelAbout);
  jumboFooter.appendChild(jumboLabelAboutCol);
  jumboPhotoLink.appendChild(jumboLabelPhotos);
  jumboLabelPhotosCol.appendChild(jumboPhotoLink);
  jumboFooter.appendChild(jumboLabelPhotosCol);
  jumboLabelMapCol.appendChild(jumboLabelMap);
  jumboFooter.appendChild(jumboLabelMapCol);
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
  var panel = document.createElement('div');
  panel.className = 'panel panel-default';
  var panelBody = document.createElement('div');
  panelBody.className = 'panel-body bg-info';
  for (var i = 0; i < friend.length; i++) {
    var friendThumbnail = document.createElement('img');
    friendThumbnail.setAttribute('src', friend[i].image);
    friendThumbnail.setAttribute('alt', friend[i].name);
    friendThumbnail.setAttribute('data-id', friend[i].id);
    friendThumbnail.setAttribute('class', 'img-thumbnail');
    friendThumbnail.setAttribute('width', '75px');
    panelBody.appendChild(friendThumbnail);
  }
  panel.appendChild(panelBody);
  friends.appendChild(panel)
}

function showPhotos(photo) {
  for (var i = 0; i < photo.length; i++) {
    var thumbDiv = document.createElement('div');
    thumbDiv.className = 'thumb';
    var a = document.createElement('a');
    a.setAttribute('href', '#');
    a.setAttribute('data-toggle', 'modal');
    a.setAttribute('data-target', '#myModal');
    a.setAttribute('data-id', 1);
    var photoThumbnail = document.createElement('img');
    photoThumbnail.setAttribute('src', photo[i]);
    a.appendChild(photoThumbnail);
    thumbDiv.appendChild(a);
    timeline.appendChild(thumbDiv);
  }
  var hr = document.createElement('hr');
  var br = document.createElement('br');
  br.className = 'photo-br';
  timeline.appendChild(hr);
  timeline.appendChild(br);
}

function getPalmed(button, likes) {
  var parent = button.parentElement;
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

function showPosts(post, active) {
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
    userImage.setAttribute('data-id', post[i].posterID);
    userImage.setAttribute('width', '45px');

    var mediaBody = document.createElement('div');
    mediaBody.setAttribute('class', 'media-body');

    var linkName = document.createElement('a');
    linkName.setAttribute('href', '#');

    var poster = document.createElement('h5');
    poster.setAttribute('class', 'media-heading');
    poster.setAttribute('data-id', post[i].posterID);
    poster.textContent = titleCase(post[i].poster);

    var hr = document.createElement('hr');

    var messageBody = document.createElement('p');
    messageBody.textContent = post[i].post;

    var panelFooter = document.createElement('div');
    panelFooter.setAttribute('class', 'panel-footer');

    var palm = document.createElement('a');
    palm.setAttribute('href', '#');
    palm.setAttribute('name', 'palm');
    palm.setAttribute('data-id', post[i].postID);
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

function titleCase(name) {
  var nameArray = name.toLowerCase().split(' ');
  for (var i = 0; i < nameArray.length; i++) {
    var x = nameArray[i].charAt(0);
    nameArray[i] = nameArray[i].replace(nameArray[i].charAt(0), function replace(x) {
      return x.toUpperCase();
    });
  }
  return nameArray.join(' ');
}

function clearPage(parent) {
  if (parent) {
    parent.className = "";
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
}
