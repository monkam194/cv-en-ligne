"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: 'home',
    path: "/",
  },
  {
    name: 'services',
    path: "/services",
  },
  {
    name: 'resume',
    path: "/resume",
  },
  {
    name: 'work',
    path: "/work",
  },
  {
    name: 'contact',
    path: "/contact",
  },
]

export const Nav = () => {
  return (
    <nav> 
      {links.map((link,index)=> {
        return (<Link href= {link.path} key={index}>{link.name}</Link>);
      })}
    </nav>
  )
}
