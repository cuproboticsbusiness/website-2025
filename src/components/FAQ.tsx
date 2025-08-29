"use client";
import Faq from "@/data/recruitment/faq.json";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  return (
    <div className="flex-column items-center justify-center gap-2 mt-4">
      {Faq.map(({ question, answer }, index) => (
        <Accordion
          key={question}
          className="w-10/12"
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            border: "1px solid #666",
            overflow: "hidden",
            "& .MuiAccordionSummary-root": {
              backgroundColor: "#000",
            },
            "& .MuiSvgIcon-root": {
              color: "var(--cup-red)",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {question}
          </AccordionSummary>
          <AccordionDetails>{answer}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQ;
