// music should be an object with title, artist, and album properties
const music = {
  title: 'Playing With Fire',
  artist: 'Emery',
  album: 'The Question',
};

// Write code between the backticks tags to output the data from the music object above.
const songSnippet = `You are listening to ${music.title} by ${music.artist} from the album ${music.album}`;

console.log(songSnippet)