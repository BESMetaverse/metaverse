/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/promise-function-async */
import { useState, useEffect, useRef, forwardRef } from 'react'
import axios from 'axios'
import { PlanetsDrawer } from '@molecules'
import dynamic from 'next/dynamic'
import { GlobeMethods } from 'react-globe.gl'

const COLORS = ['#6898FF', '#A45CFF', '#D72E2E']

export const Planet = (): JSX.Element => {
  const globeEl = useRef<GlobeMethods>()
  const [showLand, setShowLand] = useState({ right: false })
  const [countries, setCountries] = useState<{ features: any } | null>(null)

  useEffect((): any => {
    if (globeEl.current) {
      console.log('Test: ', globeEl)
      return globeEl.current.pointOfView?.({
        lat: 42,
        lng: -95,
        altitude: 0.5
      })
    }
  }, [globeEl.current])

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
        // globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        hexPolygonsData={countries?.features}
        hexPolygonResolution={2}
        hexPolygonMargin={0.1}
        hexPolygonColor={() => `${COLORS[Math.round(Math.random() * 2)]}`}
        onHexPolygonClick={handlePlotClick}
      />
      <PlanetsDrawer showLand={showLand} toggleDrawer={toggleDrawer} />
    </>
  )
}

// const Globe = dynamic(import('react-globe.gl'), { ssr: false })

// const GlobeCustom = forwardRef((props: any, ref) => (
//   <Globe {...props} forwardRef={ref} />
// ))

// const GlobeCustom = dynamic(
//   async () => await import('@next/components/organisms/Globe'),
//   {
//     ssr: false
//   }
// )
const GlobeCustom = dynamic(
  () => import('../Globe').then((mod) => mod.GlobeCustom),
  {
    ssr: false
  }
)

const Globe = forwardRef((props: any, ref) => (
  <GlobeCustom {...props} forwardRef={ref} />
))
