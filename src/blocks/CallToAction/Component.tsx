import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

export const CallToActionBlock: React.FC<CTABlockProps> = ({ links, richText }) => {
  return (
    <div className='w-full relative py-12'>
      <div className="absolute inset-x-0 top-0 h-1/2 bg-foreground -z-10" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-background -z-10" />
      <div className="container">
        <div className="rounded-4xl border-border border p-4 flex flex-col gap-8 py-16 px-32 bg-secondary bg-radial to-secondary from-10% from-primary/20">
          <div className="flex items-center">
            {richText && <RichText className="mb-0 text-center max-w-2xl" data={richText} enableGutter={false} />}
          </div>
          <div className="flex flex-col items-center gap-8">
            {(links || []).map(({ link }, i) => {
              return <CMSLink key={i} size="lg" {...link} className='w-fit' />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
