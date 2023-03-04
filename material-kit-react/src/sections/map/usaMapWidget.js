import React, { useEffect, useState, useRef, useCallback } from "react";
import USAMap from "react-usa-map";

import { format } from 'date-fns';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { SeverityPill } from 'src/components/severity-pill';

const statusMap = {
  pending: 'warning',
  delivered: 'success',
  refunded: 'error'
};

export const USAMapWidget = (props) => {
  const { orders = [], sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="USA usage map" />
    </Card>
  );
};

// OverviewLatestOrders.prototype = {
//   orders: PropTypes.array,
//   sx: PropTypes.object
// };


// export default function Map() {
//   const states = statesJson.data;
//   const defaultCondition = {
//     ongoing: false,
//     correctCnt: 0,
//     falseCnt: 0,
//     failed: false
//   };
//   const [condition, setCondition] = useState(defaultCondition);
//   const [quizArray, setQuizArray] = useState(states);
//   const [msg, setMsg] = useState("");
//   const [qAbbreviation, setqAbbreviation] = useState(null);
//   const [colorMap, setColorMap] = useState({});
//   const [progNum, setProgNum] = useState(0);
//   const [count, setCount] = useState(0);
//   const [quizMode, setQuizMode] = useState(null);

//   const shuffle = ([...array]) => {
//     for (let i = array.length - 1; i >= 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   };

//   const intervalRef = useRef(null);
//   const startCount = useCallback(() => {
//     if (intervalRef.current !== null) {
//       return;
//     }
//     intervalRef.current = setInterval(() => {
//       setCount((c) => c + 0.1);
//     }, 100);
//   }, []);
//   const stopCount = useCallback(() => {
//     if (intervalRef.current === null) {
//       return;
//     }
//     clearInterval(intervalRef.current);
//     intervalRef.current = null;
//   }, []);

//   useEffect(() => {
//     setQuizArray((quizArray) => shuffle(quizArray));
//   }, []);

//   useEffect(() => {
//     setqAbbreviation(quizArray[progNum].attributes.abbreviation);
//   }, [quizArray, progNum]);

//   const fillWhenCorrect = (guess, failed) => {
//     let fillColor = "#2ECC71";
//     if (failed) fillColor = "#F4D03F";

//     let correct = false;
//     let newColorMap = colorMap;

//     if (quizMode === 1) {
//     //   highwayGroup.forEach((group) => {
//     //     if (group.includes(guess)) {
//     //       if (group.includes(qAbbreviation)) {
//     //         correct = true;
//     //         group.forEach((st) => {
//     //           newColorMap[st] = { fill: fillColor };
//     //         });
//     //       }
//     //     }
//     //   });
//     }

//     if (!correct) {
//       if (guess === qAbbreviation) {
//         correct = true;
//         newColorMap[guess] = { fill: fillColor };
//       }
//     }
//     setColorMap(newColorMap);

//     return correct;
//   };

//   const startSession = () => {
//     stopCount();
//     setCount(0);
//     setMsg("");
//     setColorMap({});
//     setProgNum(0);
//     setCondition({ ...defaultCondition, ongoing: true });
//     startCount();
//   };

//   const resetSession = () => {
//     stopCount();
//     setCount(0);
//     setMsg("");
//     setColorMap({});
//     setProgNum(0);
//     setCondition({ defaultCondition });
//     setQuizArray((quizArray) => shuffle(quizArray));
//   };

//   const endSession = () => {
//     stopCount();
//     setCondition((condition) => ({
//       ...condition,
//       ongoing: false,
//       failed: false
//     }));
//     setQuizArray((quizArray) => shuffle(quizArray));
//   };

//   const goNextOrEnd = () => {
//     let nextProgNum = progNum + 1;
//     if (nextProgNum === 50) {
//       nextProgNum = 0;
//       endSession();
//     }
//     setProgNum(nextProgNum);
//   };

//   const onMapClick = (e) => {
//     const { ongoing, correctCnt, falseCnt, failed } = condition;
//     if (!ongoing) return;

//     const guessAbbreviation = e.target.dataset.name;
//     if (fillWhenCorrect(guessAbbreviation, failed)) {
//       setMsg(`It was ${quizArray[progNum].attributes.name}`);

//       if (failed) setCondition({ ...condition, failed: false });
//       else {
//         setCondition({
//           ...condition,
//           correctCnt: correctCnt + 1
//         });
//       }
//       goNextOrEnd();
//     } else {
//       setMsg(`${guessAbbreviation} Not Correct!`);
//       if (!failed) {
//         setCondition({ ...condition, falseCnt: falseCnt + 1, failed: true });
//       }
//     }
//   };

//   const onSkip = () => {
//     if (condition.ongoing) {
//       fillWhenCorrect(qAbbreviation, true);
//       const tmsg = `It was ${quizArray[progNum].attributes.name}`;
//       setMsg(tmsg);
//       const newFalseCnt = condition.falseCnt + 1;
//       setCondition((condition) => ({
//         ...condition,
//         falseCnt: newFalseCnt,
//         failed: false
//       }));
//       goNextOrEnd();
//     }
//   };

// //   const startHighway = () => {
// //     setQuizMode(1);
// //     startSession();
// //   };

//   const startLicense = () => {
//     setQuizMode(2);
//     startSession();
//   };

//   return (
//     <div>
//       <Typography variant="h3">US map</Typography>
//       {/* <Box sx={{ flexGrow: 1 }}>
//         <Grid container spacing={2}>
//           <Grid xs={4}>
//             {condition.ongoing && qAbbreviation ? (
//               <MyPaper>
//                 <BoxButtonSub onClick={resetSession}>Reset</BoxButtonSub>
//                 <BoxButtonSub2 onClick={onSkip}>Show Answer</BoxButtonSub2>
//               </MyPaper>
//             ) : (
//               <MyPaper>
//                 <BoxButton onClick={startHighway}>Highway Sign</BoxButton>
//                 <BoxButton onClick={startLicense}>License Plate</BoxButton>
//               </MyPaper>
//             )}
//           </Grid>
//           <Grid xs={4}>
//             <MyPaper>
//               {condition.ongoing && qAbbreviation ? (
//                 quizMode === 1 ? (
//                   <img
//                     // src={`/images/highway/${qAbbreviation}.PNG`}
//                     alt="quizImage"
//                   />
//                 ) : quizMode === 2 ? (
//                   <img
//                     src={`/images/license-plate/${qAbbreviation}.PNG`}
//                     alt="quizImage"
//                     className="blur"
//                   />
//                 ) : (
//                   ""
//                 )
//               ) : (
//                 "waiting to start"
//               )}
//             </MyPaper>
//           </Grid>
//           <Grid xs={4}>
//             <MyPaper>
//               <Typography>Correct: {condition.correctCnt}</Typography>
//               <Typography>Missed: {condition.falseCnt}</Typography>
//               <Typography>Time: {count.toFixed(1)} s</Typography>
//             </MyPaper>
//           </Grid>
//         </Grid>
//       </Box> */}

//       <USAMap customize={colorMap} onClick={onMapClick} />
//     </div>
//   );
// }
