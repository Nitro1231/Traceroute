import React from "react";
import { CanvasOverlay } from "react-map-gl";

class Line extends React.Component {
  redraw({ width, height, ctx, isDragging, project, unproject }) {
    const {
      points,
      color = "#35A9CA",
      lineWidth = 3,
      renderWhileDragging = true,
    } = this.props;
    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = "lighter";

    if ((renderWhileDragging || !isDragging) && points) {
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = color;
      ctx.beginPath();
      points.forEach((point) => {
        const pixel = project([point[1], point[0]]); // project([longitude, latitude]);
        ctx.lineTo(pixel[0], pixel[1]);
      });
      ctx.setLineDash([3,3]);
      ctx.stroke();
    }
  }

  render() {
    return <CanvasOverlay redraw={this.redraw.bind(this)} />;
  }
}

export default Line;
