import type React from "react";
import { createContext, useContext, useState } from "react";

interface Basket {
	id: number;
	title: string;
	cover: string;
	synopsis: string;
	category: string;
	publisher: string;
	collections: string;
	location: {
		lat: number;
		lng: number;
		address: string;
	};
	price: number;
	isNew: true;
	publishedDate: Date;
	pages: number;
}

interface BasketContextProps {
	basket: Basket[];
	setBasket: React.Dispatch<React.SetStateAction<Basket[]>>;
	removeFromBasket: (id: number) => void;
}

const BasketContext = createContext<BasketContextProps | undefined>(undefined);

export const useBasket = () => {
	const context = useContext(BasketContext);
	if (!context) {
		throw new Error("useBasket must be used within a BasketProvider");
	}
	return context;
};

export const BasketProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [basket, setBasket] = useState<Basket[]>([]);

	const removeFromBasket = (id: number) => {
		setBasket((prevBasket) =>
			prevBasket.filter((service) => service.id !== id),
		);
	};

	return (
		<BasketContext.Provider value={{ basket, setBasket, removeFromBasket }}>
			{children}
		</BasketContext.Provider>
	);
};
      