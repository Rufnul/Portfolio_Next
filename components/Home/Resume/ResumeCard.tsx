import React from 'react'
import { IconType } from 'react-icons'

type Props = {
  role: string
  Icon: IconType
  date?: string
  company?: string
  location?: string
  description?: string
  points?: string[]
}

const ResumeCard = ({
  Icon,
  role,
  date,
  company,
  location,
  description,
  points
}: Props) => {
  return (
    <div className='mb-6'>
      <div className='flex items-start space-x-6 bg-blue-950/20 hover:bg-blue-950/30 transition-all duration-300 p-4 sm:p-8 rounded-md border border-white/10'>

        {/* Icon */}
        <div className='sm:w-14 sm:h-14 w-10 h-10 bg-blue-950 rounded-full flex items-center justify-center shrink-0'>
          <Icon className='sm:w-8 sm:h-8 w-5 h-5 text-white' />
        </div>

        {/* Content */}
        <div className='flex-1'>

          {/* Date */}
          {date && (
            <span className='inline-block mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-full bg-gray-200 text-gray-700 w-fit sm:text-sm text-xs font-semibold'>
              {date}
            </span>
          )}

          {/* Role */}
          <h3 className='text-gray-100 text-lg sm:text-xl font-semibold'>
            {role}
          </h3>

          {/* Company + Location */}
          {(company || location) && (
            <p className='text-cyan-300 text-sm sm:text-base font-medium mt-1'>
              {company} {location && `• ${location}`}
            </p>
          )}

          {/* Description */}
          {description && (
            <p className='text-gray-300 text-sm sm:text-base pt-3'>
              {description}
            </p>
          )}

          {/* Bullet Points */}
          {points && (
            <ul className='mt-3 list-disc list-inside text-gray-300 text-sm sm:text-base space-y-1'>
              {points.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}

        </div>
      </div>
    </div>
  )
}

export default ResumeCard