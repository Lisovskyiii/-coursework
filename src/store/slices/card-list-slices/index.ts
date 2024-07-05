import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';
import { Report } from 'types/ReportType';

import { useHttp } from '../../../hooks/useHttp';

const reportsAdapter = createEntityAdapter<Report>();

interface IInitialStateReports {
  ids: number[];
  entities: { [key: number]: Report };
  reportsLoadingStatus: 'idle' | 'loading' | 'error';
}

const initialState: IInitialStateReports = reportsAdapter.getInitialState({
  reportsLoadingStatus: 'idle'
});

export const fetchReports = createAsyncThunk('reports/fetchReports', async () => {
  const { request } = useHttp();

  return request<Report[]>({ url: 'http://localhost:3001/reports' });
});

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {
    reportAdd: (state, action) => {
      reportsAdapter.addOne(state, action.payload);
    },
    reportDelete: (state, action) => {
      reportsAdapter.removeOne(state, action.payload);
    }
  },
  extraReducers: (builder) => {
    /* eslint-disable no-param-reassign */
    builder
      .addCase(fetchReports.pending, (state) => {
        state.reportsLoadingStatus = 'loading';
      })
      .addCase(fetchReports.fulfilled, (state, action) => {
        state.reportsLoadingStatus = 'idle';
        reportsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchReports.rejected, (state) => {
        state.reportsLoadingStatus = 'error';
      })
      .addDefaultCase(() => {});
    /* elsint-enable no-param-reassign */
  }
});

const { reducer, actions } = reportsSlice;

export const { selectAll, selectById } = reportsAdapter.getSelectors(
  (state: RootState) => state.reports
);

export default reducer;

export const { reportAdd, reportDelete } = actions;
