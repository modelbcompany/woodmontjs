// Packages
import { useCallback, useEffect, useState } from 'react'

/**
 * @file Use window size
 * @module hooks/useWindowSize
 */

/**
 * Returns an object containing the current window height and width.
 *
 * @returns {object}
 */
export const useWindowSize = () => {
  const client = typeof window === 'object'

  const getSize = useCallback(() => ({
    width: client ? window.innerWidth : undefined,
    height: client ? window.innerHeight : undefined
  }), [client])

  const [size, setSize] = useState(getSize)

  useEffect(() => {
    if (!client) return false

    const handleResize = () => setSize(getSize())
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [client, getSize])

  return size
}

export default useWindowSize
