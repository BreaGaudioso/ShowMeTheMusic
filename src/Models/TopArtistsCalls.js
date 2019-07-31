const TopArtistsCalls = {};

TopArtistsCalls.getTopArtists = function getTopArtists() {
  console.log('getTopArtists')
    const url = "https://api.napster.com/v2.2/artists/top?apikey=YzQ5ZjUwNmMtMjk2Ny00YWUwLThkOTctNTZhODFjNTI0MWYz&range=week"
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(result => result.json())
    .then(data => TopArtistsCalls.simplifyArtists(data.artists))
    .catch(err => Error(err, "Loading Top Artists"));
};

TopArtistsCalls.simplifyArtists = function simplifyArtists(artists) {
  return artists.map(artist => {
    const artDetails = {
      name: artist.name,
      id: artist.id,
      topTracksApi: artist.links.topTracks.href || ''
    };
    //change to use lodash
    // teach kyle about null safety when using apis so dont break code
    if (artist.albumGroups.main) {
      artDetails.image = `https://api.napster.com/imageserver/v2/albums/${artist.albumGroups.main[0]}/images/200x200.jpg`;
    }
    if (artist.bios) {
      artDetails.bio = artist.bios[0].bio
    }
    return artDetails;
  })
};



export default TopArtistsCalls;
