import Image from "next/image";
import { useState } from "react";

const Certifications = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  const handleOpenModal = (imageSrc: string) => {
    setModalImageSrc(imageSrc);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("closed");
    setModalOpen(false);
  };

  console.log(modalImageSrc);
  console.log(modalOpen);
  return (
    <>
      <section
        id="certification"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Certifications"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Certifications
          </h2>
        </div>
        <div className="w-full flex flex-wrap">
          <div className="w-1/3 p-2">
            <Image
              className="w-full h-auto transition-transform duration-300 transform hover:scale-110 cursor-pointer"
              src="/certificates/CSharp-Basic-Certificate.png"
              width={150}
              height={200}
              alt="HackerRank C# Basic Certificate"
              onClick={() =>
                handleOpenModal("/certificates/CSharp-Basic-Certificate.png")
              }
            />
          </div>
          <div className="w-1/3 p-2">
            <Image
              className="w-full h-auto transition-transform duration-300 transform hover:scale-110 cursor-pointer"
              src="/certificates/JavaScript-Basic-Certificate.png"
              width={150}
              height={200}
              alt="HackerRank JavaScript Basic Certificate"
              onClick={() =>
                handleOpenModal(
                  "/certificates/JavaScript-Basic-Certificate.png"
                )
              }
            />
          </div>
          <div className="w-1/3 p-2">
            <Image
              className="w-full h-auto transition-transform duration-300 transform hover:scale-110 cursor-pointer"
              src="/certificates/SQL-Basic-Certificate.png"
              width={150}
              height={200}
              alt="HackerRank SQL Basic Certificate"
              onClick={() =>
                handleOpenModal("/certificates/SQL-Basic-Certificate.png")
              }
            />
          </div>
          <div className="w-1/3 p-2">
            <Image
              className="w-full h-auto transition-transform duration-300 transform hover:scale-110 cursor-pointer"
              src="/certificates/javascript-algorithms-and-data-structures.png"
              width={150}
              height={200}
              alt="FreeCodeCampg JavaScript Algorithms and Data Structure"
              onClick={() =>
                handleOpenModal("/certificates/javascript-algorithms-and-data-structures.png")
              }
            />
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-50">
          <span
            className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
            onClick={() => handleCloseModal()}
          >
            &times;
          </span>
          <Image
            src={modalImageSrc}
            height={1000}
            width={1000}
            alt="Modal Image"
          />
        </div>
      )}
    </>
  );
};

export default Certifications;
