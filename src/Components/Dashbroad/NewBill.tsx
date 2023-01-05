import { Box } from '@mui/material'
import React from 'react'

const NewBill = () => {
  return (
    <div>
      <Box
        sx={{
          width: 300,
          position:"relative",
          height:500,
          top:0,
          bottom:0,
          display:"inline-block",
          borderRadius:"30px",
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
          },
        }}
      >
        
      </Box>
    </div>
  )
}

export default NewBill