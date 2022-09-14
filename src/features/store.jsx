import { configureStore } from '@reduxjs/toolkit';
import cartlistReducer from './Cardlist';
import addReducer from './Cardlist'
import  deleteReducer from './Cardlist';
import searchReducer from './Cardlist'
import makeupReducer from './Makeup.'
import makeupcartReducer from './makupcart'
import dicountReducer from './discount'
import clearReducer from './Cardlist'
export default configureStore({
    reducer:{
       cartlist:cartlistReducer,
       add:addReducer,
       delete:deleteReducer,
       search:searchReducer,
       makeup:makeupReducer,
       makeupcart:makeupcartReducer,
       discount:deleteReducer,
       clear:clearReducer
    }
})