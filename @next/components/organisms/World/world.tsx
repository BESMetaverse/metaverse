import { useState, useEffect, useRef } from 'react'
import Globe, { GlobeMethods } from 'react-globe.gl'
import axios from 'axios'

const COLORS = ['#6898FF', '#A45CFF', '#D72E2E']

export const World = ({ features }: any): JSX.Element => {
  const globeEl = useRef(undefined)
  const w = window.innerWidth
  const shiftFactor = 0.4
  const shiftAmmount = shiftFactor * w

  const [countries, setCountries] = useState(features)
  const [showGlobe, setShowGlobe] = useState<boolean>(false)

  useEffect((): any => {
    if (globeEl.current) {
      return (globeEl.current as GlobeMethods).pointOfView({
        lat: 42,
        lng: -95,
        altitude: 0.8
      })
    }
  }, [globeEl])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShowGlobe(true)
    } else {
      setShowGlobe(false)
    }
  }, [window])

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const res = await axios.get('./dataset/lands-data.geojson')
      const data = await res.data
      setCountries({ features: data.features })
    }

    void fetchData()
  }, [])

  const handleHexagonClick = (hexagon: any): void => {
    console.log(hexagon)
  }

  return (
    <>
      {showGlobe && (
        <Globe
          ref={globeEl}
          // width={w + shiftAmmount}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
          hexPolygonsData={countries.features}
          hexPolygonResolution={2}
          hexPolygonMargin={0.3}
          hexPolygonColor={() => `${COLORS[Math.round(Math.random() * 2)]}`}
          onHexPolygonClick={handleHexagonClick}
        />
      )}
      {!showGlobe && <p>Loading...</p>}
    </>
  )
}
