# travel-app-diane#Project 3  Team Razz Jazz
## Online Travel Concierge

### User Story
#### 1. Traveller can login or enter site as a guest, then choose a vacation city by clicking on picture displayed on the OTC landing page or selecting from list of locations also displayed there.
#### 2. Once the traveller clicks on a desired location, a view will be rendered, displaying a map (which will be an API call to Google Maps).  The user can choose a more specific location on the map and view related data.
#### 3. The traveller can click on the map and dynamically view all available amenities, restaurants, etc., in area of that vacation spot.
#### 4. The traveller can click a button to indicate that vacation spot as as favorite. This information will be included in a Vacation Faves table.  The traveller can add or delete vacation spots to this table and populate a Fave Notes field.

#### WireFrame
![razzjazz_project3_wireframe](https://user-images.githubusercontent.com/36650186/39772137-5ddff08c-52c2-11e8-92de-d9c582fdcd82.png)

#### Landing Page
##### Login screen, skip or enter as Guest option

#### Other Views
###  Search Page (Contains pics and links to cities; Traveller can select to search for vacations in that area.)
##   Main page (Displays two column view with links on left and map on right.  User can click on either for more specific data.)
##   Selection Render Page (this page is optional - if we use it, it will render the data the user selected to view from the Main page. The alternative is additional information obtained dynamically from Google Maps.)
##   Favorites View - (Displays list of travellers' favorite locations.  May also contain notes entered by travellers.)

### Database Tables Picture
![razzjazz project3_database_tables](https://user-images.githubusercontent.com/36650186/39772171-7ec9fbf8-52c2-11e8-9f90-c6fe974c8cdb.png)

### DB Schema Plan
#### Vacation Table:
##### Location
##### Description
##### Map Coordinates
##### Image_url

#### User Information Table
##### User_ID
##### Name
##### Email
##### Hash Password

#### Vacation Favorites Table
##### User_ID
##### Vacation_ID
##### Fave_Notes


