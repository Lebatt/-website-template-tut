'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <div
      className="relative -mt-40 flex items-center justify-center text-white"
      data-theme="dark"
    >
      <div className="container mt-20 z-10 relative flex items-center justify-center">
        <div className="max-w-2xl flex flex-col items-center text-center gap-8">
          {richText && <RichText className="mb-8 [&_em]:text-primary [&_p]:pt-8 [&_p]:max-w-xl [&_p]:mx-auto [&_p]:text-sm" data={richText} enableGutter={false} />}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex md:justify-center gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
      <div className="min-h-[80vh] select-none">
        {media && typeof media === 'object' && (
          <Media fill imgClassName="-z-10 object-contain" priority resource={media} />
        )}
      </div>
    </div>
  )
}
