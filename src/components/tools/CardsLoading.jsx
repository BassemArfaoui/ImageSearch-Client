export default function CardsLoading() {
    return (
      <div className="w-[230px] overflow-hidden rounded-xl border-2 border-gray-400 bg-white shadow-lg transition-all animate-pulse">
  
        {/* Image Skeleton */}
        <div className="flex pt-3">
          <div className="relative flex flex-1 justify-center overflow-hidden">
            <div className="flex aspect-square w-[78px] h-[78px] justify-center mb-3 mt-3 border-2 border-gray-300 p-2 rounded-full bg-gray-200" />
          </div>
        </div>
  
        {/* Tags Skeleton */}
        <div className="flex-1 flex justify-center items-center gap-3 flex-wrap mt-3 mb-3">
          <div className="h-4 w-12 rounded-md bg-gray-300" />
          <div className="h-4 w-12 rounded-md bg-gray-300" />
        </div>
  
        {/* Title & Description Skeleton */}
        <div className="p-4 space-y-2">
          <div className="h-4 w-3/4 rounded bg-gray-300" />
          <div className="h-3 w-1/2 rounded bg-gray-300" />
        </div>
  
        {/* Footer Skeleton */}
        <div className="flex items-center justify-between border-t p-3 px-4 pt-2">
          <div className="h-4 w-16 rounded bg-gray-300" />
          <div className="h-4 w-10 rounded bg-gray-300" />
        </div>
  
      </div>
    );
  }
  