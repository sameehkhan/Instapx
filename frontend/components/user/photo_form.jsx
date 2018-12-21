import React from 'react';

class PostForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            caption: '',
            photo: ''
        }
        this.handleUpload = this.handleUpload.bind(this);
    }

    componentDidMount(){
        this.createPost()
    }

    handleUpload(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[caption]', this.state.caption);
        if (this.state.photo) {
            formData.append('post[photo]', this.state.photo);
        }
    }


    render() {
        return(
            <div>
                Hey
            </div>
        )
    }
}

export default PhotoForm;
