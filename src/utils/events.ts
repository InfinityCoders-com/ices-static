export function trackUserInactive({ checkAfter = 120000, onInactive, onActive }: any) {
  let lastActivityTime = Date.now()

  const updateActivity = () => {
    lastActivityTime = Date.now()
  }

  // Track user events
  ["mousemove", "keydown", "click", "scroll"].forEach((event) => window.addEventListener(event, updateActivity))

  // Check activity every second
  setInterval(() => {
    const now = Date.now()
    const timeSinceLastActivity = now - lastActivityTime

    if (timeSinceLastActivity > checkAfter) {
      console.log("⚠️ No activity in the last 10 seconds.")
      onInactive()
      // You can trigger logout, show warning, etc.
    } else {
      onActive()
      console.log("✅ User is active.")
    }
  }, checkAfter)
}
