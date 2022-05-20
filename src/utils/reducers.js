
import { UPDATE_CITY, UPDATE_LONGITUDE, UPDATE_LATITUDE, UPDATE_DAILY } from '../utils/actions';

export default function reducer(state, action) {
    switch (action.type) {
        case UPDATE_CITY: {

            return {
                ...state,
                city: { ...action.city }
            }
        }
    }

}

