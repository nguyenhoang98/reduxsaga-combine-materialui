import { combineReducers } from 'redux' ;
import taskReducer from './Task';
import ui from './ui' ;
import model from './Model' ;
import { reducer as formReducer } from 'redux-form' ;
var appReducers = combineReducers({
   task : taskReducer ,
   ui : ui ,
   model : model ,
   form : formReducer
})
export default appReducers ;
