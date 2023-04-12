import React from 'react'
import { TableRow, TableCell } from '@mui/material'

const TableRowComponent = ({ row }) => {
  return (
    <TableRow>
      {Object.values(row)?.map((element) => (
        <TableCell>{element}</TableCell>
      ))}
    </TableRow>
  )
}

export default TableRowComponent
