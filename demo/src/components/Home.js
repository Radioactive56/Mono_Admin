import React from 'react';
import Navbar from './Navbar';
import Areachart from './Areachart';
import Linechart from './Linechart';

export default function Home() {
    const items=[
        {text:"Manav Dhruve"},
        {text:"md@tcs.com"}
      ];
  return (
    <div>
    <Navbar title="ISAE ADMIN"/>
    <Areachart/>
    <Linechart/>
    </div>
  )
}
