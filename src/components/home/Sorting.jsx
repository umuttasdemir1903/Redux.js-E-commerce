const Sorting = ({setSort}) => {
  return (
    <div className="bg-gray-100 my-5 p-5 flex items-center justify-end">
      <select onChange={e => setSort(e.target.value)} className="bg-gray-200 py-3 px-5 rounded">
        <option disabled value="">Select</option>
        <option value="inc">İncreasing</option>
        <option value="dec">Decreasing</option>
      </select>
    </div>
  )
}

export default Sorting
