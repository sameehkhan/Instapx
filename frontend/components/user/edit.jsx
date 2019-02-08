import React from 'react';

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props.post, { photoFile: null })

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.update = this.update.bind(this);


    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("post[caption]", this.state.caption);
        formData.append("post[photo]", this.state.photoFile);
        this.props.action(formData)
            .then(() => {
                this.props.history.push("/feed")
            });
    }

    handleFile(e) {
        this.setState({ photoFile: e.currentTarget.files[0] });
    }

    render() {

        return (
            <div className='post-form-container'>
                {/* <div className='close-button'onClick={this.closeModal}>X</div> */}
                <h2 className="post-index-upload-title">Edit Profile</h2>

                <div className='upload-form'>
                    <form onSubmit={this.handleSubmit}>
                        <div><textarea className="post-caption" placeholder="Bio..." onChange={this.update("caption")} /></div>
                        <div className='upload-btn-wrapper'>
                            <button className="file-upload-button">Change Profile Picture</button>
                            <input type="file" onChange={this.handleFile.bind(this)} />
                        </div>
                        <div><input className="post-submit-button" type="submit" value="Submit" /></div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Edit;