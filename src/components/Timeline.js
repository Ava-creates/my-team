import React from "react"
import TimelineItem from './TimelineItem'
import './Timeline.css'

function createRandomSpanOnMouseMove() {
    const bodyEl = document.querySelector("html");
  
    bodyEl.addEventListener("mousemove", (event) => {
      const xPos = event.offsetX;
      const yPos = event.offsetY;
  
      const spanEl = document.createElement("span");
  
      spanEl.style.position = "absolute";
      spanEl.style.backgroundColor = getRandomColor(); // Custom function to get random color
      spanEl.style.left = xPos + "px";
      spanEl.style.top = yPos + "px";
  
      const size = Math.random() * 100;
      spanEl.style.width = size + "px";
      spanEl.style.height = size + "px";
      spanEl.style.borderRadius = "50%";
  
      bodyEl.appendChild(spanEl);
  
      setTimeout(() => {
        spanEl.remove();
      }, 3000);
    });
  
    function getRandomColor() {
            const minLightness = 70; // Minimum lightness value for pastel colors (0-100)
            const maxLightness = 100; // Maximum lightness value for white
          
            // Generate a random lightness value within the specified range
            const lightness = Math.floor(Math.random() * (maxLightness - minLightness + 1)) + minLightness;
          
            // Convert HSL values to RGB for consistent pastel shades
            const hue = 350; // Pink hue in HSL color model
            const saturation = '70%'; // Saturation for pastel shades
          
            // Convert HSL to RGB
            const hslColor = `hsl(${hue}, ${saturation}, ${lightness}%)`;
          
            // Convert HSL color to RGB for consistent pastel shades
            const rgbColor = hslToRgb(hslColor);
          
            // Convert RGB to hex
            const hexColor = rgbToHex(rgbColor);
          
            return hexColor;
          } }
          
          // Convert HSL color to RGB
    function hslToRgb(hsl) {
            // Split HSL components
            const [, hue, sat, light] = hsl.match(/\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/);
          
            const h = parseInt(hue) / 360;
            const s = parseInt(sat) / 100;
            const l = parseInt(light) / 100;
          
            let r, g, b;
          
            if (s === 0) {
              r = g = b = l; // Achromatic
            } else {
              const hue2rgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
              };
          
              const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
              const p = 2 * l - q;
              r = hue2rgb(p, q, h + 1 / 3);
              g = hue2rgb(p, q, h);
              b = hue2rgb(p, q, h - 1 / 3);
            }
          
            // Convert RGB to hex
            const rgb = [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
            return rgb;
          }
          
          // Convert RGB to hex
    function rgbToHex(rgb) {
            return "#" + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);
          }

export default function Timeline() {
  createRandomSpanOnMouseMove();
  const timelineData = [
    { date: '1994-06-29', content: 'Turned 21!!' },
    { date: '2014-06-29', content: '21 again (woohoo)' },
    { date: '2024-06-29', content: 'still 21' },
    { date: '2054-06-29', content: 'will still be 21' },
    { date: '2154-06-29', content: 'Forever 21 <<33'},


    // Add more timeline data here
  ];

  return (
    <div className="timeline-wrapper">
      <div className="timeline-container">
        <div className="timeline">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} date={item.date} content={item.content} />
          ))}
        </div>
      </div>
    </div>
  );
};

