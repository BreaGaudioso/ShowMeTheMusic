Name of Project: Show Me The Music
Project’s Purpose or Goal: 
An app that allows users to select top artists and play their top tracks. For non logged in users this will be 30 second samples, but when you log in with your Napster account you are able to do full track playback. For MVP, the list of artists will be top artists propegated from the Napster API, but further build out plans include the ability to search for artists based on the users region(sourced from SongKick API) and listen to those artists music. MVP will also only include 30 second samples- but futher build out plans include implementing oauth to sign in users so that they can experience full track playback.

List the absolute minimum features the project requires to meet this purpose or goal:
Phase 1
As a user when I go to the home page I will see a list of top artists. I will be able to toggle through different date ranges 
Napster API get top artists: http://api.napster.com/v2.2/artists/top?apikey=NmE0ZTY0MTUtZDdkMy00MDkxLWFhN2YtMjdlZmY5MTljN2I5&range=week
http://api.napster.com/v2.2/artists/top?apikey=NmE0ZTY0MTUtZDdkMy00MDkxLWFhN2YtMjdlZmY5MTljN2I5&range=day
http://api.napster.com/v2.2/artists/top?apikey=NmE0ZTY0MTUtZDdkMy00MDkxLWFhN2YtMjdlZmY5MTljN2I5&range=month

Upon clicking on an artist, a page with all of their top tracks, photos, and additional metadata will show up, with play previews next to each track.
Napster API top tracks for an artist: http://api.napster.com/v2.2/artists/Art.28463069/tracks/top?apikey=NmE0ZTY0MTUtZDdkMy00MDkxLWFhN2YtMjdlZmY5MTljN2I5

Display Artist info
 - Photo
 - Name
 - bio? 
 - Genres?
 - Similar artists to click into
 - Track info to display
 - Name
 - isExplicit?
 - Album name?
 - duration?

Play logic: first time clicking a track will play. If I click again, or click another tracks play button the current track will pause. 

Integrate with the Napster API to pull the following data
 - Top artists (by day, month, year)
 - The top tracks from each of these artists
 - Sample player that plays 30 second streams of these songs

What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here. Be specific.
React, Redux, Firebase(?), Napster API - for playing music, SongKick API - for searching upcoming shows
If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific.

	Phase 2 
Integrate the SongKick API 
Rather then only pulling from top artists, the user will have the ability to enter their location and see upcoming artists in their area. 
Users will be able to do this whether they are logged in or out. 
The flow of the api calls will be as follows
Call into the api metro area artists search: https://api.songkick.com/api/3.0/metro_areas/{metro_area_id}/calendar.json?apikey={your_api_key}
Using that list, from the results
Store off the:
artist name
Concert name
Concert link
Call into napsters search api to get artist info based on the artist name and add to the object the
Artist ID
Artist photo
Either render only the artists that we find results in Napster for, or grey out playback bar for artists that we could not find data in Napster for. 

	Phase 3
Implement the ability to log in with oauth, for full track playback
 - User must have a valid napster account
 - Integrate with the napster authentication APIS
 - User can do full playback
 - add artists to their favorites
 - View their favorite artists 
 - users can listen to entire tracks of artists they've searched for, favorited, or discovered in upcoming shows/events section
More enhancements (random ideas)
 - Run the lookups by region on a cron job or daily process and store that information in a database, that way the app is more performant. The job could run on a timer, once or twice a day to look up artists in major areas, search and try to match them up with artists in the napster api and then save off those artists Ids, so that when a user clicks on an area we just populate it with the data from the DB instead of needing to make all of those API calls right away. 
 - Build out own database to save users concerts they are interested in
 - Integrate with buying tickets
 - Integrate with google calender 
 - provide a list of links to local small music venues
 - Users can request & receive notifications for upcoming shows of artists on their favorites list
 - Users can view recommended artists based on their current favorites
 - Users can ask for recommended artists based on the artist they are currently viewing
 - users can view listen history 
What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?
 - React
 - The Napster API
 - The Band is in town API
 - Oauth
 - The Napster SDK (for full track playback)
Possibly a database if I want to store off information about users- but may be able to just leverage data napster stores about their users! 

![Component diagram](/src/assets/images/SMTM.jpg)