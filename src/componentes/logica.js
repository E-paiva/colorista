export function generateHexColor() {
    const possibleValues = "0123456789abcdef"
    let result = "#"
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * possibleValues.length)
        result += possibleValues[randomIndex]
    }

    return result
}

export function generatePalette(palette) {
    if (!palette) {
        return new Array(5).fill("").map(e => ({
            hex: generateHexColor(),
            blocked: false
        }))
    }
    return palette.map(e => ({
        hex: !e.blocked ? generateHexColor() : e.hex ,
        blocked: e.blocked
    }))}