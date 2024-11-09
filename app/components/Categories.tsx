import Image from "next/image";

const Categories = () => {
    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/icon_category_cabins.jpg"
                    alt="Category - Cabins"
                    width={20}
                    height={20}
                />
                <span className="text-xs">Cabins</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/icon_category_treehouse.jpg"
                    alt="Category - Cabins"
                    width={20}
                    height={20}
                />
                <span className="text-xs">Tree House</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/icon_category_camping.jpg"
                    alt="Category - Cabins"
                    width={20}
                    height={20}
                />
                <span className="text-xs">Camping</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/icon_category_lakefront.jpg"
                    alt="Category - Cabins"
                    width={20}
                    height={20}
                />
                <span className="text-xs">Lakefront</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/icon_category_farms.jpg"
                    alt="Category - Cabins"
                    width={20}
                    height={20}
                />
                <span className="text-xs">Farms</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/icon_category_islands.jpg"
                    alt="Category - Cabins"
                    width={20}
                    height={20}
                />
                <span className="text-xs">Islands</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/icon_category_beachfront.jpg"
                    alt="Category - Cabins"
                    width={20}
                    height={20}
                />
                <span className="text-xs">Beachfront</span>
            </div>
        </div>
    )
}

export default Categories