var users = [
  {
    id: 1,
    name: 'art griego',
    about: [
      'Retired Pilot',
      'Believes pilots need a drink to steady nerves',
      'Wrote the book \'The Art of Control\'',
      'Lives in Lancaster, CA'

    ],
    friends: [
      {
        name: 'austin amarka',
        image: 'images/austin-amarka-profile.jpg',
        id: 2
      },
      {
        name: 'bob bakian',
        image: 'images/bob-bakian-profile.jpg',
        id: 3
      },
      {
        name: 'bob green',
        image: 'images/bob-green-profile.jpg',
        id: 4
      },
      {
        name: 'bobbie dooley',
        image: 'images/bobbie-dooley-profile.jpg',
        id: 5
      },
      {
        name: 'bud dickman',
        image: 'images/bud-dickman-profile.jpg',
        id: 6
      },
      {
        name: 'chris norton',
        image: 'images/chris-norton-profile.jpg',
        id: 7
      },
      {
        name: 'david hall',
        image: 'images/david-hall-profile.jpg',
        id: 8
      },
      {
        name: 'dean wheeler',
        image: 'images/dean-wheeler-profile.jpg',
        id: 9
      },
      {
        name: 'harvey wireman',
        image: 'images/harvey-wireman-profile.jpg',
        id: 10
      },
      {
        name: 'jay santos',
        image: 'images/jay-santos-profile.jpg',
        id: 11
      },
      {
        name: 'lloyd bonafide',
        image: 'images/lloyd-bonafide-profile.jpg',
        id: 12
      },
      {
        name: 'rick sunderland',
        image: 'images/rick-sunderland-profile.jpg',
        id: 13
      },
      {
        name: 'ted bell',
        image: 'images/ted-bell-profile.jpg',
        id: 14
      }
    ],
    friendsCount: 3,
    photos: [
      'https://upload.wikimedia.org/wikipedia/commons/b/b2/Piper_PA44-180_aircraft.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/9/9d/Piper_PA-34_Seneca_on_the_apron_of_London_Oxford_Airport,_Oxfordshire,_UK_-_20130124.jpg',
      'http://sportysnetwork.com/airfacts/wp-content/blogs.dir/13/files/2014/10/pipermalibu.jpg',
      'http://i.kinja-img.com/gawker-media/image/upload/s--rHNQRhFI--/c_scale,fl_progressive,q_80,w_800/evcfiodzajn1eqr284nw.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/PiperPA-28-236DakotaC-GGFSPhoto4.JPG',
      'https://s-media-cache-ak0.pinimg.com/736x/b8/bc/f5/b8bcf529145916ea902e4fe7509d938e.jpg',
      'http://keystoneaviation.com/wp-content/uploads/2013/10/1289852453_1.jpg'
    ],
    image: 'images/art-griego-profile.jpg',
    banner: 'images/art-griego-jumbo.jpg',
    posts: [
      {
        postID: 1001,
        poster: 'art griego',
        thumbnail: 'images/art-griego-profile.jpg',
        posterID: 1,
        post: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.',
        likes: 0,
        userLiked: [
          {
            name: 'art griego',
            image: 'images/art-griego-profile.jpg',
            id: 1
          }
        ]
      },
      {
        postID: 2001,
        poster: 'austin amarka',
        thumbnail: 'images/austin-amarka-profile.jpg',
        posterID: 2,
        post: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 3001,
        poster: 'bob bakian',
        thumbnail: 'images/bob-bakian-profile.jpg',
        posterID: 3,
        post: 'Ex quem audire vix, veri dicant hendrerit et cum. Vix at percipitur dissentiet, ea utamur periculis est. Sumo aperiri his ut, his id falli mazim pericula. Omnium facilis ea per. No affert graecis his.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 4001,
        poster: 'bob green',
        thumbnail: 'images/bob-green-profile.jpg',
        post: 'An mea fugit labitur fastidii, mel quot fugit eu. Eam cu appetere incorrupte, autem solet tamquam id duo, nam sonet persequeris suscipiantur an.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 5001,
        poster: 'bobbie dooley',
        thumbnail: 'images/bobbie-dooley-profile.jpg',
        post: 'Fugit nonumes vel cu, vis omnes offendit ponderum id, ea sed laoreet deterruisset. Pro nobis solet volumus no, ea nemore prompta accusamus qui.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 6001,
        poster: 'bud dickman',
        thumbnail: 'images/bud-dickman-profile.jpg',
        post: 'Pro in probo cotidieque, solet legimus ei duo. Fierent appellantur ullamcorper ad vis, ferri brute assum no vix.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 7001,
        poster: 'chris norton',
        thumbnail: 'images/chris-norton-profile.jpg',
        post: 'Pro in probo cotidieque, solet legimus ei duo. Fierent appellantur ullamcorper ad vis, ferri brute assum no vix.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 8001,
        poster: 'david hall',
        thumbnail: 'images/david-hall-profile.jpg',
        post: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 9001,
        poster: 'dean wheeler',
        thumbnail: 'images/dean-wheeler-profile.jpg',
        post: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 10001,
        poster: 'harvey wireman',
        thumbnail: 'images/harvey-wireman-profile.jpg',
        post: 'Ex quem audire vix, veri dicant hendrerit et cum. Vix at percipitur dissentiet, ea utamur periculis est. Sumo aperiri his ut, his id falli mazim pericula. Omnium facilis ea per. No affert graecis his.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 11001,
        poster: 'jay santos',
        thumbnail: 'images/jay-santos-profile.jpg',
        post: 'An mea fugit labitur fastidii, mel quot fugit eu. Eam cu appetere incorrupte, autem solet tamquam id duo, nam sonet persequeris suscipiantur an.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 12001,
        poster: 'lloyd bonafide',
        thumbnail: 'images/lloyd-bonafide-profile.jpg',
        post: 'Fugit nonumes vel cu, vis omnes offendit ponderum id, ea sed laoreet deterruisset. Pro nobis solet volumus no, ea nemore prompta accusamus qui.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 13001,
        poster: 'rick sunderland',
        thumbnail: 'images/rick-sunderland-profile.jpg',
        post: 'Pro in probo cotidieque, solet legimus ei duo. Fierent appellantur ullamcorper ad vis, ferri brute assum no vix.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 14001,
        poster: 'ted-bell',
        thumbnail: 'images/ted-bell-profile.jpg',
        post: 'Pro in probo cotidieque, solet legimus ei duo. Fierent appellantur ullamcorper ad vis, ferri brute assum no vix.',
        likes: 0,
        userLiked: []
      },
    ]
  },
  {
    id: 2,
    name: 'austin amarka',
    about: [
      'Mechanic and gas station operator',
      'Part-time job as a cabinetmaker',
      'Dislikes the Harry Potter books',
      'Lives in Los Angeles, CA'
    ],
    friends: [
      {
        name: 'art griego',
        image: 'images/art-griego-profile.jpg',
        id: 1
      },
      {
        name: 'bob bakian',
        image: 'images/bob-bakian-profile.jpg',
        id: 3
      },
      {
        name: 'bob green',
        image: 'images/bob-green-profile.jpg',
        id: 4
      },
      {
        name: 'bobbie dooley',
        image: 'images/bobbie-dooley-profile.jpg',
        id: 5
      },
      {
        name: 'bud dickman',
        image: 'images/bud-dickman-profile.jpg',
        id: 6
      },
      {
        name: 'chris norton',
        image: 'images/chris-norton-profile.jpg',
        id: 7
      },
      {
        name: 'david hall',
        image: 'images/david-hall-profile.jpg',
        id: 8
      },
      {
        name: 'dean wheeler',
        image: 'images/dean-wheeler-profile.jpg',
        id: 9
      },
      {
        name: 'harvey wireman',
        image: 'images/harvey-wireman-profile.jpg',
        id: 10
      },
      {
        name: 'jay santos',
        image: 'images/jay-santos-profile.jpg',
        id: 11
      },
      {
        name: 'lloyd bonafide',
        image: 'images/lloyd-bonafide-profile.jpg',
        id: 12
      },
      {
        name: 'rick sunderland',
        image: 'images/rick-sunderland-profile.jpg',
        id: 13
      },
      {
        name: 'ted bell',
        image: 'images/ted-bell-profile.jpg',
        id: 14
      }
    ],
    friendsCount: 3,
    photos: [
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg'
    ],
    image: 'images/austin-amarka-profile.jpg',
    banner: 'images/austin-amarka-jumbo.jpg',
    posts: [
      {
        postID: 114,
        poster: 'ted bell',
        thumbnail: 'images/ted-bell-profile.jpg',
        post: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 108,
        poster: 'david hall',
        thumbnail: 'images/david-hall-profile.jpg',
        post: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 103,
        poster: 'bob bakian',
        thumbnail: 'images/bob-bakian-profile.jpg',
        post: 'Ex quem audire vix, veri dicant hendrerit et cum. Vix at percipitur dissentiet, ea utamur periculis est. Sumo aperiri his ut, his id falli mazim pericula. Omnium facilis ea per. No affert graecis his.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 113,
        poster: 'rick sunderland',
        thumbnail: 'images/rick-sunderland-profile.jpg',
        post: 'An mea fugit labitur fastidii, mel quot fugit eu. Eam cu appetere incorrupte, autem solet tamquam id duo, nam sonet persequeris suscipiantur an.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 106,
        poster: 'bud dickman',
        thumbnail: 'images/bud-dickman-profile.jpg',
        post: 'Fugit nonumes vel cu, vis omnes offendit ponderum id, ea sed laoreet deterruisset. Pro nobis solet volumus no, ea nemore prompta accusamus qui.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 102,
        poster: 'austin amarka',
        thumbnail: 'images/austin-amarka-profile.jpg',
        post: 'Pro in probo cotidieque, solet legimus ei duo. Fierent appellantur ullamcorper ad vis, ferri brute assum no vix.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 110,
        poster: 'harvey wireman',
        thumbnail: 'images/harvey-wireman-profile.jpg',
        post: 'Pro in probo cotidieque, solet legimus ei duo. Fierent appellantur ullamcorper ad vis, ferri brute assum no vix.',
        likes: 0,
        userLiked: []
      }
    ]
  },
  {
    id: 3,
    name: 'bob bakian',
    about: [
      'Flys the Phil Hendrie Show news helicopter',
      'Sometimes works on Skippy & Frank\'s show',
      'Teamed up with \'Sky Boy\' and \'Sky Baby\'',
      'FLying somewhere over Los Angeles'
    ],
    friends: [
      {
        name: 'art griego',
        image: 'images/art-griego-profile.jpg',
        id: 1
      },
      {
        name: 'austin amarka',
        image: 'images/austin-amarka-profile.jpg',
        id: 2
      },
      {
        name: 'bob green',
        image: 'images/bob-green-profile.jpg',
        id: 4
      },
      {
        name: 'bobbie dooley',
        image: 'images/bobbie-dooley-profile.jpg',
        id: 5
      },
      {
        name: 'bud dickman',
        image: 'images/bud-dickman-profile.jpg',
        id: 6
      },
      {
        name: 'chris norton',
        image: 'images/chris-norton-profile.jpg',
        id: 7
      },
      {
        name: 'david hall',
        image: 'images/david-hall-profile.jpg',
        id: 8
      },
      {
        name: 'dean wheeler',
        image: 'images/dean-wheeler-profile.jpg',
        id: 9
      },
      {
        name: 'harvey wireman',
        image: 'images/harvey-wireman-profile.jpg',
        id: 10
      },
      {
        name: 'jay santos',
        image: 'images/jay-santos-profile.jpg',
        id: 11
      },
      {
        name: 'lloyd bonafide',
        image: 'images/lloyd-bonafide-profile.jpg',
        id: 12
      },
      {
        name: 'rick sunderland',
        image: 'images/rick-sunderland-profile.jpg',
        id: 13
      },
      {
        name: 'ted bell',
        image: 'images/ted-bell-profile.jpg',
        id: 14
      }
    ],
    friendsCount: 3,
    photos: [
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg'
    ],
    image: 'images/bob-bakian-profile.jpg',
    banner: 'images/bob-bakian-jumbo.jpg',
    posts: [
      {
        postID: 101,
        poster: 'Ted Bell',
        thumbnail: 'images/Ted-Bell-profile.jpg',
        post: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 102,
        poster: 'Art Griego',
        thumbnail: 'images/Art-Griego-profile.jpg',
        post: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 103,
        poster: 'Jay Santos',
        thumbnail: 'images/Jay-Santos-profile.jpg',
        post: 'Ex quem audire vix, veri dicant hendrerit et cum. Vix at percipitur dissentiet, ea utamur periculis est. Sumo aperiri his ut, his id falli mazim pericula. Omnium facilis ea per. No affert graecis his.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 104,
        poster: 'Rick Sunderland',
        thumbnail: 'images/Rick-Sunderland-profile.jpg',
        post: 'An mea fugit labitur fastidii, mel quot fugit eu. Eam cu appetere incorrupte, autem solet tamquam id duo, nam sonet persequeris suscipiantur an.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 105,
        poster: 'Lloyd Bonafide',
        thumbnail: 'images/Lloyd-Bonafide-profile.jpg',
        post: 'Fugit nonumes vel cu, vis omnes offendit ponderum id, ea sed laoreet deterruisset. Pro nobis solet volumus no, ea nemore prompta accusamus qui.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 106,
        poster: 'Art Griego',
        thumbnail: 'images/Art-Griego-profile.jpg',
        post: 'Pro in probo cotidieque, solet legimus ei duo. Fierent appellantur ullamcorper ad vis, ferri brute assum no vix.',
        likes: 0,
        userLiked: []
      }
    ]
  },
  {
    id: 4,
    name: 'bob green',
    about: [
      'Owner of Frazier Food',
      'Thaws frozen turkeys and sells them as \'fresh\'',
      'Wears a $15,000 \'hair system\'',
      'Lives in Buena Park, CA'
    ],
    friends: [
      {
        name: 'art griego',
        image: 'images/art-griego-profile.jpg',
        id: 1
      },
      {
        name: 'austin amarka',
        image: 'images/austin-amarka-profile.jpg',
        id: 2
      },
      {
        name: 'bob bakian',
        image: 'images/bob-bakian-profile.jpg',
        id: 3
      },
      {
        name: 'bobbie dooley',
        image: 'images/bobbie-dooley-profile.jpg',
        id: 5
      },
      {
        name: 'bud dickman',
        image: 'images/bud-dickman-profile.jpg',
        id: 6
      },
      {
        name: 'chris norton',
        image: 'images/chris-norton-profile.jpg',
        id: 7
      },
      {
        name: 'david hall',
        image: 'images/david-hall-profile.jpg',
        id: 8
      },
      {
        name: 'dean wheeler',
        image: 'images/dean-wheeler-profile.jpg',
        id: 9
      },
      {
        name: 'harvey wireman',
        image: 'images/harvey-wireman-profile.jpg',
        id: 10
      },
      {
        name: 'jay santos',
        image: 'images/jay-santos-profile.jpg',
        id: 11
      },
      {
        name: 'lloyd bonafide',
        image: 'images/lloyd-bonafide-profile.jpg',
        id: 12
      },
      {
        name: 'rick sunderland',
        image: 'images/rick-sunderland-profile.jpg',
        id: 13
      },
      {
        name: 'ted bell',
        image: 'images/ted-bell-profile.jpg',
        id: 14
      }
    ],
    friendsCount: 3,
    photos: [
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg'
    ],
    image: 'images/bob-green-profile.jpg',
    banner: 'images/bob-green-jumbo.jpg',
    posts: [
      {
        postID: 101,
        poster: 'Ted Bell',
        thumbnail: 'images/Ted-Bell-profile.jpg',
        post: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.',
        likes: 0,
        userLiked: [
          // {
          //   name: 'Lloyd Bonafide',
          //   image: 'images/Lloyd-Bonafide-profile.jpg',
          //   id: 2
          // }
        ]
      },
      {
        postID: 102,
        poster: 'Art Griego',
        thumbnail: 'images/Art-Griego-profile.jpg',
        post: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 103,
        poster: 'Jay Santos',
        thumbnail: 'images/Jay-Santos-profile.jpg',
        post: 'Ex quem audire vix, veri dicant hendrerit et cum. Vix at percipitur dissentiet, ea utamur periculis est. Sumo aperiri his ut, his id falli mazim pericula. Omnium facilis ea per. No affert graecis his.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 104,
        poster: 'Rick Sunderland',
        thumbnail: 'images/Rick-Sunderland-profile.jpg',
        post: 'An mea fugit labitur fastidii, mel quot fugit eu. Eam cu appetere incorrupte, autem solet tamquam id duo, nam sonet persequeris suscipiantur an.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 105,
        poster: 'Lloyd Bonafide',
        thumbnail: 'images/Lloyd-Bonafide-profile.jpg',
        post: 'Fugit nonumes vel cu, vis omnes offendit ponderum id, ea sed laoreet deterruisset. Pro nobis solet volumus no, ea nemore prompta accusamus qui.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 106,
        poster: 'Art Griego',
        thumbnail: 'images/Art-Griego-profile.jpg',
        post: 'Pro in probo cotidieque, solet legimus ei duo. Fierent appellantur ullamcorper ad vis, ferri brute assum no vix.',
        likes: 0,
        userLiked: []
      }
    ]
  },
  {
    id: 5,
    name: 'bobbie dooley',
    about: [
      'President of Western Estates',
      'Runs the \'Fall-Summer-tacular\'',
      'Loves her \'banana yellow\' pant-suit',
      'Lives behind the gates of Western Estates'
    ],
    friends: [
      {
        name: 'art griego',
        image: 'images/art-griego-profile.jpg',
        id: 1
      },
      {
        name: 'austin amarka',
        image: 'images/austin-amarka-profile.jpg',
        id: 2
      },
      {
        name: 'bob bakian',
        image: 'images/bob-bakian-profile.jpg',
        id: 3
      },
      {
        name: 'bob green',
        image: 'images/bob-green-profile.jpg',
        id: 4
      },
      {
        name: 'bud dickman',
        image: 'images/bud-dickman-profile.jpg',
        id: 6
      },
      {
        name: 'chris norton',
        image: 'images/chris-norton-profile.jpg',
        id: 7
      },
      {
        name: 'david hall',
        image: 'images/david-hall-profile.jpg',
        id: 8
      },
      {
        name: 'dean wheeler',
        image: 'images/dean-wheeler-profile.jpg',
      },
      {
        name: 'harvey wireman',
        image: 'images/harvey-wireman-profile.jpg',
        id: 10
      },
      {
        name: 'jay santos',
        image: 'images/jay-santos-profile.jpg',
        id: 11
      },
      {
        name: 'lloyd bonafide',
        image: 'images/lloyd-bonafide-profile.jpg',
        id: 12
      },
      {
        name: 'rick sunderland',
        image: 'images/rick-sunderland-profile.jpg',
        id: 13
      },
      {
        name: 'ted bell',
        image: 'images/ted-bell-profile.jpg',
        id: 14
      }
    ],
    friendsCount: 3,
    photos: [
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg'
    ],
    image: 'images/bobbie-dooley-profile.jpg',
    banner: 'images/bobbie-dooley-jumbo.jpg',
    posts: [
      {
        postID: 101,
        poster: 'Ted Bell',
        thumbnail: 'images/Ted-Bell-profile.jpg',
        post: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 102,
        poster: 'Art Griego',
        thumbnail: 'images/Art-Griego-profile.jpg',
        post: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 103,
        poster: 'Jay Santos',
        thumbnail: 'images/Jay-Santos-profile.jpg',
        post: 'Ex quem audire vix, veri dicant hendrerit et cum. Vix at percipitur dissentiet, ea utamur periculis est. Sumo aperiri his ut, his id falli mazim pericula. Omnium facilis ea per. No affert graecis his.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 104,
        poster: 'Rick Sunderland',
        thumbnail: 'images/Rick-Sunderland-profile.jpg',
        post: 'An mea fugit labitur fastidii, mel quot fugit eu. Eam cu appetere incorrupte, autem solet tamquam id duo, nam sonet persequeris suscipiantur an.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 105,
        poster: 'Lloyd Bonafide',
        thumbnail: 'images/Lloyd-Bonafide-profile.jpg',
        post: 'Fugit nonumes vel cu, vis omnes offendit ponderum id, ea sed laoreet deterruisset. Pro nobis solet volumus no, ea nemore prompta accusamus qui.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 106,
        poster: 'Art Griego',
        thumbnail: 'images/Art-Griego-profile.jpg',
        post: 'Pro in probo cotidieque, solet legimus ei duo. Fierent appellantur ullamcorper ad vis, ferri brute assum no vix.',
        likes: 0,
        userLiked: []
      }
    ]
  },
  {
    id: 6,
    name: 'bud dickman',
    about: [
      'Intern on The Phil Hendrie Show',
      'Drove his Harley into an oak tree',
      'Hosts \'Bud\'s Radical NASCAR crashes\'',
      'Lives in Ojai, CA'
    ],
    friends: [
      {
        name: 'art griego',
        image: 'images/art-griego-profile.jpg',
        id: 1
      },
      {
        name: 'austin amarka',
        image: 'images/austin-amarka-profile.jpg',
        id: 2
      },
      {
        name: 'bob bakian',
        image: 'images/bob-bakian-profile.jpg',
        id: 3
      },
      {
        name: 'bob green',
        image: 'images/bob-green-profile.jpg',
        id: 4
      },
      {
        name: 'bobbie-dooley',
        image: 'images/bobbie-dooley-profile.jpg',
        id: 5
      },
      {
        name: 'chris norton',
        image: 'images/chris-norton-profile.jpg',
        id: 7
      },
      {
        name: 'david hall',
        image: 'images/david-hall-profile.jpg',
        id: 8
      },
      {
        name: 'dean wheeler',
        image: 'images/dean-wheeler-profile.jpg',
        id: 9
      },
      {
        name: 'harvey wireman',
        image: 'images/harvey-wireman-profile.jpg',
        id: 10
      },
      {
        name: 'jay santos',
        image: 'images/jay-santos-profile.jpg',
        id: 11
      },
      {
        name: 'lloyd bonafide',
        image: 'images/lloyd-bonafide-profile.jpg',
        id: 12
      },
      {
        name: 'rick sunderland',
        image: 'images/rick-sunderland-profile.jpg',
        id: 13
      },
      {
        name: 'ted bell',
        image: 'images/ted-bell-profile.jpg',
        id: 14
      }
    ],
    friendsCount: 3,
    photos: [
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg'
    ],
    image: 'images/bud-dickman-profile.jpg',
    banner: 'images/bud-dickman-jumbo.jpg',
    posts: [
      {
        postID: 101,
        poster: 'Ted Bell',
        thumbnail: 'images/Ted-Bell-profile.jpg',
        post: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 102,
        poster: 'Art Griego',
        thumbnail: 'images/Art-Griego-profile.jpg',
        post: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 103,
        poster: 'Jay Santos',
        thumbnail: 'images/Jay-Santos-profile.jpg',
        post: 'Ex quem audire vix, veri dicant hendrerit et cum. Vix at percipitur dissentiet, ea utamur periculis est. Sumo aperiri his ut, his id falli mazim pericula. Omnium facilis ea per. No affert graecis his.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 104,
        poster: 'Rick Sunderland',
        thumbnail: 'images/Rick-Sunderland-profile.jpg',
        post: 'An mea fugit labitur fastidii, mel quot fugit eu. Eam cu appetere incorrupte, autem solet tamquam id duo, nam sonet persequeris suscipiantur an.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 105,
        poster: 'Lloyd Bonafide',
        thumbnail: 'images/Lloyd-Bonafide-profile.jpg',
        post: 'Fugit nonumes vel cu, vis omnes offendit ponderum id, ea sed laoreet deterruisset. Pro nobis solet volumus no, ea nemore prompta accusamus qui.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 106,
        poster: 'Art Griego',
        thumbnail: 'images/Art-Griego-profile.jpg',
        post: 'Pro in probo cotidieque, solet legimus ei duo. Fierent appellantur ullamcorper ad vis, ferri brute assum no vix.',
        likes: 0,
        userLiked: []
      }
    ]
  },
  {
    id: 7,
    name: 'chris norton',
    about: [
      'Can\'t pronounce his \'S\'s\'',
      'Manager is Lance Germaine',
      'Frequents \'The Rusty Pelican\'',
      'Lives in Hermosa Beach, CA'
    ],
    friends: [
      {
        name: 'art griego',
        image: 'images/art-griego-profile.jpg',
        id: 1
      },
      {
        name: 'austin amarka',
        image: 'images/austin-amarka-profile.jpg',
        id: 2
      },
      {
        name: 'bob bakian',
        image: 'images/bob-bakian-profile.jpg',
        id: 3
      },
      {
        name: 'bob green',
        image: 'images/bob-green-profile.jpg',
        id: 4
      },
      {
        name: 'bobbie-dooley',
        image: 'images/bobbie-dooley-profile.jpg',
        id: 5
      },
      {
        name: 'bud dickman',
        image: 'images/bud-dickman-profile.jpg',
        id: 6
      },
      {
        name: 'david hall',
        image: 'images/david-hall-profile.jpg',
        id: 8
      },
      {
        name: 'dean wheeler',
        image: 'images/dean-wheeler-profile.jpg',
        id: 9
      },
      {
        name: 'harvey wireman',
        image: 'images/harvey-wireman-profile.jpg',
        id: 10
      },
      {
        name: 'jay santos',
        image: 'images/jay-santos-profile.jpg',
        id: 11
      },
      {
        name: 'lloyd bonafide',
        image: 'images/lloyd-bonafide-profile.jpg',
        id: 12
      },
      {
        name: 'rick sunderland',
        image: 'images/rick-sunderland-profile.jpg',
        id: 13
      },
      {
        name: 'ted bell',
        image: 'images/ted-bell-profile.jpg',
        id: 14
      }
    ],
    friendsCount: 3,
    photos: [
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg'
    ],
    image: 'images/chris-norton-profile.jpg',
    banner: 'images/chris-norton-jumbo.jpg',
    posts: [
      {
        postID: 101,
        poster: 'Ted Bell',
        thumbnail: 'images/Ted-Bell-profile.jpg',
        post: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 102,
        poster: 'Art Griego',
        thumbnail: 'images/Art-Griego-profile.jpg',
        post: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 103,
        poster: 'Jay Santos',
        thumbnail: 'images/Jay-Santos-profile.jpg',
        post: 'Ex quem audire vix, veri dicant hendrerit et cum. Vix at percipitur dissentiet, ea utamur periculis est. Sumo aperiri his ut, his id falli mazim pericula. Omnium facilis ea per. No affert graecis his.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 104,
        poster: 'Rick Sunderland',
        thumbnail: 'images/Rick-Sunderland-profile.jpg',
        post: 'An mea fugit labitur fastidii, mel quot fugit eu. Eam cu appetere incorrupte, autem solet tamquam id duo, nam sonet persequeris suscipiantur an.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 105,
        poster: 'Lloyd Bonafide',
        thumbnail: 'images/Lloyd-Bonafide-profile.jpg',
        post: 'Fugit nonumes vel cu, vis omnes offendit ponderum id, ea sed laoreet deterruisset. Pro nobis solet volumus no, ea nemore prompta accusamus qui.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 106,
        poster: 'Art Griego',
        thumbnail: 'images/Art-Griego-profile.jpg',
        post: 'Pro in probo cotidieque, solet legimus ei duo. Fierent appellantur ullamcorper ad vis, ferri brute assum no vix.',
        likes: 0,
        userLiked: []
      }
    ]
  },
  {
    id: 8,
    name: 'david hall',
    about: [
      'Highly successful Program Manager',
      'AKA \'Darth Hall\'',
      'Enjoys bubble baths',
      'Lives in Beverly Hills, CA'
    ],
    friends: [
      {
        name: 'art griego',
        image: 'images/art-griego-profile.jpg',
        id: 1
      },
      {
        name: 'austin amarka',
        image: 'images/austin-amarka-profile.jpg',
        id: 2
      },
      {
        name: 'bob bakian',
        image: 'images/bob-bakian-profile.jpg',
        id: 3
      },
      {
        name: 'bob green',
        image: 'images/bob-green-profile.jpg',
        id: 4
      },
      {
        name: 'bobbie-dooley',
        image: 'images/bobbie-dooley-profile.jpg',
        id: 5
      },
      {
        name: 'bud dickman',
        image: 'images/bud-dickman-profile.jpg',
        id: 6
      },
      {
        name: 'chris norton',
        image: 'images/chris-norton-profile.jpg',
        id: 7
      },
      {
        name: 'dean wheeler',
        image: 'images/dean-wheeler-profile.jpg',
        id: 9
      },
      {
        name: 'harvey wireman',
        image: 'images/harvey-wireman-profile.jpg',
        id: 10
      },
      {
        name: 'jay santos',
        image: 'images/jay-santos-profile.jpg',
        id: 11
      },
      {
        name: 'lloyd bonafide',
        image: 'images/lloyd-bonafide-profile.jpg',
        id: 12
      },
      {
        name: 'rick sunderland',
        image: 'images/rick-sunderland-profile.jpg',
        id: 13
      },
      {
        name: 'ted bell',
        image: 'images/ted-bell-profile.jpg',
        id: 14
      }
    ],
    friendsCount: 3,
    photos: [
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg'
    ],
    image: 'images/david-hall-profile.jpg',
    banner: 'images/david-hall-jumbo.jpg',
    posts: [
      {
        postID: 101,
        poster: 'Ted Bell',
        thumbnail: 'images/Ted-Bell-profile.jpg',
        post: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 102,
        poster: 'Art Griego',
        thumbnail: 'images/Art-Griego-profile.jpg',
        post: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 103,
        poster: 'Jay Santos',
        thumbnail: 'images/Jay-Santos-profile.jpg',
        post: 'Ex quem audire vix, veri dicant hendrerit et cum. Vix at percipitur dissentiet, ea utamur periculis est. Sumo aperiri his ut, his id falli mazim pericula. Omnium facilis ea per. No affert graecis his.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 104,
        poster: 'Rick Sunderland',
        thumbnail: 'images/Rick-Sunderland-profile.jpg',
        post: 'An mea fugit labitur fastidii, mel quot fugit eu. Eam cu appetere incorrupte, autem solet tamquam id duo, nam sonet persequeris suscipiantur an.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 105,
        poster: 'Lloyd Bonafide',
        thumbnail: 'images/Lloyd-Bonafide-profile.jpg',
        post: 'Fugit nonumes vel cu, vis omnes offendit ponderum id, ea sed laoreet deterruisset. Pro nobis solet volumus no, ea nemore prompta accusamus qui.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 106,
        poster: 'Art Griego',
        thumbnail: 'images/Art-Griego-profile.jpg',
        post: 'Pro in probo cotidieque, solet legimus ei duo. Fierent appellantur ullamcorper ad vis, ferri brute assum no vix.',
        likes: 0,
        userLiked: []
      }
    ]
  },
  {
    id: 9,
    name: 'dean wheeler',
    about: [
      'Middle-aged hippie',
      'From \'The Northern California Hoalistic Center\'',
      'Wife is Esmarelda',
      'Lives in Hill Valley, CA'
    ],
    friends: [
      {
        name: 'art griego',
        image: 'images/art-griego-profile.jpg',
        id: 1
      },
      {
        name: 'austin amarka',
        image: 'images/austin-amarka-profile.jpg',
        id: 2
      },
      {
        name: 'bob bakian',
        image: 'images/bob-bakian-profile.jpg',
        id: 3
      },
      {
        name: 'bob green',
        image: 'images/bob-green-profile.jpg',
        id: 4
      },
      {
        name: 'bobbie-dooley',
        image: 'images/bobbie-dooley-profile.jpg',
        id: 5
      },
      {
        name: 'bud dickman',
        image: 'images/bud-dickman-profile.jpg',
        id: 6
      },
      {
        name: 'chris norton',
        image: 'images/chris-norton-profile.jpg',
        id: 7
      },
      {
        name: 'david hall',
        image: 'images/david-hall-profile.jpg',
        id: 8
      },
      {
        name: 'harvey wireman',
        image: 'images/harvey-wireman-profile.jpg',
        id: 10
      },
      {
        name: 'jay santos',
        image: 'images/jay-santos-profile.jpg',
        id: 11
      },
      {
        name: 'lloyd bonafide',
        image: 'images/lloyd-bonafide-profile.jpg',
        id: 12
      },
      {
        name: 'rick sunderland',
        image: 'images/rick-sunderland-profile.jpg',
        id: 13
      },
      {
        name: 'ted bell',
        image: 'images/ted-bell-profile.jpg',
        id: 14
      }
    ],
    friendsCount: 3,
    photos: [
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg'
    ],
    image: 'images/dean-wheeler-profile.jpg',
    banner: 'images/dean-wheeler-jumbo.jpg',
    posts: [
      {
        postID: 101,
        poster: 'Ted Bell',
        thumbnail: 'images/Ted-Bell-profile.jpg',
        post: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 102,
        poster: 'Art Griego',
        thumbnail: 'images/Art-Griego-profile.jpg',
        post: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 103,
        poster: 'Jay Santos',
        thumbnail: 'images/Jay-Santos-profile.jpg',
        post: 'Ex quem audire vix, veri dicant hendrerit et cum. Vix at percipitur dissentiet, ea utamur periculis est. Sumo aperiri his ut, his id falli mazim pericula. Omnium facilis ea per. No affert graecis his.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 104,
        poster: 'Rick Sunderland',
        thumbnail: 'images/Rick-Sunderland-profile.jpg',
        post: 'An mea fugit labitur fastidii, mel quot fugit eu. Eam cu appetere incorrupte, autem solet tamquam id duo, nam sonet persequeris suscipiantur an.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 105,
        poster: 'Lloyd Bonafide',
        thumbnail: 'images/Lloyd-Bonafide-profile.jpg',
        post: 'Fugit nonumes vel cu, vis omnes offendit ponderum id, ea sed laoreet deterruisset. Pro nobis solet volumus no, ea nemore prompta accusamus qui.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 106,
        poster: 'Art Griego',
        thumbnail: 'images/Art-Griego-profile.jpg',
        post: 'Pro in probo cotidieque, solet legimus ei duo. Fierent appellantur ullamcorper ad vis, ferri brute assum no vix.',
        likes: 0,
        userLiked: []
      }
    ]
  },
  {
    id: 10,
    name: 'harvey wireman',
    about: [
      'Retired attorney',
      'Hosts \'Senior Chat\'',
      'Once attacked by a cabbage patch doll',
      'Lives in Moreno Valley, CA'
    ],
    friends: [
      {
        name: 'art griego',
        image: 'images/art-griego-profile.jpg',
        id: 1
      },
      {
        name: 'austin amarka',
        image: 'images/austin-amarka-profile.jpg',
        id: 2
      },
      {
        name: 'bob bakian',
        image: 'images/bob-bakian-profile.jpg',
        id: 3
      },
      {
        name: 'bob green',
        image: 'images/bob-green-profile.jpg',
        id: 4
      },
      {
        name: 'bobbie-dooley',
        image: 'images/bobbie-dooley-profile.jpg',
        id: 5
      },
      {
        name: 'bud dickman',
        image: 'images/bud-dickman-profile.jpg',
        id: 6
      },
      {
        name: 'chris norton',
        image: 'images/chris-norton-profile.jpg',
        id: 7
      },
      {
        name: 'david hall',
        image: 'images/david-hall-profile.jpg',
        id: 8
      },
      {
        name: 'dean wheeler',
        image: 'images/dean-wheeler-profile.jpg',
        id: 9
      },
      {
        name: 'jay santos',
        image: 'images/jay-santos-profile.jpg',
        id: 11
      },
      {
        name: 'lloyd bonafide',
        image: 'images/lloyd-bonafide-profile.jpg',
        id: 12
      },
      {
        name: 'rick sunderland',
        image: 'images/rick-sunderland-profile.jpg',
        id: 13
      },
      {
        name: 'ted bell',
        image: 'images/ted-bell-profile.jpg',
        id: 14
      }
    ],
    friendsCount: 3,
    photos: [
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg'
    ],
    image: 'images/harvey-wireman-profile.jpg',
    banner: 'images/harvey-wireman-jumbo.jpg',
    posts: [
      {
        postID: 101,
        poster: 'Ted Bell',
        thumbnail: 'images/Ted-Bell-profile.jpg',
        post: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 102,
        poster: 'Art Griego',
        thumbnail: 'images/Art-Griego-profile.jpg',
        post: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 103,
        poster: 'Jay Santos',
        thumbnail: 'images/Jay-Santos-profile.jpg',
        post: 'Ex quem audire vix, veri dicant hendrerit et cum. Vix at percipitur dissentiet, ea utamur periculis est. Sumo aperiri his ut, his id falli mazim pericula. Omnium facilis ea per. No affert graecis his.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 104,
        poster: 'Rick Sunderland',
        thumbnail: 'images/Rick-Sunderland-profile.jpg',
        post: 'An mea fugit labitur fastidii, mel quot fugit eu. Eam cu appetere incorrupte, autem solet tamquam id duo, nam sonet persequeris suscipiantur an.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 105,
        poster: 'Lloyd Bonafide',
        thumbnail: 'images/Lloyd-Bonafide-profile.jpg',
        post: 'Fugit nonumes vel cu, vis omnes offendit ponderum id, ea sed laoreet deterruisset. Pro nobis solet volumus no, ea nemore prompta accusamus qui.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 106,
        poster: 'Art Griego',
        thumbnail: 'images/Art-Griego-profile.jpg',
        post: 'Pro in probo cotidieque, solet legimus ei duo. Fierent appellantur ullamcorper ad vis, ferri brute assum no vix.',
        likes: 0,
        userLiked: []
      }
    ]
  },
  {
    id: 11,
    name: 'jay santos',
    about: [
      'SubCommander of Citizens Auxilery Police',
      'Reports to Major Elvis Newton',
      'Pith Helmit and blue armband uniform',
      'Location undisclosed'
    ],
    friends: [
      {
        name: 'art griego',
        image: 'images/art-griego-profile.jpg',
        id: 1
      },
      {
        name: 'austin amarka',
        image: 'images/austin-amarka-profile.jpg',
        id: 2
      },
      {
        name: 'bob bakian',
        image: 'images/bob-bakian-profile.jpg',
        id: 3
      },
      {
        name: 'bob green',
        image: 'images/bob-green-profile.jpg',
        id: 4
      },
      {
        name: 'bobbie-dooley',
        image: 'images/bobbie-dooley-profile.jpg',
        id: 5
      },
      {
        name: 'bud dickman',
        image: 'images/bud-dickman-profile.jpg',
        id: 6
      },
      {
        name: 'chris norton',
        image: 'images/chris-norton-profile.jpg',
        id: 7
      },
      {
        name: 'david hall',
        image: 'images/david-hall-profile.jpg',
        id: 8
      },
      {
        name: 'dean wheeler',
        image: 'images/dean-wheeler-profile.jpg',
        id: 9
      },
      {
        name: 'harvey wireman',
        image: 'images/harvey-wireman-profile.jpg',
        id: 10
      },
      {
        name: 'lloyd bonafide',
        image: 'images/lloyd-bonafide-profile.jpg',
        id: 12
      },
      {
        name: 'rick sunderland',
        image: 'images/rick-sunderland-profile.jpg',
        id: 13
      },
      {
        name: 'ted bell',
        image: 'images/ted-bell-profile.jpg',
        id: 14
      }
    ],
    friendsCount: 3,
    photos: [
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg'
    ],
    image: 'images/jay-santos-profile.jpg',
    banner: 'images/jay-santos-jumbo.jpg',
    posts: [
      {
        postID: 101,
        poster: 'Ted Bell',
        thumbnail: 'images/Ted-Bell-profile.jpg',
        post: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 102,
        poster: 'Art Griego',
        thumbnail: 'images/Art-Griego-profile.jpg',
        post: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 103,
        poster: 'Jay Santos',
        thumbnail: 'images/Jay-Santos-profile.jpg',
        post: 'Ex quem audire vix, veri dicant hendrerit et cum. Vix at percipitur dissentiet, ea utamur periculis est. Sumo aperiri his ut, his id falli mazim pericula. Omnium facilis ea per. No affert graecis his.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 104,
        poster: 'Rick Sunderland',
        thumbnail: 'images/Rick-Sunderland-profile.jpg',
        post: 'An mea fugit labitur fastidii, mel quot fugit eu. Eam cu appetere incorrupte, autem solet tamquam id duo, nam sonet persequeris suscipiantur an.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 105,
        poster: 'Lloyd Bonafide',
        thumbnail: 'images/Lloyd-Bonafide-profile.jpg',
        post: 'Fugit nonumes vel cu, vis omnes offendit ponderum id, ea sed laoreet deterruisset. Pro nobis solet volumus no, ea nemore prompta accusamus qui.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 106,
        poster: 'Art Griego',
        thumbnail: 'images/Art-Griego-profile.jpg',
        post: 'Pro in probo cotidieque, solet legimus ei duo. Fierent appellantur ullamcorper ad vis, ferri brute assum no vix.',
        likes: 0,
        userLiked: []
      }
    ]
  },
  {
    id: 12,
    name: 'lloyd bonafide',
    about: [
      'A Korean War Veteran',
      'Retired heating and plumbing man',
      'Big fan of Elvis',
      'Lives in Alhambra, CA'
    ],
    friends: [
      {
        name: 'art griego',
        image: 'images/art-griego-profile.jpg',
        id: 1
      },
      {
        name: 'austin amarka',
        image: 'images/austin-amarka-profile.jpg',
        id: 2
      },
      {
        name: 'bob bakian',
        image: 'images/bob-bakian-profile.jpg',
        id: 3
      },
      {
        name: 'bob green',
        image: 'images/bob-green-profile.jpg',
        id: 4
      },
      {
        name: 'bobbie-dooley',
        image: 'images/bobbie-dooley-profile.jpg',
        id: 5
      },
      {
        name: 'bud dickman',
        image: 'images/bud-dickman-profile.jpg',
        id: 6
      },
      {
        name: 'chris norton',
        image: 'images/chris-norton-profile.jpg',
        id: 7
      },
      {
        name: 'david hall',
        image: 'images/david-hall-profile.jpg',
        id: 8
      },
      {
        name: 'dean wheeler',
        image: 'images/dean-wheeler-profile.jpg',
        id: 9
      },
      {
        name: 'harvey wireman',
        image: 'images/harvey-wireman-profile.jpg',
        id: 10
      },
      {
        name: 'jay santos',
        image: 'images/jay-santos-profile.jpg',
        id: 11
      },
      {
        name: 'rick sunderland',
        image: 'images/rick-sunderland-profile.jpg',
        id: 13
      },
      {
        name: 'ted bell',
        image: 'images/ted-bell-profile.jpg',
        id: 14
      }
    ],
    friendsCount: 3,
    photos: [
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg'
    ],
    image: 'images/lloyd-bonafide-profile.jpg',
    banner: 'images/lloyd-bonafide-jumbo.jpg',
    posts: [
      {
        postID: 101,
        poster: 'Ted Bell',
        thumbnail: 'images/Ted-Bell-profile.jpg',
        post: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 102,
        poster: 'Art Griego',
        thumbnail: 'images/Art-Griego-profile.jpg',
        post: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 103,
        poster: 'Jay Santos',
        thumbnail: 'images/Jay-Santos-profile.jpg',
        post: 'Ex quem audire vix, veri dicant hendrerit et cum. Vix at percipitur dissentiet, ea utamur periculis est. Sumo aperiri his ut, his id falli mazim pericula. Omnium facilis ea per. No affert graecis his.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 104,
        poster: 'Rick Sunderland',
        thumbnail: 'images/Rick-Sunderland-profile.jpg',
        post: 'An mea fugit labitur fastidii, mel quot fugit eu. Eam cu appetere incorrupte, autem solet tamquam id duo, nam sonet persequeris suscipiantur an.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 105,
        poster: 'Lloyd Bonafide',
        thumbnail: 'images/Lloyd-Bonafide-profile.jpg',
        post: 'Fugit nonumes vel cu, vis omnes offendit ponderum id, ea sed laoreet deterruisset. Pro nobis solet volumus no, ea nemore prompta accusamus qui.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 106,
        poster: 'Art Griego',
        thumbnail: 'images/Art-Griego-profile.jpg',
        post: 'Pro in probo cotidieque, solet legimus ei duo. Fierent appellantur ullamcorper ad vis, ferri brute assum no vix.',
        likes: 0,
        userLiked: []
      }
    ]
  },
  {
    id: 13,
    name: 'rick sunderland',
    about: [
      'Formerly Frodo the Puppet',
      'Is made of fabric',
      'Has his own theme music',
      'Currently on someone\'s hand'
    ],
    friends: [
      {
        name: 'art griego',
        image: 'images/art-griego-profile.jpg',
        id: 1
      },
      {
        name: 'austin amarka',
        image: 'images/austin-amarka-profile.jpg',
        id: 2
      },
      {
        name: 'bob bakian',
        image: 'images/bob-bakian-profile.jpg',
        id: 3
      },
      {
        name: 'bob green',
        image: 'images/bob-green-profile.jpg',
        id: 4
      },
      {
        name: 'bobbie-dooley',
        image: 'images/bobbie-dooley-profile.jpg',
        id: 5
      },
      {
        name: 'bud dickman',
        image: 'images/bud-dickman-profile.jpg',
        id: 6
      },
      {
        name: 'chris norton',
        image: 'images/chris-norton-profile.jpg',
        id: 7
      },
      {
        name: 'david hall',
        image: 'images/david-hall-profile.jpg',
        id: 8
      },
      {
        name: 'dean wheeler',
        image: 'images/dean-wheeler-profile.jpg',
        id: 9
      },
      {
        name: 'harvey wireman',
        image: 'images/harvey-wireman-profile.jpg',
        id: 10
      },
      {
        name: 'jay santos',
        image: 'images/jay-santos-profile.jpg',
        id: 11
      },
      {
        name: 'lloyd bonafide',
        image: 'images/lloyd-bonafide-profile.jpg',
        id: 12
      },
      {
        name: 'ted bell',
        image: 'images/ted-bell-profile.jpg',
        id: 14
      }
    ],
    friendsCount: 3,
    photos: [
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg'
    ],
    image: 'images/rick-sunderland-profile.jpg',
    banner: 'images/rick-sunderland-jumbo.jpg',
    posts: [
      {
        postID: 101,
        poster: 'Ted Bell',
        thumbnail: 'images/Ted-Bell-profile.jpg',
        post: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 102,
        poster: 'Art Griego',
        thumbnail: 'images/Art-Griego-profile.jpg',
        post: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 103,
        poster: 'Jay Santos',
        thumbnail: 'images/Jay-Santos-profile.jpg',
        post: 'Ex quem audire vix, veri dicant hendrerit et cum. Vix at percipitur dissentiet, ea utamur periculis est. Sumo aperiri his ut, his id falli mazim pericula. Omnium facilis ea per. No affert graecis his.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 104,
        poster: 'Rick Sunderland',
        thumbnail: 'images/Rick-Sunderland-profile.jpg',
        post: 'An mea fugit labitur fastidii, mel quot fugit eu. Eam cu appetere incorrupte, autem solet tamquam id duo, nam sonet persequeris suscipiantur an.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 105,
        poster: 'Lloyd Bonafide',
        thumbnail: 'images/Lloyd-Bonafide-profile.jpg',
        post: 'Fugit nonumes vel cu, vis omnes offendit ponderum id, ea sed laoreet deterruisset. Pro nobis solet volumus no, ea nemore prompta accusamus qui.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 106,
        poster: 'Art Griego',
        thumbnail: 'images/Art-Griego-profile.jpg',
        post: 'Pro in probo cotidieque, solet legimus ei duo. Fierent appellantur ullamcorper ad vis, ferri brute assum no vix.',
        likes: 0,
        userLiked: []
      }
    ]
  },
  {
    id: 14,
    name: 'ted bell',
    about: [
      'Owner of Ted\'s of Beverly Hills Steak House',

      'Lives in Beverly Hills'
    ],
    friends: [
      {
        name: 'art griego',
        image: 'images/art-griego-profile.jpg',
        id: 1
      },
      {
        name: 'austin amarka',
        image: 'images/austin-amarka-profile.jpg',
        id: 2
      },
      {
        name: 'bob bakian',
        image: 'images/bob-bakian-profile.jpg',
        id: 3
      },
      {
        name: 'bob green',
        image: 'images/bob-green-profile.jpg',
        id: 4
      },
      {
        name: 'bobbie-dooley',
        image: 'images/bobbie-dooley-profile.jpg',
        id: 5
      },
      {
        name: 'bud dickman',
        image: 'images/bud-dickman-profile.jpg',
        id: 6
      },
      {
        name: 'chris norton',
        image: 'images/chris-norton-profile.jpg',
        id: 7
      },
      {
        name: 'david hall',
        image: 'images/david-hall-profile.jpg',
        id: 8
      },
      {
        name: 'dean wheeler',
        image: 'images/dean-wheeler-profile.jpg',
        id: 9
      },
      {
        name: 'harvey wireman',
        image: 'images/harvey-wireman-profile.jpg',
        id: 10
      },
      {
        name: 'jay santos',
        image: 'images/jay-santos-profile.jpg',
        id: 11
      },
      {
        name: 'lloyd bonafide',
        image: 'images/lloyd-bonafide-profile.jpg',
        id: 12
      },
      {
        name: 'rick sunderland',
        image: 'images/rick-sunderland-profile.jpg',
        id: 13
      }
    ],
    friendsCount: 3,
    photos: [
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg',
      'images/placeholder_user.svg'
    ],
    image: 'images/ted-bell-profile.jpg',
    banner: 'images/ted-bell-jumbo.jpg',
    posts: [
      {
        postID: 101434,
        poster: 'ted bell',
        posterID: 14,
        thumbnail: 'images/Ted-Bell-profile.jpg',
        post: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 1022323,
        poster: 'art griego',
        posterID: 1,
        thumbnail: 'images/Art-Griego-profile.jpg',
        post: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 103,
        poster: 'Jay Santos',
        thumbnail: 'images/Jay-Santos-profile.jpg',
        post: 'Ex quem audire vix, veri dicant hendrerit et cum. Vix at percipitur dissentiet, ea utamur periculis est. Sumo aperiri his ut, his id falli mazim pericula. Omnium facilis ea per. No affert graecis his.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 104,
        poster: 'Rick Sunderland',
        thumbnail: 'images/Rick-Sunderland-profile.jpg',
        post: 'An mea fugit labitur fastidii, mel quot fugit eu. Eam cu appetere incorrupte, autem solet tamquam id duo, nam sonet persequeris suscipiantur an.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 105,
        poster: 'Lloyd Bonafide',
        thumbnail: 'images/Lloyd-Bonafide-profile.jpg',
        post: 'Fugit nonumes vel cu, vis omnes offendit ponderum id, ea sed laoreet deterruisset. Pro nobis solet volumus no, ea nemore prompta accusamus qui.',
        likes: 0,
        userLiked: []
      },
      {
        postID: 106,
        poster: 'Art Griego',
        thumbnail: 'images/Art-Griego-profile.jpg',
        post: 'Pro in probo cotidieque, solet legimus ei duo. Fierent appellantur ullamcorper ad vis, ferri brute assum no vix.',
        likes: 0,
        userLiked: []
      }
    ]
  },
];

module.exports = users;
