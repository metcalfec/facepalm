var keywords = document.getElementById('keywords');
var search = document.getElementById('search');
var jumbo = document.getElementById('jumbo');
var timeline = document.getElementById('timeline');
// var page = document.getElementsByClassName('clicks');
var friends = document.getElementById('friends');
var currentUser = document.getElementById('current-user');

var activeUser = {
  name: 'Rick Sunderland'
}

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

  var theClick = event.target;
  var clickID = theClick.getAttribute('data-id');
  var buttonText = theClick.textContent;
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/timeline/');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify({click: clickID, text: buttonText, active: activeUser}));

  xhr.addEventListener('load', function() {
    var responseObject = JSON.parse(xhr.responseText);
    console.log(responseObject);

    var palmed = document.getElementsByTagName('a');
    if (palmed[4].textContent === 'Palm') {
      palmed[4].textContent = 'UnPalm';
    }
    else {
      palmed[4].textContent = 'Palm';
    }
    palmed[4].textContent = 'PALMED';



  });
});

jumbo.addEventListener('click', function(event) {

  var click = event.target;
  var buttonId = click.getAttribute('data-id');
  var buttonText = click.textContent;
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/add_friend/');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify({button: buttonId, active: activeUser, text: buttonText}));

  xhr.addEventListener('load', function() {
    var responseObject = JSON.parse(xhr.responseText);
    console.log(responseObject);
    clearPage(friends);
    friends.className = 'col-md-3 buffer';
    for (var i =0; i < responseObject.length; i++) {

      showFriends(responseObject[i]);
    }
    var unfriend = document.getElementsByTagName('button');
    if (unfriend[1].textContent === 'Add Friend') {
      unfriend[1].textContent = 'Kill Friend';
      unfriend[1].className = 'btn btn-danger';
    }
    else {
      unfriend[1].textContent = 'Add Friend';
      unfriend[1].className = 'btn btn-primary';
    }


  });
});


////////////////////////////////////////////////////////////////////////////////
//Search and View Users
////////////////////////////////////////////////////////////////////////////////

search.addEventListener('submit', function(event) {
  event.preventDefault();

  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/search/');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify({search: keywords.value, active: activeUser}));

  xhr.addEventListener('load', function() {
    clearPage(timeline);
    clearPage(jumbo);

    var responseObject = JSON.parse(xhr.responseText);
    console.log(responseObject);
    var theTimeline = responseObject.matched.posts;
    var activeFriends = responseObject.active.friends
    var userFriends = responseObject.matched.friends;


    for (var j = 0; j < userFriends.length; j++) {
      otherFriends.push(userFriends[j]);
    }

    timeline.className = 'col-md-6'

    for (var i = 0; i < theTimeline.length; i++) {
      showPosts(theTimeline[i]);
    }

    clearPage(friends);

    friends.className = 'col-md-3 buffer';

    for (var i = 0; i < activeFriends.length; i++) {
      showFriends(activeFriends[i])
    }

    var column = document.createElement('div');
    column.className = 'col-md-12'

    var banner = document.createElement('img');
    banner.className = 'timeline-photo';
    banner.setAttribute('src', responseObject.matched.banner);
    banner.setAttribute('width', '100%');
    banner.setAttribute('height', '315px');

    var panel = document.createElement('div');
    panel.className = 'panel panel-default'

    var imageLg = document.createElement('img');
    imageLg.className = 'user-img-lg';
    imageLg.setAttribute('src', responseObject.matched.image);
    imageLg.setAttribute('width', '150px');

    var name = document.createElement('h3');
    name.className = "user-name";
    name.textContent = responseObject.matched.name;

    var panelBody = document.createElement('div');
    panelBody.className = 'panel-body';

    var  aboutCol = document.createElement('div');
    aboutCol.className = 'col-md-4';

    var aboutUl = document.createElement('ul');

    var ListOne = document.createElement('li');
    ListOne.textContent = responseObject.matched.about[0];

    var ListTwo = document.createElement('li');
    ListTwo.textContent = responseObject.matched.about[1];

    var addCol = document.createElement('div');
    addCol.className = 'col-md-2 col-md-offset-6'

    column.appendChild(banner);
    aboutUl.appendChild(ListOne);
    aboutUl.appendChild(ListTwo);
    aboutCol.appendChild(aboutUl);
    panelBody.appendChild(aboutCol);

    panelBody.appendChild(addCol);
    panel.appendChild(imageLg);
    panel.appendChild(name);
    panel.appendChild(panelBody);
    column.appendChild(panel);
    jumbo.appendChild(column);

    var myFriend = false;

    if (responseObject.matched.name !== activeUser.name) {

      var add = document.createElement('button');
      add.setAttribute('type', 'button');
      add.setAttribute('id', 'add-friend');
      add.setAttribute('data-id', responseObject.matched.id)
      add.setAttribute('class', 'btn btn-primary');


      for (var i = 0; i < responseObject.matched.friends.length; i++) {
        if (responseObject.matched.friends[i].name === activeUser.name) {
          myFriend = true;
        }
      }
      if (myFriend) {
        add.textContent = 'Kill Friend';
        add.setAttribute ('class', 'btn btn-danger')
      }
      else {
        add.textContent = 'Add Friend';
      }

      addCol.appendChild(add);
    }
  });
});


function showFriends(friend) {
  var friendThumbnail = document.createElement('img');
  friendThumbnail.setAttribute('src', friend.image);
  friendThumbnail.setAttribute('alt', friend.name);
  friendThumbnail.setAttribute('class', 'img-thumbnail');
  friendThumbnail.setAttribute('width', '84px');

  friends.appendChild(friendThumbnail);
}


function showPosts(param) {

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
  userImage.setAttribute('src', param.thumbnail);
  userImage.setAttribute('width', '45px');

  var mediaBody = document.createElement('div');
  mediaBody.setAttribute('class', 'media-body');

  var linkName = document.createElement('a');
  linkName.setAttribute('href', '#');

  var poster = document.createElement('h5');
  poster.setAttribute('class', 'media-heading');
  poster.textContent = param.poster;

  var hr = document.createElement('hr');

  var messageBody = document.createElement('p');
  messageBody.textContent = param.post;

  var panelFooter = document.createElement('div');
  panelFooter.setAttribute('class', 'panel-footer');

  var palm = document.createElement('a');
  palm.setAttribute('href', '#');
  palm.setAttribute('name', 'palm');
  palm.setAttribute('data-id', param.postID)
  palm.textContent = 'Palm';

  var palmCount = document.createElement('p');
  palmCount.className = 'palm-count';
  palmCount.textContent = param.likes;

  var palmContributor = document.createElement('img');
  if (param.likes > 0) {
    palmContributor.className = 'palm-contributor';
    palmContributor.setAttribute('src', param.userLiked);
    palmContributor.setAttribute('width', '40px');
  }
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
  panelFooter.appendChild(palmCount);
  panelFooter.appendChild(palmContributor);
  panel.appendChild(panelFooter);
  timeline.appendChild(panel);
}
