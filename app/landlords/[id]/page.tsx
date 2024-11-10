import Image from "next/image";

import PropertyList from "@/app/components/Properties/PropertyList";
import ContactButton from "@/app/components/ContactButton";

const LandlordDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="col-span-1 mb-4">
                    <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
                        <Image
                            className="rounded-full"
                            src="/landlord_profile_1.jpeg"
                            width={200}
                            height={200}
                            alt="Landlord name"
                        />

                        <h1 className="mt-6 text-2xl">Landlord Name</h1>
                        <ContactButton />
                    </div>

                </div>
                <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <PropertyList />
                    </div>
                    
                </div>
            </div>
        </main>
    )
}

export default LandlordDetailPage;