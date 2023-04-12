import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { PlanetsDrawer } from '@molecules'
import dynamic from 'next/dynamic'
const Globe = dynamic(import('react-globe.gl'), { ssr: false })

const COLORS = ['#6898FF', '#A45CFF', '#D72E2E']

export const Planet = (): JSX.Element => {
  const globeEl = useRef(undefined)
  const [showLand, setShowLand] = useState({ right: false })
  const [countries, setCountries] = useState<{ features: any } | null>(null)

  // useEffect((): any => {
  //   if (globeEl.current) {
  //     return (globeEl.current as GlobeMethods)?.pointOfView({
  //       lat: 42,
  //       lng: -95,
  //       altitude: 0.9
  //     })
  //   }
  // }, [])

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const res = await axios.get('/dataset/lands-data.geojson')
      const data = await res.data
      setCountries({ features: data.features })
    }

    void fetchData()
  }, [])

  const toggleDrawer =
    (open: any) => (event: React.KeyboardEvent | React.MouseEvent) => {
      console.log('toggle hit')
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }
      setShowLand({ right: open })
    }

  const handlePlotClick = (): void => {
    setShowLand({ right: true })
  }

  return (
    <>
      <Globe
        polygonAltitude={30}
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        hexPolygonsData={countries?.features}
        hexPolygonResolution={2}
        hexPolygonMargin={0.3}
        hexPolygonColor={() => `${COLORS[Math.round(Math.random() * 2)]}`}
        onHexPolygonClick={handlePlotClick}
      />
      <PlanetsDrawer showLand={showLand} toggleDrawer={toggleDrawer} />
    </>
  )
}
