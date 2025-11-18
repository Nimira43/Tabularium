'use client'

import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'

export function ModeToggle() {
  const { setTheme } = useTheme()
}