export default function formatNumber(num: number): string {
  if (num === null) return num;
  if (num < 1000) return num.toString();
  if (num < 1_000_000)
    return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + "k";
  return (num / 1_000_000).toFixed(num % 1_000_000 === 0 ? 0 : 1) + "M";
}
