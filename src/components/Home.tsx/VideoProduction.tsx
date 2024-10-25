"use client"; 
import React from 'react';

const VedioProduction: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-2">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-red-500 font-bold text-lg innerText mb-4">영상 제작소</h2>
        <h1 className="md:text-4xl sm:text-2xl text-2xl font-bold mb-8">
          당장 내일 ‘고품질 맞춤 영상’을 받아보세요.
        </h1>

        <div className="md:px-10 sm:px-0 px-0">
          <div className="flex items-center justify-center grid-cols-2 sm:grid-cols-4 gap-2 md:mb-16 sm:mb-5 mb-5">
            <div className="circle-border">
              <div className="circle-content">
                <div className="text-red-500 innerText md:text-xl sm:text-sm text-sm font-bold">FAST</div>
                <div className="text-xl hidden innerText md:flex">X2</div>
              </div>
            </div>
            <div className="circle-border">
              <div className="circle-content">
                <div className="text-red-500 innerText md:text-xl sm:text-sm text-sm font-bold">QUALITY</div>
                <div className="text-xl hidden innerText md:flex">A++</div>
              </div>
            </div>
            <div className="circle-border">
              <div className="circle-content">
                <div className="text-red-500 innerText md:text-xl sm:text-sm text-sm font-bold">LOW PRICE</div>
                <div className="text-xl hidden innerText md:flex">1/2</div>
              </div>
            </div>
            <div className="circle-border">
              <div className="circle-content">
                <div className="text-red-500 innerText md:text-xl sm:text-sm text-sm font-bold">HIGH TECH</div>
                <div className="text-xl hidden innerText md:flex">Gen AI</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-white md:px-12 sm:px-4 px-4">
          <h3 className="md:text-2xl sm:text-xl text-xl font-bold mb-6">AI VIDEO ON YOUR DEMAND</h3>
          <p className="mb-4 text-gray-400 md:text-lg sm:text-sm text-sm">
            가상인간 뿐 아니라 배경 이미지와 음악 생성 등 국내 최고의 생성 AI 기술에 영상 전문가의 터치를 더해
            비용 및 시간을 절감하고 퀄리티는 보장된 영상을 만듭니다.
          </p>
          <p className="mb-4 text-gray-400 md:text-lg sm:text-sm text-sm">
            가격은 절반으로, 속도는 두배로, 퀄리티는 A++! 기업 홍보, 제품 소개, 교육 및 행사, 정보 및 안내 영상 등
            당신이 필요한 ‘그 영상’을 플루투 영상제작소에 맡겨주세요.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VedioProduction;
