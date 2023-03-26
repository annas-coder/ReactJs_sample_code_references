import React from 'react';
import $ from 'jquery'; 
import "./NewFlip.css"


export default function NewFlip(props) {
  function flipTo(digit, n){
  var current = digit.attr('data-num');
  digit.attr('data-num', n);
  digit.find('.front').attr('data-content', current);
  digit.find('.back, .under').attr('data-content', n);
  digit.find('.flap').css('display', 'block');
  setTimeout(function(){
    digit.find('.base').text(n);
    digit.find('.flap').css('display', 'none');
  }, 350);
}

function jumpTo(digit, n){
  digit.attr('data-num', n);
  digit.find('.base').text(n);
}

function updateGroup(group, n, flip){
  var digit1 = $('.ten'+group);
  var digit2 = $('.'+group);
  n = String(n);
  if(n.length == 1) n = '0'+n;
  var num1 = n.substr(0, 1);
  var num2 = n.substr(1, 1);
  if(digit1.attr('data-num') !== num1){
    if(flip) flipTo(digit1, num1);
    else jumpTo(digit1, num1);
  }
  if(digit2.attr('data-num') != num2){
    if(flip) flipTo(digit2, num2);
    else jumpTo(digit2, num2);
  }
}

function setTime(flip){

        var Check = new Date("2022-11-25T16:41:20.024832");
      Check = new Date(Check.getTime() + 30 * 60 * 1000);
      Check = new Date(Check).getTime();
        var now = new Date().getTime();
        var distance = Check - now;
    //  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  updateGroup('hour', hours, flip);
  updateGroup('min', minutes, flip);
  updateGroup('sec', seconds, flip);
}

$(document).ready(function(){
  
  setTime(false);
  setInterval(function(){
    setTime(true);
  }, 1000);
  
});
  return (
     <div className="clock">
  <div className="digit tenhour">
    <span className="base"></span>
    <div className="flap over front"></div>
    <div className="flap over back"></div>
    <div className="flap under"></div>
  </div>

  <div className="digit hour">
    <span className="base"></span>
    <div className="flap over front"></div>
    <div className="flap over back"></div>
    <div className="flap under"></div>
  </div>
  <div className="digit tenmin">
    <span className="base"></span>
    <div className="flap over front"></div>
    <div className="flap over back"></div>
    <div className="flap under"></div>
  </div>

  <div className="digit min">
    <span className="base"></span>
    <div className="flap over front"></div>
    <div className="flap over back"></div>
    <div className="flap under"></div>
  </div>
  <div className="digit tensec">
    <span className="base"></span>
    <div className="flap over front"></div>
    <div className="flap over back"></div>
    <div className="flap under"></div>
  </div>

  <div className="digit sec">
    <span className="base"></span>
    <div className="flap over front"></div>
    <div className="flap over back"></div>
    <div className="flap under"></div>
  </div>
  
</div>

  )}