import React from 'react';
import { Link } from 'react-router-dom';


class PostShow extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                {this.props.post.photo}
            </div>
        );
    }
};

export default PostShow;