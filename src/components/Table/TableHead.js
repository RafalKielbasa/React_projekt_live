import React, { useContext } from 'react'
import { TableHead, TableRow, TableCell } from '@mui/material'
import styled, { css } from 'styled-components'

import { ThemeContext } from 'src/context/ThemeContext'

const StyledTableCell = styled(TableCell)(
  ({ test }) =>
    css`
      && {
        color: ${test.textColor};
      }
    `
)

const TableHeadComponent = ({ columns }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <TableHead>
      <TableRow>
        {columns.map((item) => (
          <StyledTableCell test={theme}>{item}</StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default TableHeadComponent
