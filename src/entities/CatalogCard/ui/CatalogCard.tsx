"use client";
import React, { useEffect, useState } from "react";
import { ICCard } from "../types";

import "../styles/catalog-card.scss";

import { useFavStore } from "@/entities/favouriteStore/store";
import Link from "next/link";
import Image from "next/image";
import { useAddToWishlistMutation } from "@/shared/api/ProfileApi/ProfileApi";
import { useAuth } from "@/shared/hook/AuthContext/ui/AuthContext";
import { useRouter } from "next/navigation";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useProductStore } from "@/entities/productStore/store";
import CarouselMousemove from "@/entities/CarouselMousemove/ui/CarouselMousemove";

const CatalogCard = ({ id, images, img, name, href, price, del, discount_percent, original_price }: ICCard) => {
  const { addFav } = useFavStore();
  const { addProduct } = useProductStore();
  const handleAddFavourite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (name.trim() && price && images && images.length > 0) {
      addFav({
        id: id.toString(),
        name,
        price: parseFloat(price),
        img: images[0].image_path,
      });
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (name.trim() && price && images && images.length > 0) {
      addProduct({
        id: id.toString(),
        name,
        price: parseFloat(price),
        img: images[0].image_path,
        quantity: 1,
        selectedSize: "",
      });
    }
  };

  return (
    <Link href={href} className="block product-card-wrapper">
      <div className="product-card">
        <div className="product-card__image">
          {
            images?.length
              ? <CarouselMousemove slides={images.slice(0, 4)} />
              : img
                ? <Image src={img} alt="image" width={400} height={600} />
                : <Image src="/images/About/img3.jpg" alt="image" width={400} height={600} />
          }
          {!del && (
            <div className="product-card__actions">
              <button aria-label="Добавить в избранное" onClick={handleAddFavourite}>
                <IoMdHeartEmpty size={18} />
              </button>
              <button aria-label="Добавить в корзину" onClick={handleAddToCart}>
                <IoCartOutline size={18} />
              </button>
            </div>
          )}
        </div>

        <div className="product-card__info">
          <h3 className="product-card__title">{name}</h3>
          <p className="product-card__price flex gap-3 items-end">
            <span>{price ? `${price} ₽` : ""}</span>
            { discount_percent && discount_percent > 0 && (
              <>
                <span className="text-base text-gray-500 opacity-75 line-through">{Number(original_price).toFixed()}₽</span>
                <span className="text-sm bg-black text-white rounded-full px-1 py-0.5">
                  -{Math.floor(discount_percent)}%
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CatalogCard;
