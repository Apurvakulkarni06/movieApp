const Tabs = ({currentTab}) => {
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul className="flex justify-center items-center -mb-px">
      <li className="mr-2">
        <a href="#" className={`inline-block font-16 p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${currentTab === "movies"  && ' active'}`}>Movies</a>
      </li>
      <li className="mr-2">
        <a href="#" className={`inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500 ${currentTab ==="tvseries" && ' active'}`} >TV Series</a>
      </li>
      <li className="mr-2">
        <a href="#" className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${currentTab ==="all" && ' active'}`}>Categories</a>
      </li>
    </ul>
  </div>
  )
}

export default Tabs