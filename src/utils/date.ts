const utcOffset = new Date().getTimezoneOffset() * 60000

function localeISOString(d?: Date | string | number): string {
  return new Date((d ? new Date(d) : new Date()).getTime() - utcOffset)
    .toISOString()
    .slice(0, -1)
}

export function localeISODateString(d?: Date | string | number): string {
  return localeISOString(d).slice(0, 10)
}

/**
 * @param t1 - minuend
 * @param t2 - subtrahend
 * @return t1 - t2
 */
export function deltaTime(t1: string | Date, t2: string | Date) {
  return new Date(t1).getTime() - new Date(t2).getTime()
}

export function formatTime(time: string | Date) {
  return new Date(time).toLocaleString('fr-FR', { hour12: false })
}

export function formatDateShort(time: string | Date) {
  return new Date(time).toLocaleString('fr-FR', { hour12: false }).substr(0, 10);
}

export function formatTimeShort(time: string | Date) {
  return new Date(time).toLocaleString('fr-FR', { hour12: false }).substr(13, 17);
}
