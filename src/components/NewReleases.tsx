import React, { useState } from "react";
import { useComics } from "../context/ComicsContext";
import { useBasket } from "../context/BasketContext";

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

export function NewReleases() {
	const { comics } = useComics();
	const newReleases = comics.filter((comic) => comic.isNew);
	const { basket, setBasket, removeFromBasket } = useBasket();
	const handleAddOrRemoveFromBasket = () => {
		if (basket.some((item: Basket) => item.id === basket.id)) {
			removeFromBasket(basket.id);
		} else {
			setBasket((prevBasket: Basket[]) => [...prevBasket, basket]);
		}
	};

	return (
		<section className="bg-gray-50 py-12">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-8">
					Nouveautés de la semaine
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{newReleases.map((comic) => (
						<div
							key={comic.id}
							className="bg-white rounded-lg shadow-lg overflow-hidden"
						>
							<img
								src={comic.cover}
								alt={comic.title}
								className="w-full h-64 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">{comic.title}</h3>
								<p className="text-gray-600 text-sm mb-4">{comic.publisher}</p>
								<p className="text-gray-700 mb-4">
									{comic.synopsis.substring(0, 200)} ...
								</p>
								<div className="flex justify-between items-center">
									<span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
										{comic.category}
									</span>
									<span className="font-bold text-lg">{comic.price}€</span>
									<button
										type="button"
										onClick={handleAddOrRemoveFromBasket}
										className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
									>
										{basket.some((item) => item.id === basket.id)
											? "Retirer du panier"
											: "Ajouter au panier"}
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
