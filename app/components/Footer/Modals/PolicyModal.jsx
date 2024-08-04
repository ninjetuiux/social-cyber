import AccessibillityPolicy from '@/app/AccessibillityPolicy/page';
import Policy from '@/app/Policy/page';
import { Backdrop, Box, Fade, Modal, Typography } from '@mui/material'

let style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const PolicyModal = ({ isPolicyOpen, togglePolicy }) => {
    // Modify style for larger content
    if (isPolicyOpen) {
        style = {
            ...style,
            maxHeight: '80vh',  // Set max height to avoid overflow
            overflowY: 'auto',  // Enable vertical scrolling
        };
    }

  return (
    <>
              <Modal 
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isPolicyOpen}
                onClose={togglePolicy}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    timeout: 500,
                  },
                }}
        >
            <Fade in={isPolicyOpen}>
            <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2" className="text-center">
                תקנון האתר
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <Policy />
                </Typography>
            </Box>
            </Fade>
        </Modal>
    </>
  )
}

export default PolicyModal
