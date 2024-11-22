import React from 'react'

const StockUpdate = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='w-full m-4 lg:py-4 lg:px-4 py-2 px-2 max-w-[992px] mx-auto bg-color2 border border-opacity-50 border-color1 rounded-lg shadow font-inter'>
      <div className='flex justify-between items-center pb-4 px-4 border-b'>
        <h2 className='text-lg font-semibold text-gray-900'>
          Update Stock Count
        </h2>
        <button className='text-gray-500 hover:text-gray-700'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>

      <form onSubmit={handleSubmit} className='p-4 space-y-4'>
        <div className='space-y-2'>
          <label className='block text-md font-semibold text-gray-900'>
            Select Item
          </label>
          <div className='relative'>
            <select className='block w-full rounded-md border bg-color2 border-gray-300 py-2 px-3 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'>
              <option>-High-</option>
              <option>-Medium-</option>
              <option>-Low-</option>
            </select>
            <div className='absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none'>
              <svg
                className='h-4 w-4 text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
          <div className='space-y-2'>
            <label className='block text-sm font-medium text-gray-900'>
              Item Name
            </label>
            <input
              type='text'
              placeholder='Item 1'
              className='block w-full rounded-md border text-gray-900 bg-color2 border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            />
          </div>
          <div className='space-y-2'>
            <label className='block text-sm font-medium text-gray-900'>
              Item code
            </label>
            <input
              type='text'
              placeholder='K-50'
              className='block w-full rounded-md border bg-color2 border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
          <div className='space-y-2'>
            <label className='block text-sm font-medium text-gray-900'>
              Current Stock Count
            </label>
            <input
              type='text'
              placeholder='Item 1'
              disabled
              className='block w-full rounded-md border bg-color2 border-gray-300  py-2 px-3 '
            />
          </div>
          <div className='space-y-2'>
            <label className='block text-sm font-medium text-gray-900'>
              New Count
            </label>
            <input
              type='text'
              placeholder='K-50'
              className='block w-full rounded-md border bg-color2 border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            />
          </div>
        </div>

        <div className='space-y-2 bg-white p-4 rounded-lg'>
          <label className='block text-sm font-medium text-gray-900'>
            Note
          </label>
          <textarea className='block w-full bg-color2 rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px] resize-none' />
        </div>

        <div className='flex justify-end space-x-2 pt-4 border-t'>
          <button
            type='button'
            className='px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
          >
            Cancel
          </button>
          <button
            type='submit'
            className='px-4 py-2 bg-[#1e2f4d] text-white rounded-md text-sm font-medium hover:bg-[#1e2f4d]/90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          >
            Add Quantity
          </button>
        </div>
      </form>
    </div>
  )
}

export default StockUpdate
