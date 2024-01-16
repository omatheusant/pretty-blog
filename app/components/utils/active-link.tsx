'use client'

import Link, { LinkProps } from "next/link"
import { ReactNode } from "react"
import { usePathname } from "next/navigation"

interface ActiveLinkProps extends LinkProps {
  children: ReactNode
}

export const ActiveLink = ({href, children, ...rest}: ActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href.toString();
  return (
    <Link href={href} className={`${isActive ? 'bg-secondary text-secondary-foreground' : ''} py-1 px-3 rounded-md`}
      {...rest}
    >
      {children}
    </Link>
  )
}