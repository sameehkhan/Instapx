import React from 'react';
import { Link } from 'react-router-dom';
import PostFormContainer from './post_form_container';
import PostShowContainer from '../post/post_show_container';

class UserShow extends React.Component {
    constructor(props) {
        super(props)

        this.handleLogout = this.handleLogout.bind(this);

    }

componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
}

handleLogout(e) {
    e.preventDefault();
    this.props.action().then(() => this.props.history.push('/login'));
}

upload(e) {
    e.preventDefault();

    document.getElementById('user-modal').style.display = 'block';
}

showPost(e) {
    // debugger
    e.preventDefault();
    

    // document.getElementById(`modal-`+ e.currentTarget.id).style.display = 'block';

    let mod = (<div id={`post-modal`} className="post-modal">
        <div className='post-show-container'>
            <PostShowContainer postId={e.currentTarget.id} />
        </div>
    </div>)
    document.getElementById('prof-modal').append(mod)
}

    render() {
        if(this.props.user === undefined){
            return (
                <div></div>
            )
        }
         
        return (
            <div id='prof-modal'className='profile-div'>
                
                <div className='info-container'>
                    <div className='image-section'><img className='prof-pic' src={this.props.user.photo} /></div>
                    <div className='info-section'>
                            <div className='div-1'> 
                                <h1>{this.props.user.username}</h1>
                                <div><button className='user-button'>Edit Profile</button></div>
                                <div><button className='user-button' onClick={this.handleLogout}>Log Out</button></div>
                                <div><button className='user-button' onClick={this.upload}>Upload</button></div>
                            </div>

                            <ul className='stats-list'> 
                                <li className='stat-li'><span className='number'>{this.props.posts.length}</span> posts</li>
                                <li className='stat-li'>followers</li>
                                <li className='stat-li'>following</li>
                            </ul>
                        <div className='div-3'> 
                        <h1 className='full-name'>{this.props.user.full_name}</h1>
                            {/* <div><div>{this.props.user.bio}</div></div> */}
                        </div>
                        </div>
                </div>

                <div className='posts-block'></div>

                <div className='posts-container'>
                    <div className='all-posts'>
                    {this.props.posts.reverse().map( post => {
                        return (
                            <div id={post.id} key={post.id} className='post' tabIndex="0" onClick={this.showPost}>
                                <img className='post-image' src={post.photo} />
                                <div className='post-info'></div>

                            </div>
                            
                            
                        )
                    })}
                    </div>
                </div>

                <div id='user-modal'className="upload-modal">
                    <div className='form-container'>
                        <PostFormContainer/>
                    </div>
                </div>
            
            </div>
        );
    }
};

export default UserShow;