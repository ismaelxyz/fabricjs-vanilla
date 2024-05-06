import * as fabric from "fabric";

const CANVAS = new fabric.Canvas("whiteboard");


const rect = new fabric.Rect({
    left: 100,
    top: 100,
    width: 100,
    height: 100,
    fill: "coral"
});

const textContainer = new fabric.Rect({
	left: rect.left,
	top: rect.top - 30,
	fill: 'black',
    borderColor: 'black',
	width: rect.width,
	height: 20,
	rx: 1,
	ry: 1.5,
	angle: 0,
	hasControls: true
});

const triangle = new fabric.Triangle({
    left: textContainer.left + textContainer.width / 2,
    top: textContainer.top + textContainer.height + 5,
    width: 10,
    height: 8,
    fill: 'black',
    angle: 180,
    originX: "center",
    originY: "center",
    borderColor: 'transparent',
});


let text = new fabric.FabricText("Name", {
    fontFamily: "Arial",
    fill: "white",
    fontSize: 10,
    left: textContainer.left + textContainer.width / 2,
    top: textContainer.top + textContainer.height / 2,
    originX: "center",
    originY: "center"
});

let group = new fabric.Group([textContainer, triangle, rect, text], {
    left: 0,
    top: 0,
    transparentCorners: false,
    hasControls: false
});

CANVAS.add(group);
