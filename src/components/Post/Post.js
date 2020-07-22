import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

export default post;  // react-router-dom 의 withRouter(post) 로 하면 Link 로 routing 될 때 자동으로 전달되는 this.props (링크 동작 관련 값들)을 자동으로 내려줄 수 있다.