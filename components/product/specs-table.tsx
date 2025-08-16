interface SpecsTableProps {
  specs: Record<string, string>
}

export function SpecsTable({ specs }: SpecsTableProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {Object.entries(specs).map(([key, value]) => (
          <div key={key} className="border-b border-gray-200 pb-2">
            <dt className="text-sm font-medium text-gray-500">{key}</dt>
            <dd className="text-sm text-gray-900">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
