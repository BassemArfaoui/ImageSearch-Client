import { Leaf, Sun, Snowflake, Cloud } from "lucide-react"

export default function ProductCard({
  id ,
  gender,
  masterCategory ,
  subCategory ,
  articleType ,
  baseColour  ,
  season ,
  year ,
  usage,
  productDisplayName ,
}) {
  const getSeasonIcon = (season) => {
    switch (season.toLowerCase()) {
      case "summer":
        return <Sun className="h-4 w-4 text-amber-500" />
      case "winter":
        return <Snowflake className="h-4 w-4 text-sky-500" />
      case "spring":
        return <Leaf className="h-4 w-4 text-green-700" />
      case "fall":
      case "autumn":
        return <Leaf className="h-4 w-4 text-yellow-700" />
      default:
        return <Cloud className="h-4 w-4 text-gray-400" />
    }
  }


  const getSeasonColor = (season) => {
    switch (season.toLowerCase()) {
      case "summer":
        return "text-amber-500"
      case "winter":
        return "text-sky-500"
      case "spring":
        return "text-green-700"
      case "fall":
      case "autumn":
        return "text-yellow-700"
      default:
        return "text-gray-400"
    }
  }

  return (
    <div className="w-[230px] overflow-hidden rounded-xl border-2 border-gray-400 bg-white shadow-lg transition-all ">
      {/* Image Section */}
      <div className=" flex pt-2">
        <div className="relative  justify-center overflow-hidden  flex flex-1 ">
          <div className="flex aspect-[3/3] w-[105px] h-[105px] justify-center mb-3 mt-3 border-2 border-gray-400 p-1.5 rounded-full">
            <img
              src={`https://res.cloudinary.com/dgsijiupw/image/upload/v1743859091/products/${id}.jpg`}
              alt={productDisplayName}
              className="w-full h-full object-contain object-center rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 flex  justify-center items-center gap-3 flex-wrap mt-2 mb-1">

          <div className=" rounded-md bg-gray-200/80 px-2 py-0.5 text-xs font-medium text-black backdrop-blur-sm">
            {gender}
          </div>
          <div className=" rounded-md bg-gray-200/80 px-2 py-0.5 text-xs font-medium text-black backdrop-blur-sm">
            {usage}
          </div>

      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="mb-1 line-clamp-1 text-base font-bold">
          {productDisplayName}
        </h3>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <span>{articleType}</span>
          <span className="text-xs">•</span>
          <span>{baseColour}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t p-3 px-4 pt-2">
        <div className="rounded border px-2 py-0.5 text-xs text-gray-700">
          {masterCategory}
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <span className={"flex items-center gap-1 "+getSeasonColor(season)}>
            {getSeasonIcon(season)}
            {season}
          </span>
        </div>
      </div>
    </div>
  );
}
