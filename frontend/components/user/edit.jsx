import React from 'react';

class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.user.id,
            username: this.props.user.username,
            bio: this.props.user.bio,
            photoFile: null,
            photo: this.props.user.photo
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.update = this.update.bind(this);


    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault();
        const formData = new FormData();
        formData.append("user[bio]", this.state.bio);
        if (this.state.photoFile) {
            formData.append('user[photo]', this.state.photoFile);
        }
        this.props.action(formData)
            .then(() => {
                this.props.history.push(`/users/${this.props.user.id}`);
            });
    }

    handleFile(e) {
        this.setState({ photoFile: e.currentTarget.files[0] });
    }

    render() {
        if(this.props.user == undefined){
            return( 
            <div>
            </div>
            )
        }
        if(this.state.bio == null){
            this.state.bio = '';
        }
        return (
            <div className='post-form-container'>
                <h2 className="post-index-upload-title">Edit Profile</h2>

                <div className='upload-form'>
                    <form onSubmit={this.handleSubmit}>
                        <div><textarea className="post-caption" value={this.state.bio} onChange={this.update("bio")} /></div>
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