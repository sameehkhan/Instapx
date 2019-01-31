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

    render() {
        // debugger
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <textarea className="post-feed-all-comments" placeholder="Add a comment..." value={this.state.body} onChange={this.update("body")} />
                    </div>
                    
                    <div>
                        <input className="post-submit-button" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
};

export default Comment;