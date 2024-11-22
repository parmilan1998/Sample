import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  itemType: yup.string().required('Please select an item type'),
  itemName: yup.string().required('Item name is required'),
  itemCode: yup.string().required('Item code is required'),
  stockCount: yup
    .number()
    .typeError('Current count must be a number')
    .required('Current count is required'),
  removeStockCount: yup
    .number()
    .typeError('Please enter a valid number')
    .required('New count is required')
    .positive('Count must be positive')
    .integer('Count must be a whole number'),
  note: yup
    .string()
    .required('Note is required')
    .min(5, 'Note must be at least 10 characters')
    .max(500, 'Note must not exceed 500 characters'),
})

const RemoveStock = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      itemType: '',
      itemName: '',
      itemCode: '',
      stockCount: '',
      removeStockCount: '',
      note: '',
    },
  })

  const onSubmit = (data) => {
    console.log('Form submitted:', data)
  }

  return (
    <div className='lg:pt-4 p-4 lg:m-4 m-2 bg-color2 border border-opacity-50 border-color1 rounded-lg shadow font-inter'>
      <div className='flex justify-between items-center pb-4 px-4 border-b'>
        <h2 className='text-lg font-semibold text-gray-900'>
          Remove Stock Count
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

      <form onSubmit={handleSubmit(onSubmit)} className='lg:p-4 p-2 space-y-4'>
        <div className='space-y-2'>
          <label className='block text-md font-semibold text-gray-900'>
            Select Item
          </label>
          <div className='relative'>
            <select
              {...register('itemType')}
              className={`block w-full rounded-md border bg-background1 border-color3 py-2 px-3 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                ${errors.itemType ? 'border-red-500' : ''}`}
            >
              <option value=''>Select an option</option>
              <option value='high'>-High-</option>
              <option value='medium'>-Medium-</option>
              <option value='low'>-Low-</option>
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
            {errors.itemType && (
              <p className='mt-1 text-xs text-red-500'>
                {errors.itemType.message}
              </p>
            )}
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
          <div className='space-y-2'>
            <label className='block text-md font-semibold text-gray-900'>
              Item Name
            </label>
            <input
              type='text'
              {...register('itemName')}
              placeholder='Item 1'
              className={`block w-full rounded-md border  text-gray-900 text-sm tracking-wide bg-background1 border-color3 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                ${errors.itemName ? 'border-red-500' : ''}`}
            />
            {errors.itemName && (
              <p className='text-xs text-red-500'>{errors.itemName.message}</p>
            )}
          </div>
          <div className='space-y-2'>
            <label className='block text-md font-semibold text-gray-900'>
              Item code
            </label>
            <input
              type='text'
              {...register('itemCode')}
              placeholder='K-50'
              className={`block w-full rounded-md border bg-background1 tracking-wide text-sm border-color3 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                ${errors.itemCode ? 'border-red-500' : ''}`}
            />
            {errors.itemCode && (
              <p className='text-xs text-red-500'>{errors.itemCode.message}</p>
            )}
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
          <div className='space-y-2'>
            <label className='block text-md font-semibold text-gray-900'>
               Stock Count
            </label>
            <input
              type='number'
              {...register('stockCount')}
              placeholder='Enter stock count'
              className={`block w-full rounded-md border bg-background1 text-sm tracking-wide border-color3 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                ${errors.stockCount ? 'border-red-500' : ''}`}
            />
            {errors.stockCount && (
              <p className='text-xs text-red-500'>
                {errors.stockCount.message}
              </p>
            )}
          </div>
          <div className='space-y-2'>
            <label className='block text-md font-semibold text-gray-900'>
              Remove Stock Count
            </label>
            <input
              type='number'
              {...register('removeStockCount')}
              placeholder='Enter remove stock count'
              className={`block w-full rounded-md border bg-background1 text-sm tracking-wide border-color3 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                ${errors.removeStockCount ? 'border-red-500' : ''}`}
            />
            {errors.removeStockCount && (
              <p className='text-xs text-red-500'>{errors.removeStockCount.message}</p>
            )}
          </div>
        </div>
        <div className='space-y-2 bg-white p-4 rounded-lg'>
          <label className='block text-md font-semibold text-gray-900'>
            Note
          </label>
          <textarea
            {...register('note')}
            className={`block w-full bg-background1 rounded-md border text-sm border-color3 tracking-wide py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px] resize-none
              ${errors.note ? 'border-red-500' : ''}`}
          />
          {errors.note && (
            <p className='text-xs text-red-500'>{errors.note.message}</p>
          )}
        </div>

        <div className='flex justify-end space-x-2 pt-4'>
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

export default RemoveStock
