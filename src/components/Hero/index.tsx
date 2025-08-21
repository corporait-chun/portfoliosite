'use client';

import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900">
      {/* グラデーション背景オーバーレイ */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>
      
      {/* 追加のグラデーション効果 */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
      
      <div className="flex flex-col overflow-hidden pb-[200px] md:pb-[300px] lg:pb-[400px] pt-[50px] md:pt-[80px]">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-white">
                つくって魅せるWeb <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Webクリエイター
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mt-6">
                モダンなWebアプリケーションを創造する
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <a
                  href="#about"
                  className="inline-block bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl"
                >
                  詳しく見る
                </a>
                <a
                  href="/contact"
                  className="inline-block bg-transparent border-2 border-white/40 text-white hover:bg-white/20 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm"
                >
                  お問い合わせ
                </a>
              </div>
            </>
          }
        >
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
            alt="Web Development"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
};

export default Hero; 