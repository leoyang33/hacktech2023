import React, { useEffect, useState, useRef, useCallback } from "react";
import USAMap from "react-usa-map";
import statesJson from "./states.json";

import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewElectricity } from 'src/sections/overview/overview-electricity';

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

// http://www.worldlicenseplates.com/usa/US_USAX.html

const MyPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
}));

const BoxButton = styled(Box)(({ theme }) => ({
  backgroundColor: "#4db6ac",
  ...theme.typography.h5,
  padding: theme.spacing(1),
  margin: theme.spacing(1),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.text.secondary,
  height: "100%",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#80cbc4",
    borderColor: "#0062cc",
    boxShadow: "none"
  }
}));

const BoxButtonSub = styled(BoxButton)(({ theme }) => ({
  backgroundColor: "#e57373",
  "&:hover": {
    backgroundColor: "#ef9a9a",
    borderColor: "#0062cc",
    boxShadow: "none"
  }
}));

const BoxButtonSub2 = styled(BoxButton)(({ theme }) => ({
  backgroundColor: "#F4D03F",
  "&:hover": {
    backgroundColor: "#fff176",
    borderColor: "#0062cc",
    boxShadow: "none"
  }
}));

export default function Map() {
  const states = statesJson.data;
  const defaultCondition = {
    ongoing: false,
    correctCnt: 0,
    falseCnt: 0,
    failed: false
  };
  const [condition, setCondition] = useState(defaultCondition);
  const [quizArray, setQuizArray] = useState(states);
  const [msg, setMsg] = useState("");
  const [qAbbreviation, setqAbbreviation] = useState(null);
  const [colorMap, setColorMap] = useState({});
  const [progNum, setProgNum] = useState(0);
  const [count, setCount] = useState(0);
  const [quizMode, setQuizMode] = useState(null);

  const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const intervalRef = useRef(null);
  const startCount = useCallback(() => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount((c) => c + 0.1);
    }, 100);
  }, []);
  const stopCount = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  useEffect(() => {
    setQuizArray((quizArray) => shuffle(quizArray));
  }, []);

  useEffect(() => {
    setqAbbreviation(quizArray[progNum].attributes.abbreviation);
  }, [quizArray, progNum]);

  // 1回目は緑、2回目以降は黄色にする, 正解したかを返す
  const fillWhenCorrect = (guess, failed) => {
    let fillColor = "#2ECC71";
    if (failed) fillColor = "#F4D03F";

    let correct = false;
    let newColorMap = colorMap;

    if (quizMode === 1) {
    //   highwayGroup.forEach((group) => {
    //     if (group.includes(guess)) {
    //       if (group.includes(qAbbreviation)) {
    //         correct = true;
    //         group.forEach((st) => {
    //           newColorMap[st] = { fill: fillColor };
    //         });
    //       }
    //     }
    //   });
    }

    if (!correct) {
      if (guess === qAbbreviation) {
        correct = true;
        newColorMap[guess] = { fill: fillColor };
      }
    }
    setColorMap(newColorMap);

    return correct;
  };

  const startSession = () => {
    stopCount();
    setCount(0);
    setMsg("");
    setColorMap({});
    setProgNum(0);
    setCondition({ ...defaultCondition, ongoing: true });
    startCount();
  };

  const resetSession = () => {
    stopCount();
    setCount(0);
    setMsg("");
    setColorMap({});
    setProgNum(0);
    setCondition({ defaultCondition });
    setQuizArray((quizArray) => shuffle(quizArray));
  };

  const endSession = () => {
    stopCount();
    setCondition((condition) => ({
      ...condition,
      ongoing: false,
      failed: false
    }));
    setQuizArray((quizArray) => shuffle(quizArray));
  };

  const goNextOrEnd = () => {
    let nextProgNum = progNum + 1;
    if (nextProgNum === 50) {
      nextProgNum = 0;
      endSession();
    }
    setProgNum(nextProgNum);
  };

  const onMapClick = (e) => {
    const { ongoing, correctCnt, falseCnt, failed } = condition;
    if (!ongoing) return;

    const guessAbbreviation = e.target.dataset.name;
    if (fillWhenCorrect(guessAbbreviation, failed)) {
      setMsg(`It was ${quizArray[progNum].attributes.name}`);

      if (failed) setCondition({ ...condition, failed: false });
      else {
        setCondition({
          ...condition,
          correctCnt: correctCnt + 1
        });
      }
      goNextOrEnd();
    } else {
      setMsg(`${guessAbbreviation} Not Correct!`);
      if (!failed) {
        setCondition({ ...condition, falseCnt: falseCnt + 1, failed: true });
      }
    }
  };

  const onSkip = () => {
    if (condition.ongoing) {
      fillWhenCorrect(qAbbreviation, true);
      const tmsg = `It was ${quizArray[progNum].attributes.name}`;
      setMsg(tmsg);
      const newFalseCnt = condition.falseCnt + 1;
      setCondition((condition) => ({
        ...condition,
        falseCnt: newFalseCnt,
        failed: false
      }));
      goNextOrEnd();
    }
  };

//   const startHighway = () => {
//     setQuizMode(1);
//     startSession();
//   };

  const startLicense = () => {
    setQuizMode(2);
    startSession();
  };

  return (
    <div>
      <Typography variant="h3">US map</Typography>
      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={4}>
            {condition.ongoing && qAbbreviation ? (
              <MyPaper>
                <BoxButtonSub onClick={resetSession}>Reset</BoxButtonSub>
                <BoxButtonSub2 onClick={onSkip}>Show Answer</BoxButtonSub2>
              </MyPaper>
            ) : (
              <MyPaper>
                <BoxButton onClick={startHighway}>Highway Sign</BoxButton>
                <BoxButton onClick={startLicense}>License Plate</BoxButton>
              </MyPaper>
            )}
          </Grid>
          <Grid xs={4}>
            <MyPaper>
              {condition.ongoing && qAbbreviation ? (
                quizMode === 1 ? (
                  <img
                    // src={`/images/highway/${qAbbreviation}.PNG`}
                    alt="quizImage"
                  />
                ) : quizMode === 2 ? (
                  <img
                    src={`/images/license-plate/${qAbbreviation}.PNG`}
                    alt="quizImage"
                    className="blur"
                  />
                ) : (
                  ""
                )
              ) : (
                "waiting to start"
              )}
            </MyPaper>
          </Grid>
          <Grid xs={4}>
            <MyPaper>
              <Typography>Correct: {condition.correctCnt}</Typography>
              <Typography>Missed: {condition.falseCnt}</Typography>
              <Typography>Time: {count.toFixed(1)} s</Typography>
            </MyPaper>
          </Grid>
        </Grid>
      </Box> */}

      {/* {msg} */}
      <USAMap customize={colorMap} onClick={onMapClick} />
    </div>
  );
}
