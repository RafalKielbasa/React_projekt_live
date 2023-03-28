const Tab = ({ name, type, status, airDate, dimension }) => {
  return (
    <div>
      <div>{name}</div>
      {type && <div>{type}</div>}
      {status && <div>{status}</div>}
      {airDate && <div>{airDate}</div>}
      {dimension && <div>{dimension}</div>}
    </div>
  )
}

export default Tab
