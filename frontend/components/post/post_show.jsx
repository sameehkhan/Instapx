import React from 'react';
import { Link } from 'react-router-dom';


class PostShow extends React.Component {
    constructor(props) {
        super(props)

        // this.handleLogout = this.handleLogout.bind(this);

    }

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }

    // handleLogout(e) {
    //     e.preventDefault();
    //     this.props.action().then(() => this.props.history.push('/login'));
    // }


    // componentDidUpdate() {  for different user show pages
    //     this.props.fetchUser(this.props.match.params.id);
    // }

    render() {
        
        // if (this.props.post === undefined) {
        //     return (
        //         <div></div>
        //     )
        // }

        return (
            <div>
                {/* {this.props.post.photo} */}
            </div>
        );
    }
};

export default PostShow;