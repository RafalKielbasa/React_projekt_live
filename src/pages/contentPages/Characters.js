import { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useNavigate, useLoaderData } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid'
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import TextField from '@mui/material/TextField'

import Tab from './components/Tab'
import { postData, getColection } from 'src/api/localServer'

const Wrapper = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
`

const Characters = () => {
  const [number, setNumber] = useState(0)
  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState()

  console.log({ filteredData })

  const { data } = useLoaderData()

  const { results } = data

  const columns = Object.entries(results[0]).map((item) => item[0])

  useEffect(
    () =>
      setFilteredData(
        results.filter(
          ({ name, species, gender }) =>
            name.toLowerCase().includes(search) ||
            species.toLowerCase().includes(search) ||
            gender.toLowerCase().includes(search)
        )
      ),
    [search]
  )

  // const columns = [
  //   { field: 'id', headerName: 'ID', width: 70 },
  //   { field: 'firstName', headerName: 'First name', width: 130 },
  //   { field: 'lastName', headerName: 'Last name', width: 130 },
  //   {
  //     field: 'age',
  //     headerName: 'Age',
  //     type: 'number',
  //     width: 90,
  //   },
  //   {
  //     field: 'fullName',
  //     headerName: 'Full name',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  //   },
  // ]

  const navigate = useNavigate()

  // useEffect(() => {
  //   const sendCollection = async () => postData('characters', results)
  //   sendCollection()
  // }, [])

  useEffect(() => {
    if (number > 4) navigate('/')
  }, [number])

  return (
    <>
      <Wrapper>
        <TextField onChange={(e) => setSearch(e.target.value)} />
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((item) => (
                <TableCell>{item}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData?.map((item) => (
              <TableRow>
                {Object.values(item).map((element) => {
                  if (typeof element === 'string')
                    return <TableCell>{element}</TableCell>
                  return <TableCell>{''}</TableCell>
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Wrapper>
      {/* <button onClick={() => setNumber((prev) => prev + 1)}>
        Kliknij mnie
      </button> */}
    </>
  )
}

export default Characters
