import {configureStore} from '@reduxjs/toolkit';
import DemoSlice  from './DemoSlice';
import counterReducer from './reducer/demoreducer';
import  BonusSlice  from './bonusSlice';

const store = configureStore({
    reducer:{
        demo:DemoSlice,
        reducerDemo: counterReducer,
        bonus:BonusSlice
    }
})

export default store