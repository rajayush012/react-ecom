export const addItemToCart = (cartItems, itemToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === itemToAdd.id)

    if(existingCartItem){
        return cartItems.map(item => 
            item.id===itemToAdd.id 
            ? {...item, quantity : item.quantity+1}: item )
    }

    return [...cartItems, {...itemToAdd,quantity:1}]
}

export const clearItemFromCart = (cartItems, itemToClear) => {
    return cartItems.filter(cartItem=> cartItem.id!==itemToClear.id)
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
    if(itemToRemove.quantity === 1)
        return cartItems.filter(cartItem=> cartItem.id!==itemToRemove.id);
    
    return cartItems.map(item => 
            item.id===itemToRemove.id 
            ? {...item, quantity : item.quantity-1}: item );
}