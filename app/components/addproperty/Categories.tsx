import Image from "next/image";

interface CategoriesProps {
    dataCategory: string;
    setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> =({
    dataCategory,
    setCategory,
}) => {
    return (
        <>
            <div className="pt-3 cursor-pointer pb-6 flex item-center space-x-12">
                <div 
                    onClick={() => setCategory('Cabins')}
                    className={`pb-4 flex flex-col ${dataCategory =='Cabins' ? 'border-gray-800' : 'border-white'} items-center space-y-2 border-b-2 opacity-60 hover:border-gray-800 hover:opacity-100`}
                >
                    <Image 
                        src="/icon_category_cabins.jpg"
                        alt="Category - Cabins"
                        width={20}
                        height={20}
                    />
                    <span className="text-xs">Cabins</span>
                </div>
                <div 
                    onClick={() => setCategory('Tree House')}
                    className={`pb-4 flex flex-col ${dataCategory =='Tree House' ? 'border-gray-800' : 'border-white'} items-center space-y-2 border-b-2 opacity-60 hover:border-gray-800 hover:opacity-100`}
                >
                    <Image 
                        src="/icon_category_treehouse.jpg"
                        alt="Category - Tree House"
                        width={20}
                        height={20}
                    />
                    <span className="text-xs">Tree House</span>
                </div>
                <div 
                    onClick={() => setCategory('Camping')}
                    className={`pb-4 flex flex-col ${dataCategory =='Camping' ? 'border-gray-800' : 'border-white'} items-center space-y-2 border-b-2 opacity-60 hover:border-gray-800 hover:opacity-100`}
                >
                    <Image 
                        src="/icon_category_camping.jpg"
                        alt="Category - Camping"
                        width={20}
                        height={20}
                    />
                    <span className="text-xs">Camping</span>
                </div>
                <div 
                    onClick={() => setCategory('Lakefront')}
                    className={`pb-4 flex flex-col ${dataCategory =='Lakefront' ? 'border-gray-800' : 'border-white'} items-center space-y-2 border-b-2 opacity-60 hover:border-gray-800 hover:opacity-100`}
                >
                    <Image 
                        src="/icon_category_lakefront.jpg"
                        alt="Category - Lakefront"
                        width={20}
                        height={20}
                    />
                    <span className="text-xs">Lakefront</span>
                </div>
                <div 
                    onClick={() => setCategory('Farms')}
                    className={`pb-4 flex flex-col ${dataCategory =='Farms' ? 'border-gray-800' : 'border-white'} items-center space-y-2 border-b-2 opacity-60 hover:border-gray-800 hover:opacity-100`}
                >
                    <Image 
                        src="/icon_category_farms.jpg"
                        alt="Category - Farms"
                        width={20}
                        height={20}
                    />
                    <span className="text-xs">Farms</span>
                </div>
                <div 
                    onClick={() => setCategory('Islands')}
                    className={`pb-4 flex flex-col ${dataCategory =='Islands' ? 'border-gray-800' : 'border-white'} items-center space-y-2 border-b-2 opacity-60 hover:border-gray-800 hover:opacity-100`}
                >
                    <Image 
                        src="/icon_category_islands.jpg"
                        alt="Category - Islands"
                        width={20}
                        height={20}
                    />
                    <span className="text-xs">Islands</span>
                </div>
                <div 
                    onClick={() => setCategory('Beachfront')}
                    className={`pb-4 flex flex-col ${dataCategory =='Beachfront' ? 'border-gray-800' : 'border-white'} items-center space-y-2 border-b-2 opacity-60 hover:border-gray-800 hover:opacity-100`}
                >
                    <Image 
                        src="/icon_category_beachfront.jpg"
                        alt="Category - Beachfront"
                        width={20}
                        height={20}
                    />
                    <span className="text-xs">Beachfront</span>
                </div>                
            </div>
        
        </>
    )
}

export default Categories;