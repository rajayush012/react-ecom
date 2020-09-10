import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PreviewCollectoin from '../preview-collection/preview-collection.component'
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors';

import './collection-overview.styles.scss'

const CollectionOverview = ({collections}) => {
    console.log(collections)
    return (
        <div className='collection-overview'>
        {collections.map(({id, ...otherColelctionProps}) => (<PreviewCollectoin key={id} {...otherColelctionProps}/>))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview);