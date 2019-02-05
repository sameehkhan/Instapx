![](s3://instapx-dev/instapx.png)

# Table of Contents
- [Background and Overview](#background-and-overview)
  - [Demo](#demo)
- [Technologies](#technologies)
- [Site](#site)
  - [Splash Page](#splash-page)
  - [Videos](#videos)
  - [Info](#info)
- [Feature Highlights](#feature-highlights)
  - [Video Search](#video-search)
  - [Info and Dropdown Effects](#video-info-dropdown-and-effects)

## Background and Overview

Chillflix is a clone of the video-streaming site, Netflix. On this site, users are able to create new accounts and login and watch short clips of popular movies and shows.

Features cloned from Instagram include:
* User authentication
* User feed
* Profile
* Post Modals
* Liking posts
* Commenting on posts


### Demo
[Live Link](https://flix-n-chill.herokuapp.com/#/)

## Technologies

Instapx was built on a `Ruby on Rails` backend with a `React/Redux` front end. User data such as login and list information was stored in a `PostgreSQL` database. Images are stored and accessed through `AWS S3`. 

## Site

### Splash Page

The Instapx splash page/user authentication is an exact clone of Instagram, without facebook links. It features the same background, fonts, and iphone template.

![](./images/screenshot1.png)
<!-- ![](./screenshots/auth.gif) -->

### Videos

Chillflix videos are featured on scroll wheels according to their categories. Scroll wheels feature infinite scroll. Upon hovering over a single video, controls for that video appear. The controls include a play button, an add to my list button, and an expand button which displays more info on the video.

![](./screenshots/hover.png)

### Info

When the expand button is clicked, the videos title and description is shown. Below the description, there is a play button and my list button. There is also a button to close the info. When a video's info is expanded, the video is highlighted with a white border and down-caret

![](./screenshots/info.png)

## Feature Highlights

### Video Search

Implementing the search functionality was quite a challenge. At first, I was trying to combine all the logic into the Navbar since the search bar was there. But it proved to be very difficult to render the results and also track the query string. So I came to this solution:
* Search functionality was spread over two components
* The search bar on the Navbar component would expand when clicked on
  * Once the user starts typing, the route would be updated with the query string
* Once the route changed to a search, the search results container would monitor the query string, passing it as a prop to the search results
* Search results component would filter out the movies in state, non case-sensitive and display them
  * An empty query string would return all videos
* If the 'X' was clicked, the search bar would contract and the user would be rerouted back to browse

![](./screenshots/search.png)

```
// search_results_container.js


const mstp = (state, ownProps) => {

  let pathname = ownProps.location.pathname;
  let search = ownProps.location.search;
  let query = "";
  if (pathname === '/search' && search.length > 2) {
    query = search.split('=')[1];
  }

  return ({
    movies: Object.values(state.entities.movies),
    query: query.toLowerCase()
  });
};
```
```
// search_results.jsx


componentDidUpdate(prevProps){
  if(this.props.query !== prevProps.query){
    const filteredMovies = this.props.movies.filter(movie => movie.title.toLowerCase().includes(this.props.query));
    this.setState({
      filtered: filteredMovies
    });
  }
}
```

### Video Info Dropdown and Effects

When a movie's dropdown is expanded, it's info is supposed to show the video's title, description, control buttons, and a close button. Also, the current video with expanded info should be highlighted white a white border and a downwards caret pointing to the info. The challenging part with this feature was what to do if one dropdown is already open and the user attempts to expand another one. At first both dropdowns would show and both would have the highlight effects. The solution I came to was the following:
* When a dropdown is expanded, update the route to have wildcards for the id of the scroll wheel and the id of the movie
* Upon reaching the proper route, remove all effects from each video and allow each video to be enlarged upon hover to show controls
* Find the matching id's
  * If non-existent, reroute to `/browse`
  * If it does exist, remove enlarge capability and add effects

![](./screenshots/info.png)

```
addEffects() {
    let spinnerId = this.props.match.params.spinnerId;
    let movieId = this.props.match.params.movieId;
    
    const current = document.getElementById(`spinner-${spinnerId}-${movieId}`);
    if(current !== null) {
      current.style.border = "4px solid white";
      current.classList.remove('enlarge');
      document.getElementById(`spinner-${spinnerId}`).classList.add('buffed');
    }
    const caret = document.getElementById(`expand-${spinnerId}-${movieId}`);
    if(caret !== null){
      caret.style.display = "block";
    }
  }

  removeEffects() {
    const allSpinners = document.getElementsByClassName("spinner-item");
    const allCarets = document.getElementsByClassName("expand-down");
    for (let i = 0; i < allSpinners.length; i++) {
      allSpinners[i].style.border = "0";
      allSpinners[i].classList.add('enlarge');
      allCarets[i].style.display = "none";
    }
  }
```


[Back to Top](#)