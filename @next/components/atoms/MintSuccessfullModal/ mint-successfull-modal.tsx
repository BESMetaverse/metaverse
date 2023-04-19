import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Image from 'next/image'
import Tooltip from '@mui/material/Tooltip'
import Link from 'next/link'
import { useAppSelector } from '@hooks'
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import { connect } from 'react-redux'

interface Account {
  walletAccountNumber: string
  // Other properties of the account object go here
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
export const MintSuccessfullModal = ({
  Text,
  open,
  handleMint,
  handleOpen,
  handleClose,
  txn
}: {
  Text: string
  open: boolean
  handleMint: () => Promise<void>
  handleOpen: () => void
  handleClose: () => void
  txn: string
}): JSX.Element => {
  const account: Account = useAppSelector((state: any) => state.wallet)
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
      <Modal open={open} onClose={handleClose}>
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
            </Link> */}
            <Typography
              sx={{
                color: '#fff',
                fontSize: '1rem',
                fontWeight: 600,
                margin: '0.5rem 0 0'
              }}
            >
              Link to explorer
            </Typography>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                margin: '0.1rem 0 0'
              }}
            >
              <Link
                href={`https://stellarchain.io/transactions/${txn}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  // borderBottom: '1px solid #02BCFC',
                  color: '#02BCFC',
                  display: 'block',
                  fontSize: '1.125rem',
                  fontWeight: 400,
                  lineHeight: '26px',
                  textAlign: 'center'
                }}
              >
                {`https://stellarchain.io/transactions/${txn}`}
              </Link>
            </Box>
            <Box
              sx={{
                textAlign: 'center',
                color: '#fff',
                margin: '2rem 0 0',
                width: '100%'
              }}
            >
              <Typography>
                Steps for adding Futurenet in your networks
              </Typography>
              <List
                sx={{
                  width: '100%',
                  maxWidth: 360
                  // bgcolor: 'background.paper'
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    {/* <Avatar>
            <ImageIcon />
          </Avatar> */}
                    <Typography>Step 1</Typography>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Click on the above link"
                    sx={{
                      fontSize: '11px'
                    }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Typography>Step 2</Typography>
                    {/* <Avatar>
            <WorkIcon />
          </Avatar> */}
                  </ListItemAvatar>
                  <ListItemText
                    primary="Select CUSTOM NETWORK"
                    sx={{
                      fontSize: '11px'
                    }}
                  />
                </ListItem>
                <ListItem sx={{}}>
                  <ListItemAvatar>
                    <Typography>Step 3</Typography>
                    {/* <Avatar>
            <BeachAccessIcon />
          </Avatar> */}
                  </ListItemAvatar>
                  <ListItemText
                    primary="Enter below custom address"
                    sx={{
                      fontSize: '11px'
                    }}
                  />
                </ListItem>
                <Typography sx={{ color: '#6D6D6D' }}>
                  https://horizon-futurenet.stellar.org/
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
                      onClick={() =>
                        copyText('https://horizon-futurenet.stellar.org/')
                      }
                    >
                      <Image
                        src="/images/copy.svg"
                        width={20.4}
                        height={20.4}
                        alt="copy"
                      />
                    </Button>
                  </Tooltip>
                </Typography>
              </List>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}
