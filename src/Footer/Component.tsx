import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { DribbbleIcon, InstagramIcon, Linkedin, MailIcon, PhoneIcon } from 'lucide-react'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto grid grid-rows-[1fr_auto]">
      <div className='container grid grid-cols-2 py-8'>
        <div className="flex flex-col justify-between gap-8">
          <Link className="flex items-center" href="/">
            <Logo />
          </Link>
          {footerData?.shortText && <RichText data={footerData.shortText} enableGutter={false} className='text-sm' />}
        </div>
        <ul className='flex flex-col ml-auto gap-8 list-none p-0 m-0'>
          {footerData?.contact?.email && (
            <li className='flex gap-4 items-center'>
              <MailIcon className='w-4 h-4' />
              <span className='text-sm'>{footerData.contact.email}</span>
            </li>
          )}
          {footerData?.contact?.phone && (
            <li className='flex gap-4 items-center'>
              <PhoneIcon className='w-4 h-4' />
              <span className='text-sm'>{footerData.contact.phone}</span>
            </li>
          )}
          {footerData?.socialLinks && footerData.socialLinks.length > 0 && (
            <li className='flex gap-4 items-center'>
              {footerData.socialLinks.map(({ link }, i) => {
            return (
              <Link key={i} href={link.url || '#'} target={link.newTab ? '_blank' : '_self'}>
                <Media resource={link.icon} className='w-4 h-4' />
              </Link>
            )
          })}
          </li>
        )}
        </ul>
      </div>
      <div className="container py-4 gap-8 flex flex-col md:flex-row md:items-center md:justify-between border-t border-border">
        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <ThemeSelector />
          <nav className="flex flex-col md:flex-row gap-4">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />
            })}
          </nav>
        </div>
        <div>
          <span>
            &copy; {new Date().getFullYear()} {footerData?.copyrightText}
          </span>
        </div>
      </div>
    </footer>
  )
}
