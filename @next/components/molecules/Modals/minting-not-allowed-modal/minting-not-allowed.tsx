import Image from 'next/image'
import { Box, Button, Modal, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

interface MintingModalProps {
  connected: boolean
  handleClose: () => void
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 385,
  bgcolor: '#171729',
  border: '2px solid #171729',
  borderRadius: '2rem',
  p: 4
}

export const MintingNotAllowedModal = ({
  connected,
  handleClose
}: MintingModalProps): JSX.Element => {
  return (
    <Modal
      open={false}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <Button
          onClick={handleClose}
          sx={{
            color: '#fff',
            height: '1.5rem',
            minWidth: '1.5rem',
            position: 'absolute',
            right: '1.875rem',
            top: '1.875rem',
            width: '1.5rem'
          }}
        >
          <CloseIcon />
        </Button>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <Image
            src="/images/not-allowed.png"
            width={90}
            height={90}
            alt="disconnect"
            style={{
              margin: '0 0 0.875rem'
            }}
          />
          <Typography
            sx={{
              color: '#fff',
              fontSize: '1.125rem',
              fontWeight: 500,
              margin: '0 0 1rem',
              textAlign: 'center'
            }}
          >
            Minting not allowed
          </Typography>
        </Box>
      </Box>
    </Modal>
  )
}
