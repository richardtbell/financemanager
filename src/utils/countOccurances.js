function countOccurrences(value, array) {
    return array.reduce( (count, element) => count + (element === value), 0)
}

export {countOccurrences}
