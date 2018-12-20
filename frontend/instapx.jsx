import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let preloadedState = {} 
    

    window.addEventListener("scroll", (e) =>{
        const word = document.getElementsByClassName("nav-bar-word");
        const line = document.getElementsByClassName("nav-bar-line");
        const bar = document.getElementsByClassName("big-nav");

        if(word.length > 0 && line.length > 0){
            if(window.scrollY > 200){
                line[0].classList.add('visible');
                word[0].classList.add('visible');
                bar[0].classList.add('height');
            }else{
                line[0].classList.remove('visible');
                word[0].classList.remove('visible');
                bar[0].classList.remove('height');
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