export function useConfirm() {
  return (message: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const confirmed = window.confirm(message)
      resolve(confirmed)
    })
  }
}
