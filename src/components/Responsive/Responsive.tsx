import React from 'react'
import useMediaQuery from 'src/hooks/useMediaQuery'

export const Desktop: React.FC = ({ children }) => {
  const isDesktop = useMediaQuery('(min-width: 1200px)')
  return isDesktop ? <>{children}</> : null
}
export const Mobile: React.FC = ({ children }) => {
  const isMobile = useMediaQuery('(max-width: 1199px)')
  return isMobile ? <>{children}</> : null
}
