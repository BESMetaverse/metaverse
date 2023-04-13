import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Image from 'next/image'
import Tooltip from '@mui/material/Tooltip'
import Link from 'next/link'

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
export const MintSuccessfullModal = ({
  Text,
  open,
  handleMint,
  handleOpen,
  handleClose
}: {
  Text: string
  open: boolean
  handleMint: () => Promise<void>
  handleOpen: () => void
  handleClose: () => void
}): JSX.Element => {
  const [text, setText] = React.useState<string>('Copy')

  const copyText = (copyText: string): void => {
    setText('Copied')
    setTimeout(() => {
      setText('Copy')
    }, 1000)
    /* Copy the text inside the text field */
    navigator?.clipboard?.writeText(copyText)
  }

  return (
    <div>
      <Button
        sx={{
          backgroundColor: '#02BCFC',
          border: '1px solid #02BCFC',
          borderRadius: '0.313rem',
          color: '#181D18',
          fontSize: '1.125rem',
          fontWeight: 500,
          height: '3.438rem',
          margin: '1.5rem 0 0',
          textAlign: 'center',
          width: '100%',
          '& :disabled': {
            backgroundColor: '#02BCFC'
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
        onClick={handleMint}
      >
        {Text} 1 Mechs
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
              src="/images/successfull.svg"
              width={90}
              height={90}
              alt="successfull"
              style={{
                margin: '0 0 0.875rem'
              }}
            />
            <Typography
              variant="h2"
              sx={{
                color: '#fff',
                fontSize: '1.5rem',
                fontWeight: 600,
                margin: '0 0 1rem'
              }}
            >
              Successfully mint
            </Typography>
            <Typography
              sx={{
                color: '#fff',
                fontSize: '1rem',
                fontWeight: 400,
                margin: '0 0 1.875rem'
              }}
            >
              Your item has been minted
            </Typography>
            {/* commented for now */}
            {/* <Link
              href="https://ironpaw.io/terms"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#fff',
                fontSize: '1rem',
                fontWeight: 600
              }}
            >
              Link to explore
            </Link>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                margin: '2.813rem 0 0'
              }}
            >
              <Link
                href="https://ironpaw.io/terms"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  borderBottom: '1px solid #02BCFC',
                  color: '#02BCFC',
                  display: 'block',
                  fontSize: '1.125rem',
                  fontWeight: 400,
                  lineHeight: '26px'
                }}
              >
                http://search?q=exploere
              </Link>
              <Tooltip
                title={text}
                arrow
                placement="top"
                sx={{
                  backgroundColor: '#000'
                }}
              >
                <Button
                  sx={{
                    minWidth: '1.875rem'
                  }}
                  onClick={() => copyText('http://search?q=exploere')}
                >
                  {' '}
                  <Image
                    src="/images/copy.svg"
                    width={20.4}
                    height={20.4}
                    alt="copy"
                  />
                </Button>
              </Tooltip>
            </Box> */}
          </Box>
        </Box>
      </Modal>
    </div>
  )
}
