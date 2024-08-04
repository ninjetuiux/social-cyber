import TermsOfUse from '@/app/TermsOfUse/page';
import { Backdrop, Box, Fade, Modal, Typography } from '@mui/material'

const style = {
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
const TermsOfUseModal = ({ isTermsOfUseOpen, toggleTermsOfUse }) => {

  return (
    <>
              <Modal 
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isTermsOfUseOpen}
                onClose={toggleTermsOfUse}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    timeout: 500,
                  },
                }}
        >
            <Fade in={isTermsOfUseOpen}>
            <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2" className="text-center">
                תנאי השימוש
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <TermsOfUse />
                </Typography>
            </Box>
            </Fade>
        </Modal>
    </>
  )
}

export default TermsOfUseModal
