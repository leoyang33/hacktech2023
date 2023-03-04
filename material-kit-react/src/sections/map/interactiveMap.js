import { Avatar, Card, CardContent, CardHeader, rgbToHex, Stack, SvgIcon, Typography } from '@mui/material';
import USAMap from "react-usa-map";
import stateUsageJSON from '../../data/stateUsage.json';
import statesJSON from '../../data/states.json';
import { defaultConfig } from 'next/dist/server/config-shared';


export const InteractiveMap = (props) => {
  const saturation = 0.83;
  const value = 0.86;
  const minH = 0;
  const maxH = 0.33;

  const processData = (stateUsageJSON, statesJSON) => { 
    const stateData = statesJSON.data;
    const stateUsageData = stateUsageJSON.data;
    var finalData = [];

    for (var i in stateUsageData) {
      const matchingState = stateData.find((s) => s.attributes.name == stateUsageData[i].state);
      finalData.push(Object.assign({}, {abb: matchingState.attributes.abbreviation}, stateUsageData[i]));
    }
    return finalData;
  }

  function hsvToRgb(h, s, v){
    var r, g, b;

    var i = Math.floor(h * 6);
    var f = h * 6 - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);

    switch(i % 6){
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  const rgbToHex = (l) => {
    return "#" + componentToHex(l[0]) + componentToHex(l[1]) + componentToHex(l[2]);
  }

  const calculateColors = (processedData, utility) => {
    var min = Number.POSITIVE_INFINITY;
    var max = Number.NEGATIVE_INFINITY;
    
    for (var i in processedData) {
      min = Math.min(min, processedData[i][utility])
      max = Math.max(max, processedData[i][utility])
    }

    var toReturn = {}
    
    for (var i in processedData) {
      const v = processedData[i][utility];
      const h = (1 - ((v - min) / (max - min))) * (maxH - minH) + minH;  
      const rgb = hsvToRgb(h, saturation, value);   
      toReturn[processedData[i].abb] = {fill: rgbToHex(rgb)}
    }
    return toReturn;
  } 

  const processedData = processData(stateUsageJSON, statesJSON);

  return (
    <Card sx={10}>
      <CardContent>
        <CardHeader title={"Interactive Map"}/>
        <USAMap customize={calculateColors(processedData, "electric")}></USAMap>
      </CardContent>
    </Card>
  );
};
