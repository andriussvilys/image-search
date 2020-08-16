IMAGE SEARCH APP
### :green_heart: checkout out the production build live on gitHub pages
https://andriussvilys.github.io/image-search/
OR clone the repository to see the code up close

###  :green_heart: DESCRIPTION
This app utilizes unsplash API in order to request, retrieve and render images onscreen and offers and option to save these queries. 

###  :green_heart: SAVING QUERIES
A user may choose to save their favourite search results by clicking "SAVE" button in order to view these images at a later time. 
The app uses a REDUX store and collects <i>every</i> query a user submits, so if the query is repeated, even if it is not saved, it will not send a request to the API and instead load it from the store thus saving bandwith and API load. Saved queries are store in a simple array list.

###  :green_heart: GALLERY
Hovering (or clicking on mobile) on images displays the name of the author who took the picture. Their name is a clickable anchor tag that opens into a page with more info of the author. 

###  :green_heart: MODALS
Custom modals pop on scripted events: when query returns no results or when a user wants to save a query (this event can have different outcomes: if the query is saved already, if there was no query or no results have been returned; a modal will appear before a user wants to save an unrecorded query allowing to confirm or cancel the operation). 
A custom progress bar is also present, however during my testing it was only relevant on slow networks. For better or worse I capped my queries at 10 results and generally they are returned and rendered rather instanteneously.
The search progress is split into two episodes: 
  1. fetching query from the API
  2. loading images 

###  :green_heart: USER INTERFACE 
This app is responsive and has slightly different layouts for desktop, tablet (<768px) and mobile (<468px) screens. The favourites/saved queries block becomes hidden on screens with width <768px and a hamburger icon appears next to "SAVE" button thus introducing a more ergonomic, familiar and delightful interface. 
Modals pop up within appropriate blocks, overlaying contents inside with a stylish and fun yellow colour immedialy attracting user's attention. Styled using scss. 

![page view](https://i.imgur.com/iPQpKDw.png)
