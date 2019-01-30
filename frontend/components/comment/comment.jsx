import React from 'react';


class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props.comment)

    }

    componentDidMount() {
        this.props.fetchComments();
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
};

export default Comment;