import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Table, TableBody } from '@mui/material'
import { useQuery } from 'react-query'

import TableRowComponent from 'src/components/Table/TableRowComponent'
import TableHeadComponent from 'src/components/Table/TableHead'
import { onlySting } from 'src/helpers/arrayHelpers'
import { getData } from 'src/api/rickAndMorty'

import Tab from './components/Tab'

const Episodes = () => {
  const query = useQuery('episodes', () => getData('episod'))

  const { data, isLoading, isFetching } = query

  console.log({ isLoading, query })

  // const simplyData = onlySting(results)

  // const columns =
  //   results && Object.entries(simplyData[0]).map((item) => item[0])

  if (isFetching) return <div>Loading...</div>

  return (
    <Table>
      {/* <TableHeadComponent columns={columns} />
      <TableBody>
        {simplyData?.map((item) => (
          <TableRowComponent row={item} />
        ))}
      </TableBody> */}
    </Table>
  )
}

export default Episodes
