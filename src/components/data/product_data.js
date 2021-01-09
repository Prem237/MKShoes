import { ADD_TO_CART} from '../actions/action-types/cart-actions'

const product_card={
    items:[
    {
        id:1,
        product_name:"Macbeth",
        description:"Leather shoes, High quality",
        price:200,
        currency:"Rs.",
        thumb:"/images/1.png"
    },{
        id:2,
        product_name:"Dock-shoes",
        description:"Transparent",
        price:220,
        currency:"Rs.",
        thumb:"/images/2.png"
    },{
        id:3,
        product_name:"Sneaker",
        description:"High rating brand, Transparent",
        price:150,
        currency:"Rs.",
        thumb:"/images/3.png"
    },{
        id:4,
        product_name:"Nike-shoes",
        description:"High rating brand, Transparent",
        price:700,
        currency:"Rs.",
        thumb:"/images/4.png"
    },{
        id:5,
        product_name:"Sneakers",
        description:"Transparent, Leather",
        price:250,
        currency:"Rs.",
        thumb:"/images/5.png"
    },{
        id:6,
        product_name:"Macbeth-sneaker",
        description:"Transparent, Good Quality",
        price:320,
        currency:"Rs.",
        thumb:"/images/6.png"
    }
],
addedItems:[],
total:0
}
const cartReducer=(state=product_card,action)=>
{

    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
        //check if the action id exists in the addedItems
       let existed_item= state.addedItems.find(item=> action.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1 
           return{
              ...state,
               total: state.total + addedItem.price 
                }
      }
       else{
          addedItem.quantity = 1;
          //calculating the total
          let newTotal = state.total + addedItem.price 
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal
          }
          
      }
  }
  else{
      return state
  }
}
export default cartReducer;