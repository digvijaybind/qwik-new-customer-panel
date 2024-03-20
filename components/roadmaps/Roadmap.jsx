import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import styles from './Roadmap.module.css';
const Roadmap = () => {
  const bookTypes = ['Dedicated Air Ambulance', 'Commercial stretcher'];
  const [SelectedIndex, setSelectedIndex] = useState(0);
  return (
    <div>
      <div
        className={`w-[90%] mx-[5%] h-[550px] sm:h-[250px] lg:h-[330px] xl:h-[460px] ${styles.boxShadow} mt-[60px]`}
      >
        <div className="h-[60px] flex flex-row w-full md:flex-col sm:flex-col">
          {bookTypes.map((item, index) => {
            return (
              <button
                key={index}
                className={`w-[50%] flex justify-center items-center h-full sm:w-[100%] md:w-[100%] ${
                  SelectedIndex === index ? 'bg-[#14A4D4]' : 'bg-[#F0F0F09C]'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedIndex(index);
                }}
              >
                <div className="flex flex-row items-center justify-start gap-[10px] sm:flex-col">
                  {SelectedIndex === index ? (
                    <div>
                      <Image
                        className="w-[40px] h-[40px] sm:w-[20px] sm:h-[20px]"
                        src="/images/small_plane.svg"
                        width={40}
                        height={40}
                        alt="rapid Time"
                        layout="contain"
                        class="block sm:hidden"
                      />
                    </div>
                  ) : (
                    <div>
                      <Image
                        className="w-[40px] h-[40px] sm:w-[20px] sm:h-[20px]"
                        src="/images/small_plane.svg"
                        width={40}
                        height={40}
                        alt="rapid Time"
                        layout="contain"
                        class="block sm:hidden"
                      />
                    </div>
                  )}
                  <p
                    className={`font-normal text-[16px] leading-[26px] ${
                      SelectedIndex === index ? 'text-[#fff]' : 'text-[#000]'
                    }`}
                  >
                    {item}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {SelectedIndex === 0 ? (
          <Image
            className="w-full max-h-[490px] sm:h-[240px] lg:h-[320px] xl:h-[400px]"
            src="/images/ablance.png"
            width={40}
            height={40}
            alt="rapid Time"
            layout="responsive"
          />
        ) : (
          <Image
            className="w-full max-h-[490px] sm:h-[240px] lg:h-[320px] xl:h-[400px]"
            src="/images/commericial.png"
            width={40}
            height={40}
            alt="Another Image"
            layout="responsive"
          />
        )}
      </div>
    </div>
  );
};

export default Roadmap;
