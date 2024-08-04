import PrivacyPolicy from '@/app/PrivacyPolicy/page'
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
const PrivacyPolicyModal = ({ isPrivacyPolicyOpen, togglePrivacyPolicy }) => {

  return (
    <>
              <Modal 
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isPrivacyPolicyOpen}
                onClose={togglePrivacyPolicy}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    timeout: 500,
                  },
                }}
        >
            <Fade in={isPrivacyPolicyOpen}>
            <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2" className="text-center">
                מדיניות פרטיות
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <PrivacyPolicy />
                </Typography>
            </Box>
            </Fade>
        </Modal>
    </>
  )
}

export default PrivacyPolicyModal
