import React from 'react';


class Like extends React.Component {
    constructor(props) {
        super(props);
        // this.state = Object.assign({}, this.props.comment);

        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.update = this.update.bind(this);

    }


    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("post[caption]", this.state.caption);
        formData.append("post[photo]", this.state.photoFile);
        this.props.createLike(formData);
    }


    render() {
        // debugger
        if(this.props.hasLiked){
        return (
            <div>
                HEART
                
            </div>
        );
        }else{
            return (
                <div>
                    NO HEART
                    <form onSubmit={this.handleSubmit}>
                        <div><textarea className="post-caption" placeholder="Add a caption..." onChange={this.update("caption")} /></div>
                        <div className='upload-btn-wrapper'>
                            <button className="file-upload-button">Upload a file</button>
                            <input type="file" onChange={this.handleFile.bind(this)} />
                        </div>
                        <div><input className="post-submit-button" type="submit" value="Submit" /></div>
                    </form>
                </div>
            )
        }
    }
};

export default Like;