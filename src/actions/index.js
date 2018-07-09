export const OPEN_POPPER = 'OPEN_POPPER'
export const CLOSE_POPPER = 'CLOSE_POPPER'

export function openPopper(currentPart, popperAnchorEl) {
  return {
    type: OPEN_POPPER,
    isPopperOpen: true,
    popperAnchorEl,
    currentPart
  }
}

export function closePopper() {
  return {
    type: CLOSE_POPPER,
    isPopperOpen: false,
    popperAnchorEl: null,
    currentPart: null
  }
}