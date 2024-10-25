"use client"; // Marking the component as a client component

import React from "react";
import Image from "next/image"; // Importing the Image component from Next.js
import icion from '../images/icion.png'; // Adjust the path as needed

interface StepProps {
  stepNumber: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const Contact: React.FC = () => {
  return (
    <div>
      <div className="min-h-screen bg-black text-white p-8 hover:border-4 hover:border-blue-500 transition-all duration-300">
        <h1 className="text-center text-4xl font-bold mb-10">MAKING PROCESS</h1>

        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-[#141414] p-8 rounded-xl shadow-lg">
            <h2 className="text-center text-2xl font-bold mb-6">일반 제작</h2>
            <p className="text-center text-sm text-gray-400 mb-6">
              제작 시작 후 5영업일 이내
            </p>

            <div className="space-y-6">
              <StepWithBorder
                stepNumber="STEP1"
                title="사전 논의"
                description="영상 제작 문의를 통해 의뢰 확인 후 상담을 통해 방향 설정 및 내용 협의"
              />
              <StepWithBorder
                stepNumber="STEP2"
                title="영상 기획"
                description="스토리보드 전달&수정을 통한 기획안 작성 가상인간 벤치와 스크립트 작성&촬영 프리프로덕션"
              />
              <StepWithBorder
                stepNumber="STEP3"
                title="영상 생성"
                description="작성한 스크립트로 가상인간 영상 생성 그외 이미지, 배경 음악 등 필요한 요소 생성"
              />
              <StepWithBorder
                stepNumber="STEP4"
                title="영상 편집"
                description="영상 전문가의 편집, 디자인, 후반 작업 단계 최종 완성 실사 촬영&특별한 편집"
              />
              <StepWithBorder
                stepNumber="STEP5"
                title="최종 납품"
                description="고객 피드백 반영하여 최종 완성 및 납품 영상&프로젝트 1회 제공"
              />
            </div>
          </div>

          <div className="bg-[#141414] border-2 border-[#FF4E83] p-8 rounded-xl shadow-lg">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] bg-clip-text text-transparent">
              Ploonet Quickserve™
            </h2>
            <p className="text-center text-sm text-gray-400 mb-6">
              제작 시작 후 12~48시간 이내
            </p>

            <div className="space-y-0">
              <StepWithoutBorder
                stepNumber="STEP1"
                title="제작 안내"
                description="영상 제작 문의를 통해 의뢰 확인 후 견적 및 진행"
                icon={<Image className="w-48 h-58 object-cover" src={icion} alt="Icon for step 1" />}
              />
              <div className="border-t-2 border-gray-600 my-4 w-1/2 mx-auto" />
              <StepWithoutBorder
                stepNumber="STEP2"
                title="편집 및 납품"
                description="편집 진행, 12~48시간 내 최종본 완성 및 납품"
                icon={<Image className="w-48 h-58 object-cover" src={icion} alt="Icon for step 3" />}
              />
              <div className="border-t-2 border-gray-600 my-4 w-1/2 mx-auto" />
              <StepWithoutBorder
                stepNumber="STEP3"
                title="편집 및 납품"
                description="편집 진행, 12~48시간 내 최종본 완성 및 납품"
                icon={<Image className="w-48 h-58 object-cover" src={icion} alt="Icon for step 3" />}
              />
            </div>
          </div>
          <p className="pl-[50px] text-sm text-gray-400">
            * 2~3분, 표준 견적에 따르는 일반 영상편집에 한정되며, 모션그래픽 등 전문 작업이 필요할 경우 작업 기간은 조정될 수 있습니다.
            ** 영상의 길이, 영상 제작에 필요한 수준에 따라 빠른 작업이 불가할 수 있으며, 클라이언트와의 협의를 통해 작업 기간을 조정할 수 있습니다.
          </p>
        </div>
      </div>

      <div className="bg-black text-white min-h-screen flex justify-center items-center p-5">
        <div className="max-w-lg w-full">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] bg-clip-text text-transparent">
            영상 제작 문의
          </h1>
          <p className="text-center mb-8">
            영상 제작이 필요하다면, 지금 문의 주세요.
          </p>

          <form className="space-y-4">
            <label className="block mb-1 text-sm" htmlFor="videoType">
              여러분이 필요한 영상을 빠르게 제작하기 위해 플루닛 영상제작소가 즉시 연락 드리겠습니다.
            </label>
            <select id="videoType" className="w-full px-3 py-2 bg-black text-white border border-gray-700 rounded-md">
              <option value="">영상 유형 선택</option>
              <option value="promo">홍보</option>
              <option value="presentation">프레젠테이션</option>
            </select>
            <input id="contactPerson" type="text" className="w-full px-3 py-2 bg-black text-white border border-gray-700 rounded-md" placeholder="연락 받으실 담당자 성함" />
            <input id="email" type="email" className="w-full px-3 py-2 bg-black text-white border border-gray-700 rounded-md" placeholder="이메일" />
            <input id="phone" type="tel" className="w-full px-3 py-2 bg-black text-white border border-gray-700 rounded-md" placeholder="휴대폰 번호" />
            <textarea id="videoDetails" className="w-full px-3 py-2 bg-black text-white border border-gray-700 rounded-md" rows={4} placeholder="의뢰하실 영상내용 ..."></textarea>
            <input type="text" className="w-full px-3 py-2 bg-black text-white border border-gray-700 rounded-md" placeholder="참고 영상의 링크를 기재해주세요." />
            <div className="text-[#FF6D51]">
              <p>참고할만한 영상이나 원하시는 영상과 유사한 영상의 링크 주소를 적어주시면 더 정확히 안내해드리겠습니다.</p>
            </div>
            <div className="flex items-center justify-between mt-6">
              <span className="text-sm text-gray-400">문의하기 전에 확인해 주세요.</span>
              <button type="submit" className="bg-orange-500 hover:bg-[#FF6D51] text-white py-2 px-4 rounded-md">문의하기</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const StepWithBorder: React.FC<StepProps> = ({ stepNumber, title, description }) => (
  <div className="flex items-start space-x-6 border-2 border-gray-600 rounded-full p-4">
    <div className="text-red-500 font-bold">{stepNumber}</div>
    <div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-300 text-base">{description}</p>
    </div>
  </div>
);

const StepWithoutBorder: React.FC<StepProps> = ({ stepNumber, title, description, icon }) => (
  <div className="flex flex-col items-start space-y-4 p-6">
    <div className="text-red-500 font-bold">{stepNumber}</div>
    <div className="flex items-center space-x-4">
      {icon}
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-300 text-base">{description}</p>
      </div>
    </div>
  </div>
);

export default Contact;
