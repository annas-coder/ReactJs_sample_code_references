import React from "react";
import "./Clock_Function.css";

function Clock_Function() {
    
  return (
    <div class="pomodoro">
  {/* <div class="row">
    <div class="col-md-6">
      <div class="row"><p>session length</p></div>
      <div class="row counter">
        <div class="col-md-4">
          <button class="btn btn-default" id="sessDec">-</button>        
        </div>
        <div class="col-md-2">
          <div id="session"></div>
        </div>
        <div class="col-md-4">
          <button class="btn btn-default" id="sessInc">+</button>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="row"><p>break length</p></div>
      <div class="row counter">
        <div class="col-md-4">
          <button class="btn btn-default" id="breakDec">-</button>
        </div>
        <div class="col-md-2">
          <div id="break"></div>
        </div>
        <div class="col-md-4">
          <button class="btn btn-default" id="breakInc">+</button>        
        </div>
      </div>
    </div>
  </div> */}
    
  <div id="clock" className="row">
    <div className="timer"><div className="middle"></div></div>
  </div>
  {/* <div class="row" id="statRow">
    <div id="stats"></div>
  </div>
  <div class="container">
    <div class="row" id="btns">
      <button class="btn btn-default btn-lg" id="start">start</button>
      <button class="btn btn-default btn-lg" id="stop">stop</button>
      <button class="btn btn-default btn-lg" id="clear">clear</button>
    </div>
  </div> */}
     
</div>

  );
}
export default Clock_Function;
