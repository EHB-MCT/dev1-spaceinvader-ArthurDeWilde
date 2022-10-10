"use strict";

drawSpaceInvader();

function drawSpaceInvader() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.fillStyle = "#fffff";
    context.fillRect(0, 0, 300, 300);

    context.fillStyle = "#39FF14";
    context.fillRect(125, 30, 50, 50);
    context.fillRect(75, 80, 50, 50); /*(x,y,lengte,hoogte)*/
    context.fillRect(25, 130, 100, 50);
    context.fillRect(175, 80, 50, 50);
    context.fillRect(175, 130, 100, 50);
    context.fillRect(25, 180, 250, 50);
}