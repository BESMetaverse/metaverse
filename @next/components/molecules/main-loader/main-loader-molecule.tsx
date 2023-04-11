import { Box} from '@mui/material'
import { SpinLoader } from '@next/components/atoms/SpinLoader'
export const MainLoader = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <SpinLoader />
    </Box>
  )
}
