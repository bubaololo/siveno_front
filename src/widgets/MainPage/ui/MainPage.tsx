"use client";
import Catalog from '@/widgets/Catalog'
import { Category } from "@/widgets/Category";
import { Hero } from "@/widgets/Hero";
import Subscribe from '@/widgets/Subscribe'
import React from "react";
import {useProductStore} from "@/entities/productStore/store";
const MainPage = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Catalog />
      <Subscribe />
    </div>
  );
};

export default MainPage;
