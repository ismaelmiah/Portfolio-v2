import Image from "next/image";
import { useState } from "react";
import Modal from "@/components/Modal";
import Link from "next/link";

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
      title: "Cloud Computing Fundamental",
      fileName: "cloud-computing-fundamentals.png",
    },
    {
      title: "Asp .NET Full Stack MVC Certificate",
      fileName: "asp.net-mvc-certificate.jpg",
    },
    {
      title: "Foundational C sharp Certificate(Microsoft)",
      fileName: "foundational-c-sharp-with-microsoft.png",
    },
    {
      title: "Linux Essential Course Completion Certificate",
      fileName: "linux-essential.png",
    },
  ];

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
          {certificates.slice(0, 4).map((certificate, index) => (
            <div key={index} className="w-1/2 p-2">
              <div className="relative group">
                <Image
                  className="w-full h-auto transition-transform duration-300 transform hover:scale-110 cursor-pointer"
                  src={`/certificates/${certificate.fileName}`}
                  width={150}
                  height={200}
                  alt={certificate.title}
                  onClick={() =>
                    handleOpenModal("/certificates/" + certificate.fileName)
                  }
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm text-center">{certificate.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
            aria-label="View Full Project Archive"
            href="/certifications"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                View All{" "}
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                  Certificates
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </Link>
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

export default Certifications;
