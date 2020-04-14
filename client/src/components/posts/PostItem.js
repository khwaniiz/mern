import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  addLike,
  removeLike,
  auth,
  deletePost,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
}) => (
  <div className='post bg-white my-1 p-1'>
    <div>
      <Link to={`/profile/${user}`}>
        <img src={avatar} alt='' className='round-img my-1' />

        <h4>{name}</h4>
      </Link>
    </div>

    <div>
      <p className='ny-1'>{text}</p>
      <p
        className='post-date'
        style={{ color: '#aaa', fontSize: '0.8rem', marginTop: '0.8rem' }}
      >
        Posted on <Moment format='YYY/MM/DD'>{date}</Moment>
      </p>

      {showActions && (
        <Fragment>
          <button
            onClick={(e) => addLike(_id)}
            type='button'
            className='btn btn-light my-2'
          >
            <i className='fas fa-thumbs-up'></i>{' '}
            {likes.length > 0 && <span> {likes.length}</span>}
          </button>
          <button
            onClick={(e) => removeLike(_id)}
            type='button'
            className='btn btn-light'
          >
            <i className='fas fa-thumbs-down'></i>
          </button>
          <Link to={`/posts/${_id}`} className='btn btn-primary'>
            Discussion{' '}
            {comments.length > 0 && (
              <span className='comment-count'>{comments.length}</span>
            )}
          </Link>
          {!auth.loading && user === auth.user._id && (
            <button
              onClick={(e) => deletePost(_id)}
              type='button'
              className='btn btn-danger'
            >
              <i className='fas fa-times'></i>
            </button>
          )}
        </Fragment>
      )}
    </div>
  </div>
);

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
