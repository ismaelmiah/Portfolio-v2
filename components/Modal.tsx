import Image from "next/image";
import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

const Modal = ({ isOpen, onClose, imageSrc }: ModalProps) => {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-50"
      onClick={handleBackdropClick}
    >
      <span
        className="absolute top-4 right-4 text-white text-6xl cursor-pointer hover:text-gray-300"
        onClick={onClose}
      >
        &times;
      </span>
      <div className="max-w-[90%] max-h-[90%]">
        <Image
          src={imageSrc}
          height={1000}
          width={1000}
          alt="Certificate"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Modal; 