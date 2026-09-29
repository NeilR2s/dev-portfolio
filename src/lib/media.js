// Vite owns the content hashes so updates invalidate the immutable CDN cache.
// Keep content metadata independent of bundler-specific imports.
const images = import.meta.glob('../../public/images/*.webp', {
    eager: true,
    query: '?url',
    import: 'default',
})

export function mediaUrl(path) {
    return images[`../../public${path}`] || path
}

export function mediaSrcSet(sources) {
    return sources?.split(',').map((source) => {
        const [path, width] = source.trim().split(/\s+/)
        return `${mediaUrl(path)} ${width}`
    }).join(', ')
}
