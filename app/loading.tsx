export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-[#03045e]" />
        <p className="mt-4 text-gray-700">Loading...</p>
      </div>
    </div>
  )
}
