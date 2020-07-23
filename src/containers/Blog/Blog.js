import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact  // activeClassName="active" 는 default와 동일. 임의의 css class로 설정가능
                                activeClassName="active">Posts</NavLink>
                            </li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',    // attached to path as hashtag. just an example. do nothing here
                                search: '?quick-submit=true' // attached to path as query param. it's just an example. do nothing here
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                </Switch>
            </div>
        );
    }
}

export default Blog;