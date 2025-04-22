export { clamp, toArrayIfNot }

function clamp(value: number, min?: number, max?: number) {
    if (min != null && value < min) return min
    else if (max != null && value > max) return max
    return value
}

function toArrayIfNot<T>(value: T): T extends any[] ? T : T[] {
    return (Array.isArray(value) ? value : [value]) as any
}
  