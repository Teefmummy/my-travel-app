# Project 3 - Team Razz Jazz
## Online Travel Concierge

### User Story
1. Traveller can login or enter site as a guest, then choose a vacation city by clicking on picture displayed on the OTC landing page or selecting from list of locations also displayed there.
2. Once the traveller clicks on a desired location, a view will be rendered, displaying a map (which will be an API call to Google Maps).  The user can choose a more specific location on the map and view related data.
3. The traveller can click on the map and dynamically view all available amenities, restaurants, etc., in area of that vacation spot.
4. The traveller can click a button to indicate that vacation spot as as favorite. This information will be included in a Vacation Faves table.  The traveller can add or delete vacation spots to this table and populate a Fave Notes field.

#### WireFrame
![updated-wireframe-razzjazz-project3](https://user-images.githubusercontent.com/36650186/39898027-e9ba4fdc-5482-11e8-816f-5c533437ec45.png)

#### Code Snippet - (Part of code used to connect with Google Map)
![project3 code snippet](https://user-images.githubusercontent.com/36650186/40204643-3e8fbf6e-59f7-11e8-838c-9596c9990f25.png)

### Landing Page
##### Login screen, skip or enter as Guest option

### Other Views
###  Search Page 
##### (Contains pics and links to cities; Traveller can select to search for vacations in that area.)
###   Main page 
##### (Displays two column view with links on left and map on right.  User can click on either for more specific data.)
###   Selection Render Page 
##### (this page is optional - if we use it, it will render the data the user selected to view from the Main page. The alternative is additional information obtained dynamically from Google Maps.)
###   Favorites View 
##### (Displays list of travellers' favorite locations.  May also contain notes entered by travellers.)

### Database Tables Picture
![razzjazz project3_database_tables](https://user-images.githubusercontent.com/36650186/39772171-7ec9fbf8-52c2-11e8-9f90-c6fe974c8cdb.png)

### DB Schema Plan
#### Vacation Table:
##### Location
##### Description
##### Map Coordinates
##### Image_url

#### User Information Table:
##### User_ID
##### Name
##### Email
##### Hash Password

#### Vacation Favorites Table:
##### User_ID
##### Vacation_ID
##### Fave_Notes

### MVP
##### Navigation Bar, Basic CSS
##### CRUD Functionality (Create, Read, Update, Delete) in Favorites List
##### Successful Google API
##### User Authorization using JSon Web Token, rendering Login and Register Forms
##### Static Nearby Locations List on Map

### POST MVP
##### Dynamic Location List based on selection
##### All Favorite Reviews viewable by all users
##### Images of location displaying in each vacation component
##### Successful Login/Registration Redirection
##### More CSS Styling

### Technologies Used
##### Express - Server 
##### React JS - Front-end application Rendering
##### Node -Server support
#### Dependencies:
###### Concurrently
###### Nodemon
###### Body-Parser
###### Morgan
###### PG-Promise
##### PSQL -Database
##### Method-Override
##### Google-Maps React module
##### HTML -DOM
##### CSS  -Styling
##### MVC Pattern - the Models, Views, Controllers 
##### Google Maps API

### Installation Instructions
1. In the directory that will house the server RUN create-react-app + "name of application"
2. Run NPM Install in both the server and client directories
3. Setup Database: Create Seed File and use psql -f db/schema.sql at command line to access and write sql statements to view database
4. Open sublime or text editor that is installed on your computer
5. For Server side: Create models, controllers, routes beginning with server.js where you will place you middleware
6. Client side: In client folder, in the SRC folder, create your components to render - you may create a subfolder called Components to store these files
7. With each step, at the terminal, start your server to test for errors by entering "npm run dev". If you have the "concurrently" dependency installed, both express and react will start concurrently.
 

