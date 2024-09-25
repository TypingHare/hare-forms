import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store.ts'

export interface ResumeState {
    mainContentIndex: string
    workExperienceIndex: number
}

const resumeSlice = createSlice({
    name: 'resume',
    initialState: {
        mainContentIndex: '',
        workExperienceIndex: 0,
    } as ResumeState,
    reducers: {
        switchMainContentIndex(
            state: ResumeState,
            pageNameAction: PayloadAction<ResumeState['mainContentIndex']>
        ) {
            state.mainContentIndex = pageNameAction.payload
        },
        switchWorkExperienceIndex(
            state: ResumeState,
            pageNameAction: PayloadAction<ResumeState['workExperienceIndex']>
        ) {
            state.workExperienceIndex = pageNameAction.payload
        },
    },
})

export const selectResume = {
    mainContentIndex: (state: RootState) => state.resume.mainContentIndex,
    workExperienceIndex: (state: RootState) => state.resume.workExperienceIndex,
} as const
export const operateResume = {
    switchMainContentIndex: resumeSlice.actions.switchMainContentIndex,
    switchWorkExperienceIndex: resumeSlice.actions.switchWorkExperienceIndex,
}
export const resumeSliceReducer = resumeSlice.reducer
