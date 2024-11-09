import Image from "next/image";
import ReservationSidebar from "@/app/components/Properties/ReservationSidebar";

const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full mb-4 h-[64vh] overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src="/house_1.jpeg"
                    className="object-cover w-full h-full"
                    alt="House"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Property Name</h1>
                    <span className="mb-6 block text-lg text-gray-600">
                        4 guests - 2 bedrooms - 1 bathroom
                    </span>

                    <hr />
                    <div className="py-6 flex items-center space-x-4">
                        <Image
                            src="/landlord_profile_1.jpeg"
                            width={50}
                            height={50}
                            className="rounded-full"
                            alt="The Landlord"
                        />
                        <p><strong>John Doe is your host</strong></p>
                    </div>

                    <hr />

                    <p className="mt-6 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus minima impedit sed accusantium perferendis laborum ad eius nostrum error iste quibusdam officia commodi sapiente, recusandae eveniet saepe veniam culpa cum.</p>

                </div>

                <ReservationSidebar />

            </div>
        </main>
    )
}

export default PropertyDetailPage;