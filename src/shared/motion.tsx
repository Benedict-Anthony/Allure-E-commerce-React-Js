export const PageXVariant = {
    initial: {
        opacity: 0,
        x: "-100vw"
    },

    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .4
        }
    }
}

export const PageYVariant = {
    initial: {
        opacity: 0,
        y: "100vh"
    },

    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .4
        }
    }
}

export const PageFadeInOut = {
    initial: {
        opacity: 0
    },

    animate: {
        opacity: 1,
        transition: {
            duration: 1,
        }
    }

}