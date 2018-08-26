//State argument is not application state
//Only the state this reducer is responsible for
export default function(state = null, action){
    switch(action.type){
        case 'BOOK_SELECTED': 
            return action.payload;
            //dont do state.title = book.title, return state
              
    }
    return state;
}