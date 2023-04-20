/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/promise-function-async */
import { useState, useEffect, useRef, forwardRef, useMemo } from 'react'
import axios from 'axios'
import { PlanetsDrawer } from '@molecules'
import dynamic from 'next/dynamic'
import { GlobeMethods } from 'react-globe.gl'
import { Box } from '@mui/material'
import { SpinLoader } from '@next/components/atoms/SpinLoader'

export const Planet = (): JSX.Element => {
  const globeEl = useRef<GlobeMethods>()
  const [showLand, setShowLand] = useState({ right: false })
  const [countries, setCountries] = useState<{ features: any } | null>(null)
  const [loading, setLoading] = useState(false)
  const [color, setColor] = useState<string[]>([])

  useEffect(() => {
    setColor(['#6898FF', '#A45CFF', '#D72E2E'])
  }, [])

  useEffect((): any => {
    if (globeEl.current) {
      return globeEl.current.pointOfView?.({
        lat: 42,
        lng: -95,
        altitude: 0.5
      })
    }
  }, [globeEl.current])

  useEffect(() => {
    setLoading(true)
    const fetchData = async (): Promise<void> => {
      const res = await axios.get('/dataset/lands-data.geojson')
      const data = await res.data
      setCountries({ features: data.features })
      setLoading(false)
    }

    void fetchData()
  }, [])

  const toggleDrawer =
    (open: any) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }
      setShowLand({ right: open })
    }

  const handlePlotClick = (hex: any, { object }: any): void => {
    setShowLand({ right: true })
    console.log(hex)
  }

  const hexPolygonLabel = ({ bbox }: { bbox: number[] }): any => {
    return `<button><i>${bbox[0] < 0 ? bbox[0] * -1 : bbox[0]}</button>`
  }

  const GLOBE = useMemo((): JSX.Element => {
    return (
      <>
        <Globe
          polygonAltitude={30}
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundColor="rgba(0,0,0,0)"
          hexPolygonsData={countries?.features}
          hexPolygonResolution={2}
          hexPolygonMargin={0.1}
          hexPolygonColor={() => `${color[Math.round(Math.random() * 2)]}`}
          hexPolygonLabel={hexPolygonLabel}
          onHexPolygonClick={handlePlotClick}
        />
      </>
    )
  }, [countries, color])

  return (
    <>
      {loading && <SpinLoader />}
      <Box sx={{ background: 'url(/images/mainBg.jpg)' }}>
        {GLOBE}
        <PlanetsDrawer showLand={showLand} toggleDrawer={toggleDrawer} />
      </Box>
    </>
  )
}

const GlobeCustom = dynamic(
  () => import('../Globe').then((mod) => mod.GlobeCustom),
  {
    ssr: false
  }
)

const Globe = forwardRef((props: any, ref) => (
  <GlobeCustom {...props} forwardRef={ref} />
))
