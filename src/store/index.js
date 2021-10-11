import { creatStore } from 'vuex'
import message from './message'

export default creatStore({
    modules: {
        message
    }
})