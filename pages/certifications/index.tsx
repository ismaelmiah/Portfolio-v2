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
    setModalOpen(false);
  };

  var certificates = [
    {
      title: 'Cloud Computing Fundamental',
      fileName: 'cloud-computing-fundamentals.png'
    },
    {
      title: 'Asp .NET Full Stack MVC Certificate',
      fileName: 'asp.net-mvc-certificate.jpg'
    },
    {
      title: 'HackerRank C# Basic Certificate',
      fileName: 'basic-c-sharp-with-hackerrank.png'
    },
    {
      title: 'Foundational C sharp Certificate(Microsoft)',
      fileName: 'foundational-c-sharp-with-microsoft.png'
    },
    {
      title: 'HackerRank SQL Basic Certificate',
      fileName: 'basic-sql-with-hackerrank.png'
    },
    {
      title: 'HackerRank JavaScript Basic Certificate',
      fileName: 'basic-javascript-with-hackerrank.png'
    },
    {
      title: 'FreeCodeCampg JavaScript Algorithms and Data Structure',
      fileName: 'javascript-algorithms-and-data-structures.png'
    },
    {
      title: 'Udemy AWS Course Completion Certificate',
      fileName: 'udemy-aws-course-completion-certificate.jpg'
    },
    {
      title: 'Linux Essential Course Completion Certificate',
      fileName: 'linux-essential.png'
    },
    {
      title: 'Network Essential Course Completion Certificate',
      fileName: 'network-essential.png'
    }
  ]

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
          {certificates.map((certificate, index) => (
            <div key={index} className="w-1/2 p-2">
              <Image
                className="w-full h-auto transition-transform duration-300 transform hover:scale-110 cursor-pointer"
                src={`/certificates/${certificate.fileName}`}
                width={150}
                height={200}
                alt={certificate.title}
                onClick={() => handleOpenModal('/certificates/' + certificate.fileName)}
              />
            </div>
          ))}
        </div>
      </section>

      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-50">
          <span
            className="absolute top-4 right-4 text-white text-6xl cursor-pointer"
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
