import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let preloadedState = {} 
    

    window.addEventListener("scroll", (e) =>{
        const word = document.getElementsByClassName("nav-bar-word")
        const line = document.getElementsByClassName("nav-bar-line")
        if(word.length > 0 && line.length > 0){
            if(window.scrollY !== 0){
                
            }
        }
    })


    if (window.currentUser) {
        preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                }
            },
            session: {
                id: window.currentUser.id
            }
        }
    }
    const store = configureStore(preloadedState);
    window.store = store; 
    ReactDOM.render(<Root store={store}/>, root);
});