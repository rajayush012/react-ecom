import React from 'react';

import SHOP_DATA from './shop.data'
import PreviewCollectoin from '../../components/preview-collection/preview-collection.component';

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections : SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;

        return(
            <div className='shop-page'>
                {collections.map(({id, ...otherColelctionProps}) => (<PreviewCollectoin key={id} {...otherColelctionProps}/>))}
            </div>
            
        )
    }
}

export default ShopPage;