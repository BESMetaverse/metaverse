import * as React from 'react'
import Drawer from '@mui/material/Drawer'
import { PlotDetails } from '@next/components/atoms/PlotDetails'
import Image from 'next/image'
import { Box } from '@mui/material'

type ToggleDrawerFn = (
  open: boolean
) => (event: React.KeyboardEvent | React.MouseEvent) => void

interface DrawerProps {
  showLand: { right: boolean }
  toggleDrawer: ToggleDrawerFn
}

export const PlanetsDrawer = ({ showLand, toggleDrawer }: DrawerProps): any => {
  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={showLand.right}
        onClose={toggleDrawer(false)}
        sx={{
          borderRadius: '2px'
        }}
      >
        <Box
          sx={{
            backgroundColor: '#13082e',
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '1rem',
            '&:hover': {
              cursor: 'pointer'
            }
          }}
        >
          <Image
            src="/images/close-icon.png"
            alt="Plot Details"
            width={12}
            height={12}
            onClick={toggleDrawer(false)}
          />
        </Box>
        <PlotDetails />
      </Drawer>
    </React.Fragment>
  )
}
