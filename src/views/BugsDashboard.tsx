import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axiosInstance from "../axios-instance.js";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useJwt } from "react-jwt";
import CreateBugModal from "./CreateBugModal.jsx";

const BugsDashboard = () => {
  const [bugs, setBugs] = useState([]);
  const [isCreateBugModalOpen, setIsCreateBugModalOpen] = useState(false);
  const token = localStorage.getItem("token");
  const { decodedToken: user } = useJwt(token);

  console.log(user);

  useEffect(() => {
    try {
      (async () => {
        const result = await axiosInstance.get("/bugs");
        console.log(result);
        if (result.data.length !== 0) setBugs(result.data);
      })();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <Box className={"flex justify-between h-8 px-5 bg-blue-400 mb-5"}>
        <Box className={"text-black"}>Bug app</Box>
        <Box className={"text-black"}>Welcome, {user?.email}</Box>
      </Box>

      <Box className="w-9/12 m-auto font-bold text-black">
        <h1 className="text-center text-blue-400 my-4 ">
          These are all of the reported bugs
        </h1>
        {bugs.map((bug) => (
          <Accordion key={bug.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{bug.title}</Typography>
            </AccordionSummary>
            <AccordionDetails className="text-black">
              <Typography>{bug.steps}</Typography>
            </AccordionDetails>
            <Box className={"block text-center mx-auto my-2"}>
              {user?.role === "Developer" && (
                <Button variant="outlined">Mark as completed</Button>
              )}
            </Box>
          </Accordion>
        ))}
      </Box>
      <Box className={"block text-center mx-auto my-2"}>
        {user?.role === "QA" && (
          <Button
            onClick={() => setIsCreateBugModalOpen(true)}
            variant="outlined"
          >
            Add a new bug
          </Button>
        )}
      </Box>

      {isCreateBugModalOpen && (
        <CreateBugModal
          open={isCreateBugModalOpen}
          setIsCreateBugModalOpen={setIsCreateBugModalOpen}
        />
      )}
    </>
  );
};

export default BugsDashboard;
