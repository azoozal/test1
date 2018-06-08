import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import isEmpty from '../../validation/is-empty';

class PostItem extends Component {
    render() {
        const { post } = this.props;

        return (
            <div className="card card-body bg-light mb-3">
                {post.text}
            </div>
        );
    }
};

PostItem.propTypes = {
    profile: PropTypes.object.isRequired
}

export default postItem;