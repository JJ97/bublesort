let quickdrawsketch = function(p) {

    let scaleDownFactor = 2;
    let currentDrawingIndex = 0;
    let currentStrokeIndex = 0;
    let currentStrokeSegment = 0;
    let overallPosX = p.random(p.windowWidth - 255);
    let overallPosY = p.random(p.windowHeight - 255);
    let prevX, prevY;
    let drawings = [];

    p.preload = function() {
        p.loadStrings("ndjson/full_simplified_snowflake.ndjson", function(full_file) {
            for (var i = 0; i < full_file.length; i++) {
                if (full_file[i].trim().length > 0) {
                    drawings.push(JSON.parse(full_file[i])["drawing"]);
                }
            }
        });
    }

    p.setup = function() {
        var p5canvquickdraw = p.createCanvas(p.windowWidth, p.windowHeight);
        p5canvquickdraw.style("position", "absolute");
        p5canvquickdraw.style("left", "0");
        p5canvquickdraw.style("top", "0");
        p5canvquickdraw.style("z-index", "-5");

        p.frameRate(15);
    }

    p.draw = function() {
        // Do next stroke of current drawing and advance to next stroke, next drawing if out of strokes
        p.stroke(0, 0, 0, 80);
        p.strokeWeight(2);
        let currentDrawing = drawings[currentDrawingIndex];
        let x = currentDrawing[currentStrokeIndex][0][currentStrokeSegment] / scaleDownFactor;
        let y = currentDrawing[currentStrokeIndex][1][currentStrokeSegment] / scaleDownFactor;
        if (prevX !== undefined) {
            p.line(prevX, prevY, overallPosX + x, overallPosY + y);
        }
        currentStrokeSegment++;
        if (currentStrokeSegment === currentDrawing[currentStrokeIndex][0].length) {
            currentStrokeIndex++;
            currentStrokeSegment = 0;
            prevX = undefined;
            prevY = undefined;
            if (currentStrokeIndex == currentDrawing.length) {
                currentStrokeIndex = 0;
                currentDrawingIndex = (currentDrawingIndex + 1) % drawings.length;
                overallPosX = p.random(p.windowWidth - (255/scaleDownFactor));
                overallPosY = p.random(p.windowHeight - (255/scaleDownFactor));
            }
        } else {
            prevX = overallPosX + x;
            prevY = overallPosY + y;
        }
    }

    p.windowResized = function() {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }
}

let quickdrawp5 = new p5(quickdrawsketch);
