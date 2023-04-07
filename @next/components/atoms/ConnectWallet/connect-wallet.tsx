import { Button } from '@mui/material'
export const ConnectWallet = ({
  handleStep,
  Text
}: {
  handleStep: any
  Text: string
}): JSX.Element => {
  return (
    <Button
      sx={{
        backgroundColor: '#616D72',
        border: '1px solid #616D72',
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
          backgroundColor: '#171729',
          border: '1px solid #02BCFC'
        },
        '&:focus': {
          backgroundColor: '#171729',
          border: '1px solid #02BCFC'
        }
      }}
      // disabled={true}
      onClick={handleStep}
    >
      {Text}
    </Button>
  )
}
