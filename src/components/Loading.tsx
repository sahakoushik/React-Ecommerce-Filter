export const Loading = () => {
  return (
    <div className="border shadow rounded-md p-4 w-96 mx-auto">
        <div className="animate-pulse flex flex-col gap-8">
            <div className=" bg-slate-200 size-48"></div>
            <div className="flex-1 space-y-6 py-1">
            <div className="h-8 bg-slate-200 rounded"></div>
            <div className="space-y-4">
                <div className="grid grid-cols-3 gap-1">
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="grid  gap-4">
                    <div className="h-32 bg-slate-200 rounded"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
