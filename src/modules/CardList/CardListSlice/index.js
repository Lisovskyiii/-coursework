import {
	createEntityAdapter,
	createAsyncThunk,
	createSlice
} from '@reduxjs/toolkit'
import { useHttp } from '../../../hooks/useHttp'

const reportsAdapter = createEntityAdapter()

const initialState = reportsAdapter.getInitialState({
	reportsLoadingStatus: 'idle'
})

export const fetchReports = createAsyncThunk(
	'reports/fetchReports',
	async () => {
		const { request } = useHttp()
		return await request('http://localhost:3001/reports')
	}
)

const reportsSlice = createSlice({
	name: 'reports',
	initialState,
	reducers: {
		reportAdd: (state, action) => {
			reportsAdapter.addOne(state, action.payload)
		},
		reportDelete: (state, action) => {
			reportsAdapter.removeOne(state, action.payload)
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchReports.pending, state => {
				state.reportsLoadingStatus = 'loading'
			})
			.addCase(fetchReports.fulfilled, (state, action) => {
				state.reportsLoadingStatus = 'idle'
				reportsAdapter.setAll(state, action.payload)
			})
			.addCase(fetchReports.rejected, state => {
				state.reportsLoadingStatus = 'error'
			})
			.addDefaultCase(() => {})
	}
})

const { reducer, actions } = reportsSlice

export const { selectAll } = reportsAdapter.getSelectors(state => state.reports)

export default reducer

export const { reportAdd, reportDelete } = actions
