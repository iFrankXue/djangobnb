export type Property = {
    id: string;
    price_per_night: number;
}

interface ReservationSidebarProps {
    property: Property
}

const ReservationSidebar: React.FC<ReservationSidebarProps> = ({
    property
}) => {
    return (
        <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h2 className="mb-5 text-2xl">${property.price_per_night}</h2>

            <div className="mb-6 p-3 border border-gary-500 rounded-xl">
                <label className="mb-2 block font-bold text-xs" htmlFor="">Guests</label>
                <select className="w-full -ml-1 text-xm">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
             
            <div className="cursor-pointer w-full mb-6 py-6 text-center text-white bg-airbnb rounded-xl hover:bg-airbnb-dark">
                Book
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>$200 * 4 nights</p>

                <p>$800</p>

            </div>
            <div className="mb-4 flex justify-between align-center">
                <p>DjangoBnb fee</p>

                <p>$50</p>

            </div>

            <hr />

            <div className="mb-4 flex justify-between align-center font-bold">
                <p>Total</p>

                <p>$850</p>

            </div>

        </aside>
    )
}

export default ReservationSidebar;