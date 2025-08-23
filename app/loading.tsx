export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-t-[#03045e] border-gray-200 rounded-full animate-spin" />
        <p className="mt-4 text-gray-700">Loading...</p>
      </div>
    </div>
  )
}