import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleInput(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleFile(e) {
        this.setState({ photoFile: e.currentTarget.files[0] });
    }

    handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append("post[title]", this.state.title);
        formData.append("post[user_id]", this.state.user_id);
        formData.append("post[attached_photo]", this.state.photoFile);
        this.props.createPost(formData);
    }

    render() {

        console.log(this.state);
        return (
            <div className='post_form'>

            <form onSubmit={this.handleSubmit}>
                <label htmlFor="post-caption"> Caption </label>
                <input type="text"
                    id="post-caption"
                    // value={this.state.title}

                    onChange={this.handleInput("caption")} />
                {/* onChange={this.handleInput.bind(this)}/> */}

                {/* <label htmlFor="photographer-id"> Photographer Id</label>
                <input type="text"
                id="photographer-id"
                value={this.state.photographerId}
                onChange={this.handleInput("photographerId")}/> */}

                <input type="file"
                    onChange={this.handleFile} />
                <button> Upload a new Photo!</button>
            </form>
        </div>
        );
    }
}

export default PostForm;