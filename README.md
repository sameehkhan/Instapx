[](s3://instapx-dev/instapx.png)

# Table of Contents
- [Background and Overview](#background-and-overview)
  - [Demo](#demo)
- [Technologies](#technologies)
- [Site](#site)
  - [Splash Page](#splash-page)
  - [Posts](#posts)
  - [Info](#info)
- [Feature Highlights](#feature-highlights)
  - [Video Search](#video-search)
  - [Info and Dropdown Effects](#video-info-dropdown-and-effects)

## Background and Overview

Instagram is a clone of the social media site, Instagram. On this site, users are able to create new accounts and login and view and post pictures.

Features cloned from Instagram include:
* User authentication
* Feed
* Profile
* Post Modals
* Likes
* Comments
* User Search
* Follows



### Demo
[Live Link](https://instapx.herokuapp.com/#/)

## Technologies

Instapx was built on a `Ruby on Rails` backend with a `React/Redux` front end. User data such as login and list information was stored in a `PostgreSQL` database. Images are stored and accessed through `AWS S3`. 

## Site

### Splash Page

The Instapx splash page/user authentication is an exact clone of Instagram, without facebook links. It features the same background, fonts, and iPhone template as of January 2019.

![](./images/screenshot1.png)


### Posts

Instapx posts can be accessed through three means. Posts from users you follow are available upon login, on the feed page. A user's own posts can be viewed on their own profile, and on their feed. Any user's profile features all of their posts as well as a pop up modal on click for any post.



![](./screenshots/hover.png)

<!-- ### Info



![](./screenshots/info.png)

## Feature Highlights -->

<!-- ### Search

Incorporating the search functionality was at first at first challenging. My approach from a high-level perspective was to fetch all the users within the search container so that I have access to them while searching, and against refreshes, however it proved difficult to include it all within the nav bar, so it was split into its own component. 

* Search functionality was spread over two components
* Once the user begins typing, the search bar has a drop down showing all results that match the query string
* As with Instagram, the results are capped at a certain amount, and overflow is then scrollable. 
* An issue I ran into originally, was that the query string as well as the results would be present even after clicking a link to a user's page, to rectify this I utilized the ComponentWillUpdate() React lifecycle method. 


<!-- ![](./screenshots/search.png) -->

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

<!-- ### Video Info Dropdown and Effects

When a movie's dropdown is expanded, it's info is supposed to show the video's title, description, control buttons, and a close button. Also, the current video with expanded info should be highlighted white a white border and a downwards caret pointing to the info. The challenging part with this feature was what to do if one dropdown is already open and the user attempts to expand another one. At first both dropdowns would show and both would have the highlight effects. The solution I came to was the following:
* When a dropdown is expanded, update the route to have wildcards for the id of the scroll wheel and the id of the movie
* Upon reaching the proper route, remove all effects from each video and allow each video to be enlarged upon hover to show controls
* Find the matching id's
  * If non-existent, reroute to `/browse`
  * If it does exist, remove enlarge capability and add effects -->

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