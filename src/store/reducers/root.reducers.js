import { combineReducers } from 'redux'
import authReducer from '../../components/auth/auth.reducer'
import dashboardReducer from '../../components/dashboard/dashboard.reducer';

export default combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer
})