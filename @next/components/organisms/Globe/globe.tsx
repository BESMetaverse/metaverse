// import GlobeTmpl from 'react-globe.gl'
import dynamic from 'next/dynamic'
const GlobeTmpl = dynamic(import('react-globe.gl'), { ssr: false })

export const GlobeCustom = ({
  forwardRef,
  ...otherProps
}: any): JSX.Element => <GlobeTmpl {...otherProps} ref={forwardRef} />
