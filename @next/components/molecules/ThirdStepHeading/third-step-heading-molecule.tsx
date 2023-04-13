import { Box } from '@mui/material'
import { MainHeading } from '@next/components/atoms/MainHeading'
import { MainIcon } from '@next/components/atoms/MainIcon'
import { Text } from '@next/components/atoms/Text'
export const ThirdStepHeading = (): JSX.Element => {
  return (
    <Box>
      <MainIcon />
      <MainHeading Heading={'Freighter Wallet'} />
      <Text Text={'Use the wallet you would like to mint your IPG from.'} />
    </Box>
  )
}
