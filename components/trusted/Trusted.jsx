import React from 'react';
import styles from './Trusted.module.css';
import Image from 'next/image';
const Trusted = ({ img }) => {
  return (
    <div className={`${styles.Wrapper}`}>
      <div class="grids grid-cols-2 gap-3">
        <div>
          <Image src={img} height={100} width={100} />
        </div>
        <div class="flex flex-col">
          <div class="">Express Lane to Care</div>
          <div class=""></div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
