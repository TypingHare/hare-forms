import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store.ts'

export interface ResumeState {
    mainContentIndex: string
    workExperienceItemIndex: number
    educationItemIndex: number
}

const resumeSlice = createSlice({
    name: 'resume',
    initialState: {
        mainContentIndex: '',
        workExperienceItemIndex: 0,
        educationItemIndex: 0,
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
            workExperienceItemIndex: PayloadAction<ResumeState['workExperienceItemIndex']>
        ) {
            state.workExperienceItemIndex = workExperienceItemIndex.payload
        },
        switchEducationIndex(
            state: ResumeState,
            educationItemIndex: PayloadAction<ResumeState['educationItemIndex']>
        ) {
            state.educationItemIndex = educationItemIndex.payload
        },
    },
})

export const selectResume = {
    mainContentIndex: (state: RootState) => state.resume.mainContentIndex,
    workExperienceItemIndex: (state: RootState) => state.resume.workExperienceItemIndex,
    educationItemIndex: (state: RootState) => state.resume.educationItemIndex,
} as const
export const operateResume = {
    switchMainContentIndex: resumeSlice.actions.switchMainContentIndex,
    switchWorkExperienceIndex: resumeSlice.actions.switchWorkExperienceIndex,
    switchEducationIndex: resumeSlice.actions.switchEducationIndex,
}
export const resumeSliceReducer = resumeSlice.reducer
