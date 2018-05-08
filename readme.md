#Project 3  Team Razz Jazz
##Online Travel Concierge

###User Story
####1. Traveller can login or enter site as a guest, then choose a vacation city by clicking on picture displayed on the OTC landing page or selecting from list of locations also displayed there.
####2. Once the traveller clicks on a desired location, a view will be rendered, displaying a map (which will be an API call to Google Maps).  The user can choose a more specific location on the map and view related data.
####3. The traveller can click on the map and dynamically view all available amenities, restaurants, etc., in area of that vacation spot.
####4. The traveller can click a button to indicate that vacation spot as as favorite. This information will be included in a Vacation Faves table.  The traveller can add or delete vacation spots to this table and populate a Fave Notes field.

####WireFrame

####Landing Page
#####Pics, login fields, and list of vac locs

###DB Schema Plan
####Vacation Table:
#####Location
#####Description
#####Map Coordinates
#####Image_url

####User Information
#####User_ID
#####Name
#####Email
#####Hash Password

####Vacation Faves
#####User_ID
#####Vacation_ID
#####Fave_Notes


