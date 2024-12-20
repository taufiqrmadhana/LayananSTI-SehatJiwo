"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  const quickAccess = [
    {
      title: "Konsultasi Cepat",
      icon: "/assets/svg/chat-svgrepo-com.svg",
      description: "Terhubung langsung dengan psikolog profesional untuk solusi cepat.",
      link: "/chat",
    },
    {
      title: "Jadwal Konsultasi",
      icon: "/assets/svg/calendar-days-svgrepo-com.svg",
      description: "Atur jadwal sesi konsultasi sesuai kebutuhan Anda.",
      link: "/calendar",
    },
    {
      title: "Laporan Psikologi",
      icon: "/assets/svg/report-linechart-svgrepo-com.svg",
      description: "Pantau perkembangan kesehatan mental Anda secara berkala.",
      link: "/report",
    },
    {
      title: "Komunitas",
      icon: "/assets/svg/community-group-leader-svgrepo-com.svg",
      description: "Terhubung dan berbagi pengalaman di komunitas mental sehat.",
      link: "/community",
    },
  ];

  const testimonials = [
    {
      name: "Daniel Caesar",
      feedback: "SehatJiwo membantu saya mengelola stres dengan lebih baik. Layanan sangat praktis!",
      image: "/assets/danil.jpg",
    },
    {
      name: "Frank Ocean",
      feedback: "Sesi konseling membantu dan mudah diakses kapan saja. Benar-benar membantu!",
      image: "/assets/ocean.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B1214] text-[#FBFADA]" style={{ marginLeft: "16rem" }}>
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <Image
          src="/assets/pexels-cottonbro-4101143.jpg"
          alt="Hero Image"
          fill
          style={{ objectFit: 'cover' }}
          className="brightness-50"
        />
        <div className="absolute text-center animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Dukungan Psikologi Profesional <br /> Untuk Anda
          </h1>
          <p className="text-lg text-[#D5E3C2] mb-6">
            Mulai konsultasi online dengan psikolog kapan saja, dimana saja.
          </p>
          <Link href="/chat">
            <button className="px-8 py-3 bg-[#ADBC9F] text-black font-semibold rounded-md hover:bg-[#D5E3C2] transition-all duration-300">
              Mulai Chat Sekarang
            </button>
          </Link>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-10 animate-fadeIn">Akses Cepat</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickAccess.map((item, index) => (
            <Link key={index} href={item.link}>
              <div className="p-6 bg-[#1C2B2D] rounded-lg text-center shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="mx-auto mb-4 filter invert brightness-150"
                />
                <h3 className="text-lg font-semibold mb-2 text-[#FBFADA]">{item.title}</h3>
                <p className="text-sm text-[#D5E3C2]">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Mengapa SehatJiwo */}
      <section className="py-12 px-8 bg-[#121A1C] rounded-lg shadow-inner mb-10">
        <h2 className="text-3xl font-bold text-center mb-8 animate-fadeIn">Mengapa SehatJiwo?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-5xl font-bold text-[#ADBC9F] mb-2">500+</h3>
            <p className="text-lg text-[#D5E3C2]">Psikolog Profesional</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-[#ADBC9F] mb-2">10,000+</h3>
            <p className="text-lg text-[#D5E3C2]">Sesi Konseling Selesai</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-[#ADBC9F] mb-2">98%</h3>
            <p className="text-lg text-[#D5E3C2]">Tingkat Kepuasan Pengguna</p>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-12 px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Apa Kata Pengguna Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 p-6 bg-[#1C2B2D] rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-[#D5E3C2] mb-3 italic">"{item.feedback}"</p>
                <p className="font-semibold text-[#FBFADA]">- {item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#121A1C] text-[#D5E3C2] py-6 px-8 text-center text-sm">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} SehatJiwo. Semua Hak Dilindungi.</p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <Link href="/privacy" className="hover:text-[#ADBC9F] transition-all">Kebijakan Privasi</Link>
            <Link href="/terms" className="hover:text-[#ADBC9F] transition-all">Syarat & Ketentuan</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
