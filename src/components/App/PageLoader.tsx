import { useEffect } from 'react'
import { switchPage, useAppDispatch } from '../../redux'
import { PageName, Url } from '../../constants/web.ts'
import _ from 'lodash'
import { getPureUrl } from '../../common/window.ts'

/**
 * This component includes all initial events when the app bootstraps. Note that the app bootstraps
 * when the webpage being refreshed.
 */
export function PageLoader() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const pureUrl = getPureUrl()
        if (pureUrl === '') {
            dispatch(switchPage('HOME'))
        } else {
            const pageName = _.findKey(Url, (v) => v === pureUrl) as PageName | undefined
            if (pageName) {
                dispatch(switchPage(pageName))
            } else {
                console.error(`Unknown page name: ${pureUrl}; redirecting to the home page...`)
                dispatch(switchPage('HOME'))
            }
        }
    }, [dispatch])

    return <></>
}
