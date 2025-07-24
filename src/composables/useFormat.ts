export const useFormat = () => {
  const formatNumber = (n: number): string => {
    if (n < 100) return n.toString()
    if (n < 1_000_000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
    return (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M'
  }

  return { formatNumber }
}
