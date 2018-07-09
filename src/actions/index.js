export const OPEN_POPPER = 'OPEN_POPPER'
export const CLOSE_POPPER = 'CLOSE_POPPER'

export function openPopper(id) {
  return {
    type: OPEN_POPPER,
    isPopperOpen: true
  }
}

export function closePopper() {
  return {
    type: CLOSE_POPPER,
    isPopperOpen: false
  }
}