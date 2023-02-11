const library = {
  tracks: { t01: { id: "t01",
    name: "Code Monkey",
    artist: "Jonathan Coulton",
    album: "Thing a Week Three" },
  t02: { id: "t02",
    name: "Model View Controller",
    artist: "James Dempsey",
    album: "WWDC 2003"},
  t03: { id: "t03",
    name: "Four Thirty-Three",
    artist: "John Cage",
    album: "Woodstock 1952"}
  },
  playlists: { p01: { id: "p01",
    name: "Coding Music",
    tracks: ["t01", "t02"]
  },
  p02: { id: "p02",
    name: "Other Playlist",
    tracks: ["t03"]
  }
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

// I understand the for of loop a little better the the for in.
const printPlaylists = () => {
  // I like it better because I can use the Object.values.keys.entries() first.
  // seems more explicit and controllable.
  for (const playlist of Object.values(this.playlists)) {
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
  }
};


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

const printTracks = () => {
  for (const trackData of Object.values(this.tracks)) {
    console.log(`${trackData.id}: ${trackData.name} by ${trackData.artist} (${trackData.album})`);
  }
};
   
   
// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

const printTrackId = function(playlistId) {
  // regex use for if statement. Only need one pattern because else.
  let pPattern = /^p.*/;
  // .test() is required for the if statement and regex
  if (pPattern.test(playlistId)) {
    // accesses different areas of the object based on input. playlists versus tracks.
       library.printPlaylists();
    }
    library.printTracks();
  } 



// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  
  //need to be REALLY specific on where to .push();
  library.playlists[playlistId].tracks.push(trackId);
  printTracks();
  };
   


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = () => {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
// very primitive way to do this, NOT DRY. Also not formatted to the original
const addTrack = function(name, artist, album) {
  let newTrackId = `t0${Object.keys(library.tracks).length +1}`;

  library.tracks[newTrackId] = {};
  library.tracks[newTrackId].id = newTrackId;
  library.tracks[newTrackId].name = name;
  library.tracks[newTrackId].artist = artist;
  library.tracks[newTrackId].album = album;
};

// another way that establishes a template const ahead of time;

const newTrackTemplate = {
       id: null,
       name: null,
       artist: null,
       album: null
     };
     
 //same idea of the first above but more concise.

     const addTrack = function(generateUid, name, artist, album) {
       let newTrack = Object.assign({}, newTrackTemplate);
       newTrack.id = id;
       newTrack.name = name;
       newTrack.artist = artist;
       newTrack.album = album;
     
       library.tracks[id] = newTrack;
     };

     // the most concise but using a callback and more complicated.
     // establishes the template first with a reusable function.

     const createTrack = function(generateUid, name, artist, album) {
       return {
         id: id,
         name: name,
         artist: artist,
         album: album
       };
     };
     
     // cheeky recall to quickly create a new track.
     const addTrack = function(generateUid, name, artist, album) {
       let newTrack = createTrack(id, name, artist, album);
       library.tracks[id] = newTrack;
       printTracks();
     };

// adds a playlist to the library
const createPlayList = function(generateUid, name, tracks) {
       return {
           id: id,
           name: name,
           tracks: tracks
       };
   };
   
   const addPlaylist = function(generateUid, name, tracks) {
       let newPlayList = createPlayList(id, name, tracks);
       library.playlists[id] = newPlayList;
       printPlaylists();
   };


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

};
