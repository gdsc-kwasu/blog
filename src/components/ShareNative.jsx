import { useEffect, useState } from 'react'

const ShareNative = ({ url, children }) => {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setEnabled(
      'canShare' in window.navigator &&
        window.navigator.canShare({
          url,
        })
    )
  }, [url, setEnabled])

  if (!enabled) {
    return null
  }

  const handleClick = () => {
    window.navigator.share({
      url,
    })
  }

  return <a onClick={handleClick}>{children}</a>
}

export default ShareNative
