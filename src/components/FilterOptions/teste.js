export const Types = {
	GET_LOCATIONS_REQUEST: 'LOCATION/GET_LOCATIONS_REQUEST',
	GET_LOCATIONS_SUCCESS: 'LOCATION/GET_LOCATIONS_SUCCESS',
	GET_LOCATIONS_FAIL: 'LOCATION/GET_LOCATIONS_FAIL',
	ADD_LOCATION_UNLOGED: 'LOCATION/ADD_LOCATION_UNLOGED',
	REMOVE_LOCATION_UNLOGED: 'LOCATION/REMOVE_LOCATION_UNLOGED',
	ADD_LOCATION_REQUEST: 'LOCATION/ADD_LOCATION_REQUEST',
	ADD_LOCATION_SUCCESS: 'LOCATION/ADD_LOCATION_SUCCESS',
	ADD_LOCATION_FAIL: 'LOCATION/ADD_LOCATION_FAIL',
	REMOVE_LOCATION_REQUEST: 'LOCATION/REMOVE_LOCATION_REQUEST',
	REMOVE_SINGLE_LOCATION: 'LOCATION/REMOVE_SINGLE_LOCATION',
	SET_LOCATION: 'LOCATION/SET_LOCATION',
	CALC_SHIPMENT_REQUEST: 'LOCATION/CALC_SHIPMENT_REQUEST',
	CALC_SHIPMENT_SUCCESS: 'LOCATION/CALC_SHIPMENT_SUCCESS',
	CALC_SHIPMENT_FAIL: 'LOCATION/CALC_SHIPMENT_FAIL',
	UPDATE_LOCATION_REQUEST: 'LOCATION/UPDATE_LOCATION_REQUEST',
	UPDATE_LOCATION_FAIL: 'LOCATION/UPDATE_LOCATION_FAIL',
	UPDATE_LOCATION_SUCCESS: 'LOCATION/UPDATE_LOCATION_SUCCESS',
};

const INITIAL_STATE = {
	locations: [],
	shipment: null,
	currentLocation: null,
	locationUnloged: null,
	loading: false,
	error: true,
};

export default function locations(state = INITIAL_STATE, action) {
	switch (action.type) {
		case Types.ADD_LOCATION_UNLOGED:
			return { ...state, locationUnloged: action.payload };
		case Types.REMOVE_LOCATION_UNLOGED:
			return { ...state, locationUnloged: null };
		case Types.GET_LOCATIONS_REQUEST:
			return { ...state, loading: true };
		case Types.GET_LOCATIONS_SUCCESS:
			return {
				...state,
				locations: action.payload,
				currentLocation: action.payload[0],
				loading: false,
				error: false,
			};
		case Types.GET_LOCATIONS_FAIL:
			return { ...state, loading: false, error: true };
		case Types.ADD_LOCATION_REQUEST:
			return { ...state, loading: true, error: false };
		case Types.ADD_LOCATION_FAIL:
			return { ...state, loading: false, error: false };
		case Types.UPDATE_LOCATION_REQUEST:
			return { ...state, loading: true, error: false };
		case Types.UPDATE_LOCATION_SUCCESS:
			return { ...state, loading: false, error: false };
		case Types.UPDATE_LOCATION_FAIL:
			return { ...state, loading: false, error: false };
		case Types.REMOVE_SINGLE_LOCATION:
			return { ...state, shops: [], loading: false, error: false };
		case Types.SET_LOCATION:
			return {
				...state,
				currentLocation: action.payload,
				loading: false,
				error: false,
			};
		case Types.CALC_SHIPMENT_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case Types.CALC_SHIPMENT_SUCCESS:
			return {
				...state,
				...action.payload,
				loading: false,
				error: false,
			};
		case Types.CALC_SHIPMENT_FAIL:
			return {
				...state,
				loading: false,
				error: true,
			};
		default:
			return state;
	}
}

export const Creators = {
	addLocationUnlogged: (payload) => ({
		type: Types.ADD_LOCATION_UNLOGED,
		payload,
	}),
	removeLocationUnlogged: () => ({
		type: Types.REMOVE_LOCATION_UNLOGED,
	}),
	getLocations: () => ({
		type: Types.GET_LOCATIONS_REQUEST,
	}),
	getLocationsSuccess: (payload) => ({
		type: Types.GET_LOCATIONS_SUCCESS,
		payload,
	}),
	getLocationsFail: () => ({
		type: Types.GET_LOCATIONS_FAIL,
	}),
	addLocation: (payload, navigation) => ({
		type: Types.ADD_LOCATION_REQUEST,
		payload,
		navigation,
	}),
	addLocationFail: () => ({
		type: Types.ADD_LOCATION_FAIL,
	}),
	updateLocation: (payload, updateLocation) => ({
		type: Types.UPDATE_LOCATION_REQUEST,
		payload,
		updateLocation,
	}),
	updateLocationFail: () => ({
		type: Types.UPDATE_LOCATION_FAIL,
	}),
	removeLocation: (payload) => ({
		type: Types.REMOVE_LOCATION_REQUEST,
		payload,
	}),
	removeSingleLocation: (payload) => ({
		type: Types.REMOVE_SINGLE_LOCATION,
		payload,
	}),
	setLocation: (payload) => ({
		type: Types.SET_LOCATION,
		payload,
	}),
	calcShipment: (payload) => ({
		type: Types.CALC_SHIPMENT_REQUEST,
		payload,
	}),
	calcShipmentSuccess: (payload) => ({
		type: Types.CALC_SHIPMENT_SUCCESS,
		payload,
	}),
	calcShipmentFail: () => ({
		type: Types.CALC_SHIPMENT_FAIL,
	}),
};
