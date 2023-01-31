const chipotled = (amount, protein, guac = 0) => {
    console.log("calc:", Math.floor(amount / (protein + guac)))
    return Math.floor(amount / (protein+guac))
}

const change = (amount, spent) => {
    return amount - spent
}

export {chipotled, change}