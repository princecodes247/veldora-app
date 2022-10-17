function Table({ isLoading, list = [] }) {
  // Get all the unique keys from the list

  const keys = list.reduce((acc, item) => {
    return [...new Set([...acc, ...Object.keys(item)])];
  }, []);

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            {keys.map((key) => (
              <th key={key}>{key}</th>
            ))}

            <th />
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td className="text-center" colSpan={5}>
                Loading...
              </td>
            </tr>
          )}
          {!isLoading &&
            list.map((item) => (
              <tr key={`${item.date} ${item.id}`}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                {keys.map((key) => (
                  <td key={key}>{item[key]}</td>
                ))}
              </tr>
            ))}
          {/* <span className="badge badge-ghost badge-sm">Tax Accountant</span> */}
        </tbody>
        {/* <!-- foot --> */}
        <tfoot>
          <tr>
            {/* {keys.map((key) => (
              <th>{key}</th>
            ))} */}
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Table;
