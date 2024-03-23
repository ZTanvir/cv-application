import { useState } from "react";
import CvInfo from "./CvInfo";
import CvPreview from "./CvPreview";

const Cv = () => {
  const [cvData, setCvData] = useState({
    personal_details: {
      full_name: "Josephine Meyers",
      profession: "Artist",
      description:
        "Engineers, as practitioners of engineering, are professionals who invent, design, analyze, build and test machines, complex systems, structures,",
    },
    education: [
      {
        school: "London City University",
        degree: "H.S.C",
        start_date: "03/23/2024",
        end_date: "07/23/2024",
      },
    ],
    experience: [{}],
  });
  return (
    <>
      <CvInfo userData={cvData} updateUserData={setCvData} />
      <CvPreview />
    </>
  );
};
export default Cv;
