import { ConnectWallet } from '@next/components/atoms/ConnectWallet'

export const CardButtonSection = ({
  handleStepOne,
  Text,
  disabled
}: {
  handleStepOne: any
  Text: string
  disabled: boolean
}): JSX.Element => {
  return (
    <ConnectWallet handleStep={handleStepOne} Text={Text} disabled={disabled} />
  )
}
