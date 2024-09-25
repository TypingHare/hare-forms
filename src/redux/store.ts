import { configureStore } from '@reduxjs/toolkit'
import { windowSliceReducer } from './slices/window.slice'
import { resumeSliceReducer } from './slices/resume.slice'

export const store = configureStore({
    reducer: {
        window: windowSliceReducer,
        resume: resumeSliceReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
