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
                HEART
                <img
                    className="heart"
                    src={window.instapxlogo}
                    onClick={() => this.props.deleteLike(this.props.postId)}
                />
                
            </div>
        );
        }else{
            return (
                <div>
                    NO HEART
                    <img
                        className="heart"
                        src={window.icon}
                        onClick={() => this.props.createLike({ post_id: this.props.postId })}
                    />

                </div>
            )
        }
    }
};

export default Like;