import React from "react";
import "./Timer.css"
import {FlipDown }from "flipdown"


function Timer() {


    document.addEventListener('DOMContentLoaded', () => {
        var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;
        var flipdown = new FlipDown(twoDaysFromNow)
          .start()
          .ifEnded(() => {
            console.log('The countdown has ended!');
          });
        
        var ver = document.getElementById('ver');
        ver.innerHTML = flipdown.version;
      });
      

    return (
        <div className="example">
            <h1>FlipDown.js</h1>
            <p>⏰ A lightweight and performant flip styled countdown clock</p>
            <div id="flipdown" className="flipdown"></div>
            <div className="buttons">
                <p>Version: <span id="ver"></span> (&lt;11KB minified)</p>
                <a href="https://github.com/PButcher/flipdown#flipdown" target="_blank" className="button"><i className="fab fa-github"></i> <span>Get started</span></a>
            </div>
        </div>
    )
}

export default Timer;