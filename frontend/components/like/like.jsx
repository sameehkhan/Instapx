import React from 'react';


class Like extends React.Component {
    constructor(props) {
        super(props);
        // this.state = Object.assign({}, this.props.comment);

        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.update = this.update.bind(this);

    }

    render() {
        // debugger
        if(this.props.hasLiked){
        return (
            <div>
                <svg onClick={() => this.props.deleteLike(this.props.postId)} className="heart-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-reactid="641"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </div>
        );
        }else{
            return (
                <div>
                    <svg onClick={() => this.props.createLike({ post_id: this.props.postId })} className="heart-empty" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-reactid="641"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </div>
            )
        }
    }
};

export default Like;