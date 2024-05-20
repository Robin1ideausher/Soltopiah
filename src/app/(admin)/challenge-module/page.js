import React from 'react'

function page() {
  return (
    <div className="overflow-x-auto">
    <div className="inline-block min-w-full">
      <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th style={{ width: '208px' }} className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Column 1
              </th>
              <th style={{ width: '151px' }} className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Column 2
              </th>
              <th style={{ width: '172px' }} className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Column 3
              </th>
              <th style={{ width: '168px' }} className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Column 4
              </th>
              <th style={{ width: '150px' }} className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Column 5
              </th>
              <th style={{ width: '150px' }} className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Column 6
              </th>
              <th style={{ width: '150px' }} className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Column 7
              </th>
              <th style={{ width: '150px' }} className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Column 8
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-2 py-4 whitespace-nowrap">
                Data 1
              </td>
              <td className="px-2 py-4 whitespace-nowrap">
                Data 2
              </td>
              <td className="px-2 py-4 whitespace-nowrap">
                Data 3
              </td>
              <td className="px-2 py-4 whitespace-nowrap">
                Data 4
              </td>
              <td className="px-2 py-4 whitespace-nowrap">
                Data 5
              </td>
              <td className="px-2 py-4 whitespace-nowrap">
                Data 6
              </td>
              <td className="px-2 py-4 whitespace-nowrap">
                Data 7
              </td>
              <td className="px-2 py-4 whitespace-nowrap">
                Data 8
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default page
