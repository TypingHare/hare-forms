import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store.ts'
import { PageName } from '../../constants/web.ts'

export interface GlobalState {
    pageName: PageName
}

const windowSlice = createSlice({
    name: 'window',
    initialState: {
        pageName: 'HOME',
    } as GlobalState,
    reducers: {
        switchPage(state: GlobalState, pageNameAction: PayloadAction<PageName>) {
            state.pageName = pageNameAction.payload
        },
    },
})

export const { switchPage } = windowSlice.actions
export const selectWindow = {
    pageName: (state: RootState) => state.window.pageName,
}
export const windowSliceReducer = windowSlice.reducer
