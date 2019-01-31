import React from 'react';


class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props.comment);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);

    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit(e) {
        // debugger

        e.preventDefault();
        console.log(this.state)
        this.props.action(this.state).then( ()=> this.setState({body: ''}));
            // .then(() => {
            //     this.props.history.push("/feed")
            // });
    }

    // onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    //     // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    //     if (event.key === 'Enter') {
    //         event.preventDefault();
    //         event.stopPropagation();
    //         this.onSubmit();
    //     }
    // }

    handleKeyPress(e) {
        if (e.key == 'Enter') {
            e.preventDefault();
            this.onSubmit();
        }
    }

    render() {
        // debugger
        return (
            <div className='comment-creator-container'>
                <div className='create-comment-wrapper'>
                    <form onSubmit={this.handleSubmit}>
                        <textarea onKeyDown={this.handleKeyPress} className="create-post-comment" placeholder="Add a comment..." value={this.state.body} onChange={this.update("body")} />
                        <input className='hidden-submit' type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        );
    }
};

export default Comment;