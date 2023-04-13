import { Button } from '@mui/material'
export const ConnectWallet = ({
  handleStep,
  Text,
  disabled
}: {
  handleStep: any
  Text: string
  disabled: boolean
}): JSX.Element => {
  return (
    <Button
      disabled={disabled}
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
        '&:disabled': {
          backgroundColor: '#616D72',
          border: '1px solid #616D72',
          color: '#DBD8D8'
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
      // disabled={true}
      onClick={handleStep}
    >
      {Text}
    </Button>
  )
}
