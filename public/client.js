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
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/timeline/');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify({click: clickID, active: activeUser}));

  xhr.addEventListener('load', function() {
    var responseObject = JSON.parse(xhr.responseText);
    console.log(responseObject);

    var palmed = document.getElementsByTagName('a');
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
    var theTimeline = responseObject.posts;
    var userFriends = responseObject.friends;

    for (var j = 0; j < userFriends.length; j++) {
      otherFriends.push(userFriends[j]);
    }

    timeline.className = 'col-md-6'

    for (var i = 0; i < theTimeline.length; i++) {

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
      userImage.setAttribute('src', theTimeline[i].thumbnail);
      userImage.setAttribute('width', '45px');

      var mediaBody = document.createElement('div');
      mediaBody.setAttribute('class', 'media-body');

      var linkName = document.createElement('a');
      linkName.setAttribute('href', '#');

      var poster = document.createElement('h5');
      poster.setAttribute('class', 'media-heading');
      poster.textContent = theTimeline[i].poster;

      var hr = document.createElement('hr');

      var messageBody = document.createElement('p');
      messageBody.textContent = theTimeline[i].post;

      var panelFooter = document.createElement('div');
      panelFooter.setAttribute('class', 'panel-footer');

      var palm = document.createElement('a');
      palm.setAttribute('href', '#');
      palm.setAttribute('name', 'palm');
      palm.setAttribute('data-id', theTimeline[i].postID)
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
    clearPage(friends);
    friends.className = 'col-md-3 buffer';

    for (var i = 0; i < userFriends.length; i++) {
      showFriends(userFriends[i])
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
    imageLg.setAttribute('src', responseObject.image);
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

    if (responseObject.name !== activeUser.name) {

      var add = document.createElement('button');
      add.setAttribute('type', 'button');
      add.setAttribute('id', 'add-friend');
      add.setAttribute('data-id', responseObject.id)
      add.setAttribute('class', 'btn btn-primary');


      for (var i = 0; i < responseObject.friends.length; i++) {
        if (responseObject.friends[i].name === activeUser.name) {
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

// timeline.addEventListener('click', function(event) {
//   event.preventDefault();
//
//   var click = event.target;
//   var buttonText = click.textContent;
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', '/palm/');
//   xhr.setRequestHeader('Content-type', 'application/json');
//   xhr.send(JSON.stringify({text: buttonText}));
//
//   xhr.addEventListener('load', function() {
//     if (xhr.responseText !== 'y') {
//       click.textContent = 'UnPalm';
//       console.log('Palmed!')
//     }
    // else if (xhr.responseText === 'unpalm') {
    //   click.textContent = 'Palm';
    //   console.log('UnPalmed!')
    // }
//
//     clearPage(timeline);
//     var responseObject = JSON.parse(xhr.responseText);
//     var posts = responseObject.posts;
//     var friends = responseObject.friends;
//     console.log(friends);
//
//     for (var i = 0; i < posts.length; i++) {
//
//       var panel = document.createElement('div');
//       panel.setAttribute('class', 'panel panel-default buffer');
//
//       var panelBody = document.createElement('div');
//       panelBody.setAttribute('class', 'panel-body');
//
//       var media = document.createElement('div');
//       media.setAttribute('class', 'media');
//
//       var mediaLeft = document.createElement('div');
//       mediaLeft.setAttribute('class', 'media-left');
//
//       var linkImage = document.createElement('a');
//       linkImage.setAttribute('href', '#');
//
//       var userImage = document.createElement('img');
//       userImage.className = 'media-object';
//       userImage.setAttribute('src', responseObject.image);
//       userImage.setAttribute('width', '45px');
//
//       var mediaBody = document.createElement('div');
//       mediaBody.setAttribute('class', 'media-body');
//
//       var linkName = document.createElement('a');
//       linkName.setAttribute('href', '#');
//
//       var poster = document.createElement('h5');
//       poster.setAttribute('class', 'media-heading');
//       poster.textContent = responseObject.name;
//
//       var hr = document.createElement('hr');
//
//       var messageBody = document.createElement('p');
//       messageBody.textContent = responseObject.posts[i];
//
//       var panelFooter = document.createElement('div');
//       panelFooter.setAttribute('class', 'panel-footer');
//
//       var palm = document.createElement('a');
//       palm.setAttribute('href', '#');
//       palm.textContent = 'Palm';
//
//       linkName.appendChild(poster);
//       mediaBody.appendChild(linkName);
//       media.appendChild(mediaLeft);
//       media.appendChild(mediaBody);
//       media.appendChild(hr);
//       linkImage.appendChild(userImage);
//       mediaLeft.appendChild(linkImage);
//       media.appendChild(messageBody);
//       panelBody.appendChild(media);
//       panel.appendChild(panelBody);
//       panelFooter.appendChild(palm);
//       panel.appendChild(panelFooter);
//       timeline.appendChild(panel);
//     }
//   })
// })

function showFriends(user) {
  var friendThumbnail = document.createElement('img');
  friendThumbnail.setAttribute('src', user.image);
  friendThumbnail.setAttribute('alt', user.name);
  friendThumbnail.setAttribute('class', 'img-thumbnail');
  friendThumbnail.setAttribute('width', '84px');

  friends.appendChild(friendThumbnail);
}

function showPosts(user) {

}
