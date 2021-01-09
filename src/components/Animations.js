export const header = {
    init: {
        backgroundColor: 'rgba(83, 83, 83, .0)',
    },
    after: {
        backgroundColor: 'rgba(83, 83, 83, .15)',
        transition: {
            delay: 0.2,
            duration: 1.25,
            when: "beforeChildren"
        }
    }
}

export const leterOne = {
    init: {
        opacity: 0
    },
    after: {
        opacity: 1,
        transition: {
            delay: 0.8,
            duration: 1.25
        }
    }
}

export const leterTwo = {
    init: {
        opacity: 0
    },
    after: {
        opacity: 1,
        transition: {
            delay: 1,
            duration: 1.25
        }
    }
}

export const leterThree = {
    init: {
        opacity: 0
    },
    after: {
        opacity: 1,
        transition: {
            delay: 1.2,
            duration: 1.25
        }
    }
}

export const navRow = {
    init: {
        opacity: 0
    },
    after: {
        opacity: 1,
        transition: {
            delay: 0.2,
            duration: 1.25,
        }
    }
}

export const rowLink = {
    init: {
        backgroundColor: '#9a031e'
    },
    after: {
        backgroundColor: '#9a031e',
        transition: {
            delay: 0.1,
            duration: 1.25,
        }
    },
    hover: {
        backgroundColor: '#cf082c',
        transition: {
            duration: 0.1
        }
    }
}

export const summary = {
    init: {
        backgroundColor: 'rgba(83, 83, 83, .0)',
    },
    after: {
        backgroundColor: 'rgba(83, 83, 83, .15)',
        transition: {
            delay: 1,
            duration: 1.25,
            when: "beforeChildren"
        }
    }
}

export const banner = {
    init: {
        opacity: 0,
    },
    after: {
        opacity: 1,
        backgroundColor: 'rgba(83, 83, 83, .0)',
        transition: {
            delay: 1.2,
            duration: 1.25
        }
    }
}

export const certTitle = {
    init: {
        color: '#000000',
        textDecoration: 'none',
        fontStyle: 'normal'
    },
    hover: {
        color: 'blue',
        textDecoration: 'underline',
        fontStyle: 'italic'
    }
}