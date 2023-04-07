import { ConnectWallet } from '@next/components/atoms/ConnectWallet'

export const CardButtonSection = ({
  handleStepOne,
  Text
}: {
  handleStepOne: any
  Text: string
}): JSX.Element => {
  return <ConnectWallet handleStep={handleStepOne} Text={Text} />
}
