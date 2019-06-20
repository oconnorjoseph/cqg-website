<template>
  <div id="container"></div>
</template>

<script>
if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (function() {
    return (
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(/* function FrameRequestCallback */ callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  })();
}

var ROWS = 15,
  COLS = 30,
  NUM_PARTICLES = ROWS * COLS,
  THICKNESS = Math.pow(2500, 2),
  SPACING = 50,
  MARGIN = 0,
  R = 0,
  G = 51,
  B = 102,
  A = 255,
  DRAG = 0.2,
  EASE = 0.25,
  /*
    
    used for sine approximation, but Math.sin in Chrome is still fast enough :)http://jsperf.com/math-sin-vs-sine-approximation

    B = 4 / Math.PI,
    C = -4 / Math.pow( Math.PI, 2 ),
    P = 0.225,

    */

  container,
  particle,
  canvas,
  list,
  ctx,
  tog,
  man,
  dx,
  dy,
  mx,
  my,
  d,
  t,
  f,
  a,
  b,
  i,
  n,
  w,
  h,
  p;

particle = {
  vx: 0,
  vy: 0,
  x: 0,
  y: 0
};

function init(windowWidth) {
  container = document.getElementById("container");
  canvas = document.createElement("canvas");

  ctx = canvas.getContext("2d");
  man = false;
  tog = true;

  list = [];
  COLS = Math.ceil((windowWidth - MARGIN * 2) / SPACING);
  w = canvas.width = windowWidth;
  h = canvas.height = ROWS * SPACING + MARGIN * 2;

  container.style.marginLeft = Math.round(w * -0.5) + "px";
  container.style.marginTop = Math.round(h * -0.5) + "px";

  for (i = 0; i < NUM_PARTICLES; i++) {
    p = Object.create(particle);
    p.x = p.ox = MARGIN + SPACING * (i % COLS);
    p.y = p.oy = MARGIN + SPACING * Math.floor(i / COLS);

    list[i] = p;
  }

  container.addEventListener("mousemove", function(e) {
    var bounds = container.getBoundingClientRect();
    mx = e.clientX - bounds.left;
    my = e.clientY - bounds.top;
    man = true;
  });

  container.appendChild(canvas);
}

function step() {
  if ((tog = !tog)) {
    if (!man) {
      t = +new Date() * 0.001;
      mx = w * 0.5 + Math.cos(t * 2.1) * Math.cos(t * 0.9) * w * 0.45;
      my = h * 0.5 + Math.sin(t * 3.2) * Math.tan(Math.sin(t * 0.8)) * h * 0.45;
    }

    for (i = 0; i < NUM_PARTICLES; i++) {
      p = list[i];

      d =
        (dx = mx - p.x) * dx + (dy = my - p.y) * dy + Math.pow(THICKNESS, 0.8);
      f = THICKNESS / d;

      if (d < THICKNESS) {
        t = Math.atan2(dy, dx);
        if ((dx = mx - p.x) * dx + (dy = my - p.y) * dy < 40) {
          p.vx += f * Math.cos(t - 5);
          p.vy += f * Math.sin(t - 5);
        } else {
          p.vx += f * Math.cos(t);
          p.vy += f * Math.sin(t);
        }
      }
      p.x += (p.vx *= DRAG) + (p.ox - p.x) * EASE;
      p.y += (p.vy *= DRAG) + (p.oy - p.y) * EASE;
    }
  } else {
    b = (a = ctx.createImageData(w, h)).data;

    for (i = 0; i < NUM_PARTICLES; i++) {
      p = list[i];
      n = (~~p.x + ~~p.y * w) * 4;
      b[n] = R;
      b[n + 1] = G;
      b[n + 2] = B;
      b[n + 3] = A;
    }

    ctx.putImageData(a, 0, 0);
  }

  requestAnimationFrame(step);
}

function dispose(lastStep) {
  var container = document.getElementById("container");
  while (container && container.firstChild) {
    container.removeChild(container.firstChild);
  }
  cancelAnimationFrame(lastStep);
}

export default {
  name: "Fabric",
  watch: {
    windowHeight(newHeight, oldHeight) {
      this.txt = `it changed to ${newHeight} from ${oldHeight}`;
    }
  },
  data: function() {
    return {
      windowWidth: 0,
      step: null
    };
  },
  mounted: function() {
    init(window.innerWidth);
    this.step = step();
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
        dispose(this.step);
        init(this.windowWidth);
        this.step = step();
      });
    });
  }
};
</script>

<style>
#container {
  background: #00000000;
  position: absolute;
  left: 50%;
  top: 50%;
}
</style>
