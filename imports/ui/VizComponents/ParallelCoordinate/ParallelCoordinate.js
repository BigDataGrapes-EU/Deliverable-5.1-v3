import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import 'react-vis/dist/style.css';

import { ParallelCoordinates } from 'react-vis';
import { Card, Icon } from 'antd';

// App component - represents the whole app
class ParallelCoordinate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      size: "small",
      icon: "fullscreen"
    };
  }

  changeCardSize() {
    if(this.state.size == "small" ) {
      this.setState({ size: "large", icon: "fullscreen-exit"});
    } else {
      this.setState({ size: "small", icon: "fullscreen"});
    }
    // if(this.state.size == "medium") style = { gridColumn: "span 2", gridRow: "span 1" };
  }

  render() {
    const data = [
      {
        "soilType": "sandySilty",
        "varietyCode": 300,
        "olfactory_candy": 0.6,
        "olfactory_fruity": 0.4,
        "taste_acid": 0.57,
        "taste_astringent": 0.25,
        "taste_balanced": 0.5,
        "taste_bitterness": 0.165,
        "taste_dilute": 0,
        "taste_fat": 0,
        "taste_persistent": 1,
        "taste_sweetness": 0.25
      },
      {
        "soilType": "sandySilty",
        "varietyCode": 300,
        "olfactory_candy": 0.8,
        "olfactory_fruity": 0.6,
        "taste_acid": 0.43,
        "taste_astringent": 0.125,
        "taste_balanced": 0.5,
        "taste_bitterness": 0.25,
        "taste_dilute": 0,
        "taste_fat": 0.5,
        "taste_persistent": 0,
        "taste_sweetness": 1
      },
      {
        "soilType": "sandySilty",
        "varietyCode": 300,
        "olfactory_candy": 0.6,
        "olfactory_fruity": 0.6,
        "taste_acid": 0.71,
        "taste_astringent": 0.875,
        "taste_balanced": 0.25,
        "taste_bitterness": 0.335,
        "taste_dilute": 0,
        "taste_fat": 0.25,
        "taste_persistent": 0,
        "taste_sweetness": 0
      },
      {
        "soilType": "sandySilty",
        "varietyCode": 300,
        "olfactory_candy": 0,
        "olfactory_fruity": 0.4,
        "taste_acid": 0.14,
        "taste_astringent": 0,
        "taste_balanced": 0.5,
        "taste_bitterness": 0.665,
        "taste_dilute": 1,
        "taste_fat": 0.5,
        "taste_persistent": 0,
        "taste_sweetness": 0
      },
      {
        "soilType": "sandySilty",
        "varietyCode": 300,
        "olfactory_candy": 0.4,
        "olfactory_fruity": 0.4,
        "taste_acid": 0.14,
        "taste_astringent": 0.25,
        "taste_balanced": 0.25,
        "taste_bitterness": 0.085,
        "taste_dilute": 1,
        "taste_fat": 0.5,
        "taste_persistent": 0,
        "taste_sweetness": 0.25
      },
      {
        "soilType": "sandySilty",
        "varietyCode": 189,
        "olfactory_candy": 0,
        "olfactory_fruity": 0,
        "taste_acid": 0.435,
        "taste_astringent": 0,
        "taste_balanced": 0.6,
        "taste_bitterness": 0.07,
        "taste_dilute": 0,
        "taste_fat": 0,
        "taste_persistent": 0.5,
        "taste_sweetness": 0.33
      },
      {
        "soilType": "sandySilty",
        "varietyCode": 189,
        "olfactory_candy": 0.67,
        "olfactory_fruity": 0.29,
        "taste_acid": 0.265,
        "taste_astringent": 1,
        "taste_balanced": 0.4,
        "taste_bitterness": 0.62,
        "taste_dilute": 0,
        "taste_fat": 0,
        "taste_persistent": 0.5,
        "taste_sweetness": 0.33
      },
      {
        "soilType": "sandySilty",
        "varietyCode": 189,
        "olfactory_candy": 0.33,
        "olfactory_fruity": 0.43,
        "taste_acid": 0.3,
        "taste_astringent": 0,
        "taste_balanced": 0.4,
        "taste_bitterness": 0.285,
        "taste_dilute": 0,
        "taste_fat": 0.6,
        "taste_persistent": 0.75,
        "taste_sweetness": 0
      },
      {
        "soilType": "sandySilty",
        "varietyCode": 189,
        "olfactory_candy": 0.33,
        "olfactory_fruity": 0.71,
        "taste_acid": 0.3,
        "taste_astringent": 1,
        "taste_balanced": 0.8,
        "taste_bitterness": 0.235,
        "taste_dilute": 0.5,
        "taste_fat": 0.6,
        "taste_persistent": 0.5,
        "taste_sweetness": 0
      },
      {
        "soilType": "sandySilty",
        "varietyCode": 189,
        "olfactory_candy": 0.67,
        "olfactory_fruity": 0.14,
        "taste_acid": 0.465,
        "taste_astringent": 0,
        "taste_balanced": 0.4,
        "taste_bitterness": 0.07,
        "taste_dilute": 1,
        "taste_fat": 0.4,
        "taste_persistent": 0.5,
        "taste_sweetness": 0.33
      },
      {
        "soilType": "sandySilty",
        "varietyCode": 189,
        "olfactory_candy": 0.5,
        "olfactory_fruity": 0.29,
        "taste_acid": 0.125,
        "taste_astringent": 0,
        "taste_balanced": 0.17,
        "taste_bitterness": 0.25,
        "taste_dilute": 0.5,
        "taste_fat": 0.2,
        "taste_persistent": 0.33,
        "taste_sweetness": 0
      },
      {
        "soilType": "sandySilty",
        "varietyCode": 189,
        "olfactory_candy": 0,
        "olfactory_fruity": 0.57,
        "taste_acid": 0,
        "taste_astringent": 0,
        "taste_balanced": 0.17,
        "taste_bitterness": 0.75,
        "taste_dilute": 0.25,
        "taste_fat": 0.8,
        "taste_persistent": 0.33,
        "taste_sweetness": 0.67
      },
      {
        "soilType": "sandySilty",
        "varietyCode": 189,
        "olfactory_candy": 0,
        "olfactory_fruity": 0.43,
        "taste_acid": 0.375,
        "taste_astringent": 0,
        "taste_balanced": 0.5,
        "taste_bitterness": 0.125,
        "taste_dilute": 0.5,
        "taste_fat": 0.2,
        "taste_persistent": 0.33,
        "taste_sweetness": 0
      },
      {
        "soilType": "sandySilty",
        "varietyCode": 189,
        "olfactory_candy": 0.25,
        "olfactory_fruity": 0.14,
        "taste_acid": 0.75,
        "taste_astringent": 1,
        "taste_balanced": 0.17,
        "taste_bitterness": 0.375,
        "taste_dilute": 0.25,
        "taste_fat": 0.2,
        "taste_persistent": 0.33,
        "taste_sweetness": 0
      },
      {
        "soilType": "sandySilty",
        "varietyCode": 189,
        "olfactory_candy": 0.25,
        "olfactory_fruity": 0.29,
        "taste_acid": 0.375,
        "taste_astringent": 0,
        "taste_balanced": 0.5,
        "taste_bitterness": 0.375,
        "taste_dilute": 0.5,
        "taste_fat": 0.4,
        "taste_persistent": 0.33,
        "taste_sweetness": 0.67
      },
      {
        "soilType": "sandySilty",
        "varietyCode": 6727,
        "olfactory_candy": 0,
        "olfactory_fruity": 0,
        "taste_acid": 0.335,
        "taste_astringent": 0,
        "taste_balanced": 0.14,
        "taste_bitterness": 0,
        "taste_dilute": 0,
        "taste_fat": 0,
        "taste_persistent": 0,
        "taste_sweetness": 0
      },
      {
        "soilType": "sandySilty",
        "varietyCode": 6721,
        "olfactory_candy": 0,
        "olfactory_fruity": 0,
        "taste_acid": 0.585,
        "taste_astringent": 0,
        "taste_balanced": 0.14,
        "taste_bitterness": 0,
        "taste_dilute": 0.5,
        "taste_fat": 0,
        "taste_persistent": 0,
        "taste_sweetness": 0
      },
      {
        "soilType": "sandySiltyClay",
        "varietyCode": 6853,
        "olfactory_candy": 0,
        "olfactory_fruity": 0.29,
        "taste_acid": 0.085,
        "taste_astringent": 1,
        "taste_balanced": 0.14,
        "taste_bitterness": 0.5,
        "taste_dilute": 0.75,
        "taste_fat": 0,
        "taste_persistent": 0,
        "taste_sweetness": 0
      },
      {
        "soilType": "sandySiltyClay",
        "varietyCode": 18,
        "olfactory_candy": 0,
        "olfactory_fruity": 0,
        "taste_acid": 0,
        "taste_astringent": 0.67,
        "taste_balanced": 0.5,
        "taste_bitterness": 0.125,
        "taste_dilute": 0.25,
        "taste_fat": 0.33,
        "taste_persistent": 1,
        "taste_sweetness": 0
      },
      {
        "soilType": "sandySiltyClay",
        "varietyCode": 18,
        "olfactory_candy": 0,
        "olfactory_fruity": 0,
        "taste_acid": 0.125,
        "taste_astringent": 0.67,
        "taste_balanced": 0.5,
        "taste_bitterness": 0.125,
        "taste_dilute": 0.25,
        "taste_fat": 0.33,
        "taste_persistent": 1,
        "taste_sweetness": 1
      },
      {
        "soilType": "sandySiltyClay",
        "varietyCode": 18,
        "olfactory_candy": 0,
        "olfactory_fruity": 0,
        "taste_acid": 0.5,
        "taste_astringent": 0,
        "taste_balanced": 0.17,
        "taste_bitterness": 0.625,
        "taste_dilute": 0,
        "taste_fat": 0,
        "taste_persistent": 0,
        "taste_sweetness": 1
      },
      {
        "soilType": "sandySiltyClay",
        "varietyCode": 18,
        "olfactory_candy": 0,
        "olfactory_fruity": 0,
        "taste_acid": 0.375,
        "taste_astringent": 0,
        "taste_balanced": 0.17,
        "taste_bitterness": 0.125,
        "taste_dilute": 0.5,
        "taste_fat": 0.33,
        "taste_persistent": 0,
        "taste_sweetness": 0
      },
      {
        "soilType": "sandySiltyClay",
        "varietyCode": 18,
        "olfactory_candy": 1,
        "olfactory_fruity": 1,
        "taste_acid": 0,
        "taste_astringent": 0.33,
        "taste_balanced": 0.5,
        "taste_bitterness": 0.25,
        "taste_dilute": 0,
        "taste_fat": 0.67,
        "taste_persistent": 0,
        "taste_sweetness": 1
      },
      {
        "soilType": "sandySiltyClay",
        "varietyCode": 46,
        "olfactory_candy": 0,
        "olfactory_fruity": 0.2,
        "taste_acid": 0.57,
        "taste_astringent": 0,
        "taste_balanced": 0.33,
        "taste_bitterness": 0,
        "taste_dilute": 0.5,
        "taste_fat": 0.5,
        "taste_persistent": 1,
        "taste_sweetness": 1
      },
      {
        "soilType": "sandySiltyClay",
        "varietyCode": 46,
        "olfactory_candy": 0.33,
        "olfactory_fruity": 0.6,
        "taste_acid": 0.43,
        "taste_astringent": 0.67,
        "taste_balanced": 0.33,
        "taste_bitterness": 0.5,
        "taste_dilute": 0.5,
        "taste_fat": 0,
        "taste_persistent": 0.5,
        "taste_sweetness": 0
      },
      {
        "soilType": "sandySiltyClay",
        "varietyCode": 46,
        "olfactory_candy": 0,
        "olfactory_fruity": 0.5,
        "taste_acid": 1,
        "taste_astringent": 0.67,
        "taste_balanced": 0.67,
        "taste_bitterness": 0,
        "taste_dilute": 0,
        "taste_fat": 0.4,
        "taste_persistent": 0.33,
        "taste_sweetness": 0.5
      },
      {
        "soilType": "sandySiltyClay",
        "varietyCode": 46,
        "olfactory_candy": 0,
        "olfactory_fruity": 0.17,
        "taste_acid": 0.5,
        "taste_astringent": 0.33,
        "taste_balanced": 0,
        "taste_bitterness": 0.665,
        "taste_dilute": 1,
        "taste_fat": 0,
        "taste_persistent": 0.33,
        "taste_sweetness": 0
      },
      {
        "soilType": "sandySiltyClay",
        "varietyCode": 46,
        "olfactory_candy": 0.67,
        "olfactory_fruity": 0.4,
        "taste_acid": 0.29,
        "taste_astringent": 0.33,
        "taste_balanced": 0.33,
        "taste_bitterness": 0.25,
        "taste_dilute": 1,
        "taste_fat": 0,
        "taste_persistent": 0.5,
        "taste_sweetness": 1
      },
      {
        "soilType": "sandySiltyClay",
        "varietyCode": 46,
        "olfactory_candy": 0,
        "olfactory_fruity": 0.2,
        "taste_acid": 0.43,
        "taste_astringent": 0.33,
        "taste_balanced": 0.67,
        "taste_bitterness": 0.75,
        "taste_dilute": 0,
        "taste_fat": 1,
        "taste_persistent": 0.5,
        "taste_sweetness": 0
      },
      {
        "soilType": "sandySiltyClay",
        "varietyCode": 46,
        "olfactory_candy": 0,
        "olfactory_fruity": 0.33,
        "taste_acid": 0.5,
        "taste_astringent": 0,
        "taste_balanced": 0.67,
        "taste_bitterness": 0.5,
        "taste_dilute": 0,
        "taste_fat": 0.8,
        "taste_persistent": 0,
        "taste_sweetness": 0
      },
      {
        "soilType": "sandySiltyClay",
        "varietyCode": 46,
        "olfactory_candy": 1,
        "olfactory_fruity": 0.17,
        "taste_acid": 0.5,
        "taste_astringent": 0,
        "taste_balanced": 0.33,
        "taste_bitterness": 0.5,
        "taste_dilute": 0,
        "taste_fat": 0.4,
        "taste_persistent": 0.67,
        "taste_sweetness": 0.5
      },
      {
        "soilType": "sandySiltyClay",
        "varietyCode": 199,
        "olfactory_candy": 0.8,
        "olfactory_fruity": 0.67,
        "taste_acid": 0,
        "taste_astringent": 0,
        "taste_balanced": 0.6,
        "taste_bitterness": 0.625,
        "taste_dilute": 0,
        "taste_fat": 0.8,
        "taste_persistent": 0,
        "taste_sweetness": 1
      },
      {
        "soilType": "sandySiltyClay",
        "varietyCode": 199,
        "olfactory_candy": 0.2,
        "olfactory_fruity": 0,
        "taste_acid": 0.6,
        "taste_astringent": 0.835,
        "taste_balanced": 0,
        "taste_bitterness": 0.5,
        "taste_dilute": 0,
        "taste_fat": 0,
        "taste_persistent": 0,
        "taste_sweetness": 0
      },
      {
        "soilType": "sandySiltyClay",
        "varietyCode": 199,
        "olfactory_candy": 0.2,
        "olfactory_fruity": 0.33,
        "taste_acid": 0.4,
        "taste_astringent": 0.165,
        "taste_balanced": 0.6,
        "taste_bitterness": 0,
        "taste_dilute": 0,
        "taste_fat": 0.4,
        "taste_persistent": 1,
        "taste_sweetness": 0
      },
      {
        "soilType": "sandySiltyClay",
        "varietyCode": 199,
        "olfactory_candy": 0.2,
        "olfactory_fruity": 0.33,
        "taste_acid": 0.4,
        "taste_astringent": 0,
        "taste_balanced": 0.4,
        "taste_bitterness": 0.25,
        "taste_dilute": 1,
        "taste_fat": 0.6,
        "taste_persistent": 0,
        "taste_sweetness": 0.33
      },
      {
        "soilType": "sandySiltyClay",
        "varietyCode": 6908,
        "olfactory_candy": 0,
        "olfactory_fruity": 0.2,
        "taste_acid": 0.165,
        "taste_astringent": 0.31,
        "taste_balanced": 0.5,
        "taste_bitterness": 0.33,
        "taste_dilute": 1,
        "taste_fat": 0.33,
        "taste_persistent": 0.25,
        "taste_sweetness": 0
      },
      {
        "soilType": "sandySiltyClay",
        "varietyCode": 6909,
        "olfactory_candy": 1,
        "olfactory_fruity": 0,
        "taste_acid": 0.5,
        "taste_astringent": 0.62,
        "taste_balanced": 0,
        "taste_bitterness": 0.33,
        "taste_dilute": 0,
        "taste_fat": 0.33,
        "taste_persistent": 0.5,
        "taste_sweetness": 1
      },
      {
        "soilType": "sandySiltyClay",
        "varietyCode": 6910,
        "olfactory_candy": 0,
        "olfactory_fruity": 0,
        "taste_acid": 0.165,
        "taste_astringent": 0.45,
        "taste_balanced": 0.5,
        "taste_bitterness": 0.33,
        "taste_dilute": 0,
        "taste_fat": 0.33,
        "taste_persistent": 0.5,
        "taste_sweetness": 0.5
      },
      {
        "soilType": "sandySiltyClay",
        "varietyCode": 6917,
        "olfactory_candy": 0,
        "olfactory_fruity": 0,
        "taste_acid": 0.165,
        "taste_astringent": 1,
        "taste_balanced": 0,
        "taste_bitterness": 0.665,
        "taste_dilute": 1,
        "taste_fat": 0,
        "taste_persistent": 0,
        "taste_sweetness": 0
      },
      {
        "soilType": "sandySiltyClay",
        "varietyCode": 6911,
        "olfactory_candy": 0.5,
        "olfactory_fruity": 0.5,
        "taste_acid": 0.6,
        "taste_astringent": 0.165,
        "taste_balanced": 1,
        "taste_bitterness": 0.71,
        "taste_dilute": 0.5,
        "taste_fat": 0.33,
        "taste_persistent": 0,
        "taste_sweetness": 0
      },
      {
        "soilType": "sandySiltyClay",
        "varietyCode": 6919,
        "olfactory_candy": 0,
        "olfactory_fruity": 1,
        "taste_acid": 0.8,
        "taste_astringent": 0.165,
        "taste_balanced": 0,
        "taste_bitterness": 0,
        "taste_dilute": 0,
        "taste_fat": 0.33,
        "taste_persistent": 0,
        "taste_sweetness": 1
      },
      {
        "soilType": "sandySiltyClay",
        "varietyCode": 6921,
        "olfactory_candy": 0.25,
        "olfactory_fruity": 0.5,
        "taste_acid": 0.7,
        "taste_astringent": 0,
        "taste_balanced": 0.5,
        "taste_bitterness": 0.29,
        "taste_dilute": 0.5,
        "taste_fat": 0.33,
        "taste_persistent": 0,
        "taste_sweetness": 0
      },
      {
        "soilType": "siltyClay",
        "varietyCode": 6748,
        "olfactory_candy": 1,
        "olfactory_fruity": 1,
        "taste_acid": 0.165,
        "taste_astringent": 0,
        "taste_balanced": 1,
        "taste_bitterness": 0.25,
        "taste_dilute": 0,
        "taste_fat": 0.67,
        "taste_persistent": 0.5,
        "taste_sweetness": 1
      },
      {
        "soilType": "siltyClay",
        "varietyCode": 6851,
        "olfactory_candy": 0,
        "olfactory_fruity": 0.5,
        "taste_acid": 1,
        "taste_astringent": 1,
        "taste_balanced": 0,
        "taste_bitterness": 0.6,
        "taste_dilute": 0,
        "taste_fat": 0,
        "taste_persistent": 1,
        "taste_sweetness": 0
      },
      {
        "soilType": "siltyClay",
        "varietyCode": 6853,
        "olfactory_candy": 0,
        "olfactory_fruity": 0.33,
        "taste_acid": 0.33,
        "taste_astringent": 0.7,
        "taste_balanced": 0.67,
        "taste_bitterness": 0.25,
        "taste_dilute": 1,
        "taste_fat": 0,
        "taste_persistent": 0.5,
        "taste_sweetness": 0
      },
      {
        "soilType": "siltyClay",
        "varietyCode": 6851,
        "olfactory_candy": 1,
        "olfactory_fruity": 0,
        "taste_acid": 0,
        "taste_astringent": 0,
        "taste_balanced": 1,
        "taste_bitterness": 0.1,
        "taste_dilute": 1,
        "taste_fat": 1,
        "taste_persistent": 0,
        "taste_sweetness": 1
      },
      {
        "soilType": "siltyClay",
        "varietyCode": 6851,
        "olfactory_candy": 1,
        "olfactory_fruity": 0.71,
        "taste_acid": 0.25,
        "taste_astringent": 0,
        "taste_balanced": 0.57,
        "taste_bitterness": 0,
        "taste_dilute": 0,
        "taste_fat": 0.5,
        "taste_persistent": 1,
        "taste_sweetness": 0.5
      },
      {
        "soilType": "siltyClay",
        "varietyCode": 6851,
        "olfactory_candy": 0,
        "olfactory_fruity": 0.5,
        "taste_acid": 0,
        "taste_astringent": 0.8,
        "taste_balanced": 0,
        "taste_bitterness": 0.8,
        "taste_dilute": 0,
        "taste_fat": 0,
        "taste_persistent": 0.5,
        "taste_sweetness": 0.33
      },
      {
        "soilType": "siltyClay",
        "varietyCode": 6853,
        "olfactory_candy": 0.5,
        "olfactory_fruity": 1,
        "taste_acid": 0,
        "taste_astringent": 0.5,
        "taste_balanced": 0.67,
        "taste_bitterness": 0.25,
        "taste_dilute": 0,
        "taste_fat": 1,
        "taste_persistent": 0.5,
        "taste_sweetness": 0.33
      },
      {
        "soilType": "siltyClay",
        "varietyCode": 6853,
        "olfactory_candy": 0,
        "olfactory_fruity": 0,
        "taste_acid": 0.67,
        "taste_astringent": 0.6,
        "taste_balanced": 0,
        "taste_bitterness": 0.25,
        "taste_dilute": 0,
        "taste_fat": 0,
        "taste_persistent": 0,
        "taste_sweetness": 0
      },
      {
        "soilType": "siltyClay",
        "varietyCode": 6853,
        "olfactory_candy": 1,
        "olfactory_fruity": 0.33,
        "taste_acid": 0,
        "taste_astringent": 0.4,
        "taste_balanced": 0.33,
        "taste_bitterness": 1,
        "taste_dilute": 0,
        "taste_fat": 0,
        "taste_persistent": 1,
        "taste_sweetness": 1
      },
      {
        "soilType": "siltyClay",
        "varietyCode": 6853,
        "olfactory_candy": 0,
        "olfactory_fruity": 0,
        "taste_acid": 0.33,
        "taste_astringent": 0.6,
        "taste_balanced": 0.33,
        "taste_bitterness": 1,
        "taste_dilute": 0,
        "taste_fat": 0,
        "taste_persistent": 0,
        "taste_sweetness": 0
      }
    ] 

    const SOIL_COLORS = {
      sandySilty: '#1f77b4',
      sandySiltyClay: '#ff7f0e',
      siltyClay: '#2ca02c'
    };

    let style = { gridColumn: "span 1", gridRow: "span 1" };
    let margin = {left: 10, right: 10, top: 40, bottom: 10};
    let width = 400 - margin.left - margin.right;
    let height = 400 - margin.top - margin.bottom;
    if(this.state.size == "small") 
      { 
        style = { gridColumn: "span 1", gridRow: "span 1" };
        margin = {left: 10, right: 10, top: 40, bottom: 10}; 
        width = 400 - margin.left - margin.right;
        height = 400 - margin.top - margin.bottom;
        
      } else 
      {
        style = { gridColumn: "span 2", gridRow: "span 2" }; 
        margin = {left: 10, right: 10, top: 80, bottom: 10};
        width = 800 - margin.left - margin.right;
        height = 800 - margin.top - margin.bottom;
      }
    return(
      <Card className="viz-container" size="small" title={this.props.title} extra={<Icon onClick={(e) => this.changeCardSize()} type={this.state.icon} />} style={style}>
      <ParallelCoordinates
      data={data.map(d => ({...d, color: SOIL_COLORS[d.soilType]}))}
      margin = {margin}
      width  = {width}
      height = {height}
      domains={[
        {name: 'Candy (Olf.)',   domain: [0, 1], getValue: d => d.olfactory_candy},
        {name: 'Fruity (Olf.)',  domain: [0, 1], getValue: d => d.olfactory_fruity},  
        {name: 'Acid',        domain: [0, 1], getValue: d => d.taste_acid},
        {name: 'Astringent',  domain: [0, 1], getValue: d => d.taste_astringent}, 
        {name: 'Balanced',    domain: [0, 1], getValue: d => d.taste_balanced},
        {name: 'Bitterness',  domain: [0, 1], getValue: d => d.taste_bitterness},  
        {name: 'Dilute',      domain: [0, 1], getValue: d => d.taste_dilute}, 
        {name: 'Fat',         domain: [0, 1], getValue: d => d.taste_fat},
        {name: 'Persistent',  domain: [0, 1], getValue: d => d.taste_persistent},  
        {name: 'Sweetness',   domain: [0, 1], getValue: d => d.taste_sweetness},
      ]}
      brushing
      animation
      />
      </Card>
    );

  } // end of render
} // end of class

export default withTracker((props) => {
  return {

  };
})(ParallelCoordinate);
