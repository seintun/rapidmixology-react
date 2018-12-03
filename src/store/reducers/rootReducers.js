import { combineReducers } from 'redux'
import dashboardReducer from '../../components/dashboard/dashboard.reducer';

export default combineReducers({
  dashboard: dashboardReducer
})