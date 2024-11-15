'use client'

import { useEffect,useState } from "react";
import PropertyListItem from "./PropertyListItem";
import apiService from "@/app/services/apiService";

export type PropertyType = {
    id: string;
    title: string;
    image_url: string;
    price_per_night: number;
    
}

const PropertyList = () => {
    const [properties, setProperties] = useState<PropertyType[]>([]);

    const getProperties = async () => {
        try {
            const tmpProperties = await apiService.get('api/properties/');
            if (Array.isArray(tmpProperties.data)) {
                setProperties(tmpProperties.data);
            } else {
                console.warn('Unexpected data format:', tmpProperties);
                setProperties([]);
            }
        } catch (error) {
            console.error('Failed to load properties:', error);
            setProperties([]);
        }
    };

    // const getProperties = async () => {

    //     const tmpProperties = await apiService.get('api/properties/')

    //     setProperties(tmpProperties.data);
    // }

    useEffect(() => {
        getProperties();
    }, []);

    return (
        <>
        {properties.length > 0 ? (
            properties.map((property) => (
                <PropertyListItem 
                    key={property.id}
                    property={property}
                />
            ))
        ) : (
            <p>Loading properties or no properties available...</p>
        )}
        </>
    );
};

export default PropertyList