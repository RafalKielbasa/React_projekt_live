import React, { useState, useCallback, useRef, useEffect } from 'react'
import { Table, TableBody } from '@mui/material'
import { useQuery } from 'react-query'
import { useSnackbar } from 'notistack'

import TableRowComponent from 'src/components/Table/TableRowComponent'
import TableHeadComponent from 'src/components/Table/TableHead'
import { onlySting } from 'src/helpers/arrayHelpers'
import { getData } from 'src/api/rickAndMorty'

const Episodes = () => {
  const [page, setPage] = useState(1)
  const { enqueueSnackbar } = useSnackbar()
  const query = useQuery(['episede', page], () =>
    getData(`episode?page=${page}`)
  )

  const { data, isLoading, isError, error } = query

  console.log(query)

  const { data: resultData } = data || {}

  const { results } = resultData || {}

  const simplyData = onlySting(results)

  const columns =
    results && Object.entries(simplyData[0])?.map((item) => item[0])

  useEffect(() => {
    enqueueSnackbar('udało się ', {
      variant: 'success',
      preventDuplicate: true,
    })
  }, [])

  if (isLoading) return <div>Loading...</div>

  if (isError) enqueueSnackbar(error.message, { variant: 'error' })

  return (
    <>
      {!isError && (
        <>
          <button onClick={() => setPage((prev) => (prev += 1))}>
            Kliknij mnie
          </button>
          <Table>
            <TableHeadComponent columns={columns} />
            <TableBody>
              {simplyData?.map((item) => (
                <TableRowComponent row={item} />
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </>
  )
}

export default Episodes
