import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Image from 'next/image'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: 385,
  bgcolor: '#171729',
  borderRadius: '2rem',
  p: 4
}
export const DisconnectWalletModal = ({
  Text
}: {
  Text: string
}): JSX.Element => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button
        sx={{
          backgroundColor: 'transparent',
          border: '1px solid #fff',
          borderRadius: '0.625rem',
          color: '#fff',
          display: 'block',
          fontSize: '1rem',
          fontWeight: 600,
          height: '2.5rem',
          overflow: 'hidden',
          textAlign: 'center',
          textOverflow: 'ellipsis',
          width: '8.813rem'
        }}
        onClick={handleOpen}
      >
        {Text}
      </Button>
      <Modal
        keepMounted
        open={open}
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
              src="/images/disconnect.svg"
              width={90}
              height={90}
              alt="disconnect"
              style={{
                margin: '0 0 0.875rem'
              }}
            />
            <Typography
              variant="h2"
              sx={{
                color: '#fff',
                fontSize: '1.625rem',
                fontWeight: 600,
                margin: '0 0 1rem',
                textAlign: 'center'
              }}
            >
              Do you want to disconnect the wallet
            </Typography>

            <Button
              sx={{
                backgroundColor: '#02BCFC',
                border: '1px solid #02BCFC',
                borderRadius: '0.313rem',
                color: '#DBD8D8',
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
            >
              Disconnect
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}
