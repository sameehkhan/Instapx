import React from 'react';
import { Link } from 'react-router-dom';
import { matchPath } from 'react-router';
import PostFormContainer from './post_form_container';
import FollowContainer from '../follow/follow_container';
import { LastLocationProvider } from 'react-router-last-location';


class UserShow extends React.Component {
    constructor(props) {
        super(props)

        this.handleLogout = this.handleLogout.bind(this);

    }

    // getInitialState() {
    //     return { prevPath: '' };
    //     debugger
    // }

    componentDidMount() {

        this.props.fetchUser(this.props.match.params.id);
    }

    componentDidUpdate(prevProps){
        
        if (prevProps.match.params.id != this.props.match.params.id){
            this.props.fetchUser(this.props.match.params.id)
        }
        if (prevProps.location.pathname != this.props.location.pathname) {
            window.scrollTo(0,0);
        }
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.action().then(() => this.props.history.push('/login'));
    }

    upload(e) {
        e.preventDefault();

        document.getElementById('user-modal').style.display = 'block';
    }

    closeModal(e) {
        e.preventDefault();

        document.getElementById('user-modal').style.display = 'none';

    }

    render() {
        if(this.props.user == undefined || Object.values(this.props.user).length < 5){
            return (
                <div></div>
            )
        }
            // debugger
        if(this.props.user.id == this.props.curr){
            return (
                <div className='profile-div'>
                    
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
                                    <li className='stat-li'><span className='number'>{this.props.user.follower_ids.length}</span> followers</li>
                                    <li className='stat-li'><span className='number'>{this.props.user.following_ids.length}</span> following</li>
                                </ul>
                            <div className='div-3'> 
                                <div><h1 className='full-name'>{this.props.user.full_name}</h1></div>
                                <span className='user-bio'>{this.props.user.bio}</span>
                                {/* <div><div>{this.props.user.bio}</div></div> */}
                            </div>
                            </div>
                    </div>

                    <div className='posts-block'></div>

                    <div className='posts-container'>
                        <div className='all-posts'>
                        {this.props.posts.reverse().map( post => {
                            return (
                                <Link key={post.id} to={`/users/${this.props.user.id}/${post.id}`}>
                                <div key={post.id} className='post' tabIndex="0">
                                    <img className='post-image' src={post.photo} />
                                    <div className='post-info'></div>

                                </div>
                                </Link>
                                
                                
                            )
                        })}
                        </div>
                    </div>

                    <div id='user-modal'className="upload-modal">
                        <div className='close-button-wrp'>
                            <button className='close-button' onClick={this.closeModal}>×</button>
                        </div>
                        <div className='form-container'>
                            <PostFormContainer/>
                        </div>
                    </div>
                
                </div>
            );
        } else if (this.props.user.id != this.props.curr) {
            // debugger
            return (
            <div className='profile-div'>

                <div className='info-container'>
                    <div className='image-section'><img className='prof-pic' src={this.props.user.photo} /></div>
                    <div className='info-section'>
                        <div className='div-1'>
                            <h1>{this.props.user.username}</h1>
                            <FollowContainer/>
                            {/* <div><button className='user-button'>Follow/Unfollow</button></div> */}
                            {/* <div><button className='user-button' onClick={this.handleLogout}>Log Out</button></div>
                            <div><button className='user-button' onClick={this.upload}>Upload</button></div> */}
                        </div>

                        <ul className='stats-list'>
                            <li className='stat-li'><span className='number'>{this.props.posts.length}</span> posts</li>
                            <li className='stat-li'><span className='number'>{this.props.user.follower_ids.length}</span> followers</li>
                            <li className='stat-li'><span className='number'>{this.props.user.following_ids.length}</span> following</li>
                        </ul>
                        <div className='div-3'>
                            <div><h1 className='full-name'>{this.props.user.full_name}</h1></div>
                            <span className='user-bio'>{this.props.user.bio}</span>
                            {/* <div><div>{this.props.user.bio}</div></div> */}
                        </div>
                    </div>
                </div>

                <div className='posts-block'></div>

                <div className='posts-container'>
                    <div className='all-posts'>
                        {this.props.posts.reverse().map(post => {
                            return (
                                <Link key={post.id} to={`/users/${this.props.user.id}/${post.id}`}>
                                    <div key={post.id} className='post' tabIndex="0">
                                        <img className='post-image' src={post.photo} />
                                        <div className='post-info'></div>

                                    </div>
                                </Link>


                            )
                        })}
                    </div>
                </div>

                <div id='user-modal' className="upload-modal">
                    <div className='close-button-wrp'>
                        <button className='close-button' onClick={this.closeModal}>×</button>
                    </div>
                    <div className='form-container'>
                        <PostFormContainer />
                    </div>
                </div>

            </div>
            )
        }
    }
};

export default UserShow;