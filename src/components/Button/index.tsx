import React, { ButtonHTMLAttributes, ReactNode } from "react"
import { buttonStyles, ButtonVariant } from "./styles"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "PRIMARY" | "SECONDARY"
  children: ReactNode
  className?: string
}
export default function index({
  children,
  variant = "PRIMARY",
  className,
  ...props
}: Props) {
  const classNames = `${buttonStyles[variant]} ${ButtonVariant[variant]} ${className}`
  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  )
}
