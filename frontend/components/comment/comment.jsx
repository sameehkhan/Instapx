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


    render() {
        return (
            <div>
                
            </div>
        );
    }
};

export default Comment;