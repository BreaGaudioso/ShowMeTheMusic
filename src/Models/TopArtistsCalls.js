const TopArtistsCalls = {};

TopArtistsCalls.getTopArtists = function getTopArtists() {
    const url = "https://api.napster.com/v2.2/artists/top?apikey=YzQ5ZjUwNmMtMjk2Ny00YWUwLThkOTctNTZhODFjNTI0MWYz&range=week"
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(result => result.json())
    .then(result => result.topArtists)
    .catch(err => Error(err, "Loading Top Artists"));
};

export default TopArtistsCalls;