import { Box, BoxProps, Breadcrumbs, Divider, IconButton, Link } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { operateResume, selectResume, useAppDispatch, useAppSelector } from '../../../redux'
import CloseIcon from '@mui/icons-material/Close'

export function ResumeMainPage(props: ResumeMainPageProps) {
    const { index, children, ...otherProps } = props
    const originalBreadcrumbs: string[] = index.split('/')
    const breadcrumbs: string[] = originalBreadcrumbs.map((s) => s.replace(/_/g, ' '))
    const selectedIndex = useAppSelector(selectResume.mainContentIndex)
    const isSelected = index === selectedIndex
    const dispatch = useAppDispatch()

    function generateLinkClickHandler(index: number) {
        return function () {
            dispatch(
                operateResume.switchMainContentIndex(
                    originalBreadcrumbs.slice(0, index + 1).join('/')
                )
            )
        }
    }

    function handleClose() {
        dispatch(operateResume.switchMainContentIndex(''))
    }

    return (
        <Box display={isSelected ? 'block' : 'none'} {...otherProps}>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} color="inherit">
                    {breadcrumbs.map((breadcrumb, index) => (
                        <Link
                            key={index}
                            underline="none"
                            sx={{ '&:hover': { cursor: 'pointer' } }}
                            onClick={generateLinkClickHandler(index)}
                        >
                            {breadcrumb}
                        </Link>
                    ))}
                </Breadcrumbs>
                <Box ml="auto" mr="1rem">
                    <IconButton size="small" onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </Box>
            <Divider sx={{ margin: '0.5rem 0' }} />
            <Box>{children}</Box>
        </Box>
    )
}

export interface ResumeMainPageProps extends BoxProps {
    index: string
}
