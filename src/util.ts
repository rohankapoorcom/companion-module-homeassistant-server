export enum OnOffToggle {
  On = 'on',
  Off = 'off',
  Toggle = 'toggle'
}

export function assertUnreachable(_never: never): void {
  // throw new Error('Unreachable')
}

export function literal<T>(val: T): T {
  return val
}
