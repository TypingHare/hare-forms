import { Box, BoxProps, Modal, ModalProps } from '@mui/material'

export function CenterModal(props: CenterModalProps) {
    const { children, boxStyle, ...otherProps } = props

    return (
        <Modal {...otherProps}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'background.paper',
                    border: 'none',
                    outline: 'none',
                    ...boxStyle,
                }}
            >
                {children}
            </Box>
        </Modal>
    )
}

export interface CenterModalProps extends ModalProps {
    boxStyle?: BoxProps['sx']
}
