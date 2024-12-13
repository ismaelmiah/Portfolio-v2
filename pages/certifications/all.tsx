import Image from "next/image";
import { useState } from "react";
import Modal from "@/components/Modal";
import Link from "next/link";

const AllCertifications = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  const handleOpenModal = (imageSrc: string) => {
    setModalImageSrc(imageSrc);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const certificates = [
    {
      title: "Cloud Computing Fundamental",
      fileName: "cloud-computing-fundamentals.png",
    },
    {
      title: "Asp .NET Full Stack MVC Certificate",
      fileName: "asp.net-mvc-certificate.jpg",
    },
    {
      title: "HackerRank C# Basic Certificate",
      fileName: "basic-c-sharp-with-hackerrank.png",
    },
    {
      title: "Foundational C sharp Certificate(Microsoft)",
      fileName: "foundational-c-sharp-with-microsoft.png",
    },
    {
      title: "HackerRank SQL Basic Certificate",
      fileName: "basic-sql-with-hackerrank.png",
    },
    {
      title: "HackerRank JavaScript Basic Certificate",
      fileName: "basic-javascript-with-hackerrank.png",
    },
    {
      title: "FreeCodeCampg JavaScript Algorithms and Data Structure",
      fileName: "javascript-algorithms-and-data-structures.png",
    },
    {
      title: "Udemy AWS Course Completion Certificate",
      fileName: "udemy-aws-course-completion-certificate.jpg",
    },
    {
      title: "Linux Essential Course Completion Certificate",
      fileName: "linux-essential.png",
    },
    {
      title: "Network Essential Course Completion Certificate",
      fileName: "network-essential.png",
    },
  ];

  return (
    <>
      <section
        id="all-certifications"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="All Certifications"
      >
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:py-24">
            <Link
              className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300"
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Ismael Miah
            </Link>

            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              All Certifications
            </h1>
            <div className="w-full mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {certificates.map((certificate, index) => (
                <div key={index} className="relative group">
                  <Image
                    className="w-full h-auto transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                    src={`/certificates/${certificate.fileName}`}
                    width={300}
                    height={400}
                    alt={certificate.title}
                    onClick={() =>
                      handleOpenModal("/certificates/" + certificate.fileName)
                    }
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-center">{certificate.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        imageSrc={modalImageSrc}
      />
    </>
  );
};

export default AllCertifications;
