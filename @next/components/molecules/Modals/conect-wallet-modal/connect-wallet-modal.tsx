import Image from 'next/image'
import { Box, Button, Modal, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useRouter } from 'next/router'

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

export const ConnectWalletModal = ({
  connected,
  handleClose
}: MintingModalProps): JSX.Element => {
  const router = useRouter()

  const handleModalClose = (): any => {
    return router.push('/')
  }
  return (
    <Modal
      open={!connected}
      onClose={() => {}}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <Button
          onClick={handleModalClose}
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
            src="/images/info.svg"
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
            Your Wallet is not connected first you have to connect the wallet.
          </Typography>

          <Button
            sx={{
              backgroundColor: '#02BCFC',
              border: '1px solid #02BCFC',
              borderRadius: '0.313rem',
              color: '#181D18',
              fontSize: '1.125rem',
              fontWeight: 500,
              height: '3.438rem',
              textAlign: 'center',
              width: '100%',
              '& :disabled': {
                backgroundColor: '#616D72'
              },
              '&:hover': {
                backgroundColor: '#02BCFC',
                border: '1px solid #02BCFC'
              },
              '&:focus': {
                backgroundColor: '#02BCFC',
                border: '1px solid #02BCFC'
              }
            }}
            onClick={(): any => router.push('/wallet')}
          >
            Connect Wallet
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}
