import Image from "next/image"

interface ProductGalleryProps {
  images: string[]
  name: string
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  return (
    <div className="space-y-4">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={images[0] || "/placeholder.svg"}
          alt={name}
          width={600}
          height={600}
          className="h-full w-full object-cover object-center"
          priority
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-4">
          {images.slice(1).map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${name} view ${index + 2}`}
                width={200}
                height={200}
                className="h-full w-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
