/**
 * Created by cody on 4/13/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router';

class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return this.props.posts.map((post) => {
            return (
                <Link to={"posts/" + post.id} key={post.id}>
                    <li className="list-group-item">
                        <span className="pull-xs-right">{post.categories}</span>
                        <strong>{post.title}</strong>
                    </li>
                </Link>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    };
}

function mapStateToProps(state) {
    return {posts: state.posts.all};
}
// The same as mapDispatchToProps
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
