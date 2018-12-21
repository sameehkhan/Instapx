import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props.post, { photoFile: null })

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("post[caption]", this.state.caption)
        formData.append("post[photo]", this.state.photoFile)
        this.props.action(formData)
    }

    handleFile(e) {
        this.setState({ photoFile: e.currentTarget.files[0] });
    }

    render() {
        return (
            <div className='post-form'>
                <h2 className="post-index-upload-title">Upload Your Own Photo</h2>
                <form className="post-form" onSubmit={this.handleSubmit}>
                    <input className="post-caption" type="text" value={this.state.title} onChange={this.update("caption")} />
                    <input className="post-file" type="file" onChange={this.handleFile.bind(this)} />
                    <input className="post-submit-button" type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default PostForm;