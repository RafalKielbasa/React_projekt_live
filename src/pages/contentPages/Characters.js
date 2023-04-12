import { useEffect, useState, useContext } from 'react'
import styled, { css } from 'styled-components'
import { useLoaderData } from 'react-router-dom'
import { Table, TableBody } from '@mui/material'
import TextField from '@mui/material/TextField'

import TableRowComponent from 'src/components/Table/TableRowComponent'
import TableHeadComponent from 'src/components/Table/TableHead'
import { onlySting } from 'src/helpers/arrayHelpers'
import { ThemeContext } from 'src/context/ThemeContext'

const Wrapper = styled('div')(
  ({ theme }) =>
    css`
      display: flex;
      flex-direction: column;
      background-color: ${theme.bgColor};
      color: ${theme.textColor};
    `
)

const Characters = () => {
  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState()

  const { data } = useLoaderData()
  const { theme } = useContext(ThemeContext)

  const { results } = data

  const simplyData = onlySting(results)

  const columns =
    results && Object.entries(simplyData[0]).map((item) => item[0])

  useEffect(
    () =>
      results &&
      setFilteredData(
        simplyData.filter(
          ({ name, species, gender }) =>
            name?.toLowerCase().includes(search) ||
            species?.toLowerCase().includes(search) ||
            gender?.toLowerCase().includes(search)
        )
      ),
    [search]
  )

  return (
    <>
      <Wrapper theme={theme}>
        <TextField onChange={(e) => setSearch(e.target.value)} />
        <Table>
          <TableHeadComponent columns={columns} />
          <TableBody>
            {filteredData?.map((item) => (
              <TableRowComponent row={item} />
            ))}
          </TableBody>
        </Table>
      </Wrapper>
    </>
  )
}

export default Characters
