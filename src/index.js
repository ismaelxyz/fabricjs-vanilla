import * as fabric from "fabric";
import imageRaw from "./alarm.png";

const CANVAS = new fabric.Canvas("whiteboard", {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
});

function generateLineGroup() {
    const line1 = new fabric.Line([0, CANVAS.height / 2, CANVAS.width / 5, CANVAS.height / 2], {
        stroke: 'black',
        strokeWidth: 5,
    });

    const line2 = new fabric.Line([CANVAS.width / 5, CANVAS.height / 2, (2 * CANVAS.width) / 5, CANVAS.height / 2], {
        stroke: 'gray',
        strokeWidth: 5,
    });

    const line3 = new fabric.Line([(2 * CANVAS.width) / 5, CANVAS.height / 2, (3 * CANVAS.width) / 5, CANVAS.height / 2], {
        stroke: 'lightgray',
        strokeWidth: 5,
    });

    const line4 = new fabric.Line([(3 * CANVAS.width) / 5, CANVAS.height / 2, (4 * CANVAS.width) / 5, CANVAS.height / 2], {
        stroke: 'whitesmoke',
        strokeWidth: 5,
    });

    const line5 = new fabric.Line([(4 * CANVAS.width) / 5, CANVAS.height / 2, CANVAS.width, CANVAS.height / 2], {
        stroke: 'white',
        strokeWidth: 5,
    });

    return new fabric.Group([line1, line2, line3, line4, line5], {
        left: 0,
        top: CANVAS.height / 2,
        transparentCorners: false,
        hasControls: false
    });
}

async function generateImageGroup() {
    const rect = new fabric.Rect({
        left: 100,
        top: 100,
        width: 80,
        height: 80,
        rx: 15,
        ry: 15,
        fill: "white",
        shadow: 'rgba(0,5,0,0.9) 0px 5px 7px'
    });


    const image = await fabric.FabricImage.fromURL(imageRaw);
    image.scale(0.1);
    image.set({
        left: rect.left + rect.width / 2,
        top: rect.top + rect.height / 2,
        originX: "center",
        originY: "center",
        fill: "blue",
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


    const text = new fabric.FabricText("Name", {
        fontFamily: "Arial",
        fill: "white",
        fontSize: 10,
        left: textContainer.left + textContainer.width / 2,
        top: textContainer.top + textContainer.height / 2,
        originX: "center",
        originY: "center"
    });



    return new fabric.Group([textContainer, triangle, text, rect, image], {
        left: 0,
        top: 0,
        transparentCorners: false,
        hasControls: false
    });

}

async function main() {
    let widgets = [await generateImageGroup(), generateLineGroup()];
    widgets.forEach(widget => CANVAS.add(widget));
}


main().then(() => {
    console.log("Done");
}).catch((error) => {
    console.error(error);
});
