"use client";

import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-neutral-900 text-stone-50 w-full py-8 px-4 md:px-12 lg:px-24">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                
                <div className="flex flex-col items-center md:items-start space-y-4">
                    <img
                        src="/assets/VSTOCKS/Assets/Logo K12/k12transparentlogo.png"
                        alt="K-12 AIChE ITB"
                        className="h-12 sm:h-16"
                    />
                    <img
                        src="/assets/VSTOCKS/Logos/Copy of New Logo AIChE Full White.png"
                        alt="AIChE ITB"
                        className="h-12 sm:h-16"
                    />
                </div>

                <div className="text-center">
                    <p className="text-stone-50 text-lg">© K12-AIChE ITB</p>
                </div>

                <div className="flex flex-col items-center md:items-end space-y-4">
                    <a href="https://www.instagram.com/k12.itb" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                        <img
                            src="/assets/svg/instagram-1-svgrepo-com.svg"
                            alt="Instagram"
                            className="h-5 sm:h-6 filter invert" 
                        />
                        <span className="text-sm sm:text-base">@k12.itb</span>
                    </a>
                    <a href="https://www.aiche.org/community/students/chapters/institut-teknologi-bandung-student-chapter" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                        <img
                            src="/assets/svg/web-svgrepo-com.svg"
                            alt="AIChE ITB SC"
                            className="h-5 sm:h-6 filter invert"  
                        />
                        <span className="text-sm sm:text-base">aiche.org</span>
                    </a>
                    <a href="mailto:aicheitb.k12@gmail.com" className="flex items-center space-x-2">
                        <img
                            src="/assets/svg/email-1573-svgrepo-com.svg"
                            alt="Email"
                            className="h-5 sm:h-6 filter invert" 
                        />
                        <span className="text-sm sm:text-base">aicheitb.k12@gmail.com</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
