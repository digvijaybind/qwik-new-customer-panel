const MedicalEquipmentCard = ({ image, title, className = "" }) => {
  return (
    <div className={`flex flex-col items-center flex-1 ${className}`}>
      <img src={image} alt="medical equipment" className="sm:h-[15px] h-[25px] mb-2" />
      <p className="sm:whitespace-normal whitespace-nowrap">{title}</p>
    </div>
  );
};

export default MedicalEquipmentCard;
