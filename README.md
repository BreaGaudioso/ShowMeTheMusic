Name of Project: Show Me The Music

Project’s Purpose or Goal: Allows users to sample(if not signed in) or fully listen to(when signed in) top tracks of music artists and create a favorite artists list. Users can then search for upcoming shows based on their favorite artists or by their zip codes/region

List the absolute minimum features the project requires to meet this purpose or goal: 
- App will utilize a music streaming API
- If Users aren't signed in:
    -users can search/view upcoming shows/events in their area
        - seach for an artist and see if that artist has upcoming shows
        - search a zip code and or city
    -users can sample (30seconds) top/featured tracks by artists with upcoming shows
    -users can create an account to login to
- If Users are signed in:
    -users can save artists to their favorites list
    -users can listen to entire tracks of artists they've searched for, favorited, or discoverd in upcoming shows/events section

What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here. Be specific.

React,
Redux,
Firebase(?),
Napster API - for playing music,
SongKick API - for searching upcoming shows

If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific.
- For All Users:
    - can refine searches to include distance within zip code or city
    - provide a list of links to local small music venues
- For Logged in Users:
    - Users can request & recieve notifications for upcoming shows of artists on their favorites list
    - Users can view reccommended artists based on their current favorites
        - Users can ask for reccommended artists based on the artist they are currently viewing
    - users can view listen history
    - 

What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?

Probably none...?

Is there anything else you’d like your instructor to know?

You're awesome! *double thumbs up*

![Component diagram](/src/assets/images/SMTM.jpg)