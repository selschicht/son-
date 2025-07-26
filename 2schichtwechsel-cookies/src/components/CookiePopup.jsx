
import React, { useEffect, useState } from "react"

const CookiePopup = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted")
    if (!accepted) setVisible(true)
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      width: "100%",
      background: "#333",
      color: "#fff",
      padding: "1rem",
      textAlign: "center"
    }}>
      Diese Website verwendet Cookies. Mit der Nutzung stimmen Sie dem zu.
      <button onClick={acceptCookies} style={{ marginLeft: "1rem" }}>OK</button>
    </div>
  )
}

export default CookiePopup
