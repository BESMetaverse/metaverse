import Button from '@mui/material/Button'
import Image from 'next/image'
export const IconItem = ({
  Title,
  icon
}: {
  Title: string
  icon: string
}): JSX.Element => {
  return (
    <Button
      variant="outlined"
      startIcon={<Image src={icon} width={32} height={32} alt={Title} />}
      sx={{
        backgroundColor: '#171729',
        border: '1px solid #171729',
        color: '#fff',
        fontSize: '1.125rem',
        height: '3.375rem',
        justifyContent: 'flex-start',
        padding: '1rem 1.25rem',
        width: '100%',
        '&:hover': {
          backgroundColor: '#171729',
          border: '1px solid #02BCFC'
        },
        '&:focus': {
          backgroundColor: '#171729',
          border: '1px solid #02BCFC'
        }
      }}
    >
      {Title}
    </Button>
  )
}
