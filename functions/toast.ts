

export function toastShowError(title: string, description: string) {
    const toaster = useNuiToasts()

    toaster.add({
        title,
        description,
        icon: "ph:x-circle",
        duration: 8000,
        progress: true,
    })
}

export function toastShowSuccess(title: string, description: string) {
    const toaster = useNuiToasts()

    toaster.add({
        title,
        description,
        icon: "ph:check-circle",
        duration: 5000,
        progress: true,
    })
}
