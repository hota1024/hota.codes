"use client";

import { useEffect, useRef } from "react";

import { remToPx } from "@/utils";

import fragmentSource from "./fragment.glsl";
import classes from "./styles.module.css";
import vertexSource from "./vertex.glsl";

export function GradationBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) {
      return;
    }

    const gl = canvas.getContext("webgl");

    if (!gl) {
      return;
    }

    // Vertex Shader
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    if (!vertexShader) {
      return;
    }
    gl.shaderSource(vertexShader, vertexSource);
    gl.compileShader(vertexShader);

    // Fragment Shader
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    if (!fragmentShader) {
      return;
    }
    gl.shaderSource(fragmentShader, fragmentSource);
    gl.compileShader(fragmentShader);

    // Create program
    const program = gl.createProgram();
    if (!program) {
      console.log(gl.getShaderInfoLog(vertexShader));
      console.log(gl.getShaderInfoLog(fragmentShader));
      return;
    }
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);
    console.log(gl.getProgramInfoLog(program));

    const timeLoc = gl.getUniformLocation(program, "time");
    const resolutionLoc = gl.getUniformLocation(program, "resolution");

    const position = [
      -1.0, 1.0, 0.0, 1.0, 1.0, 0.0, -1.0, -1.0, 0.0, 1.0, -1.0, 0.0,
    ];
    const index = [0, 2, 1, 1, 2, 3];

    const vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(position), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);

    const ibo = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
    gl.bufferData(
      gl.ELEMENT_ARRAY_BUFFER,
      new Int16Array(index),
      gl.STATIC_DRAW
    );
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

    const positionLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);

    const startTime = Date.now();

    function render() {
      if (!gl || !canvas) {
        return;
      }

      const time = (Date.now() - startTime) * 0.001;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      // gl.clearColor(1.0, 1.0, 1.0, 1.0);
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.enable(gl.BLEND);
      gl.blendFuncSeparate(
        gl.SRC_ALPHA,
        gl.ONE_MINUS_SRC_ALPHA,
        gl.ONE,
        gl.ONE
      );

      gl.uniform1f(timeLoc, time);
      gl.uniform2fv(resolutionLoc, [canvas.width, canvas.height]);
      gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
      gl.flush();

      requestAnimationFrame(render);
    }

    render();

    function updateSize() {
      if (!canvas) {
        return;
      }

      const padding = remToPx(2);

      canvas.width = window.innerWidth - padding;
      canvas.height = window.innerHeight - padding;
      // canvas.width = window.innerWidth;
      // canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, [ref]);

  return (
    <div className={classes.container}>
      <canvas ref={ref} className={classes.canvas}></canvas>
    </div>
  );
}
