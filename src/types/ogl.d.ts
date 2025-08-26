declare module "ogl" {
  export class Renderer {
    gl: (WebGLRenderingContext | WebGL2RenderingContext) & { canvas: HTMLCanvasElement };
    dpr?: number;
    constructor(options?: unknown);
    setSize(width: number, height: number): void;
    render(options: { scene: unknown; camera?: unknown; target?: unknown; clear?: boolean }): void;
  }
  export class Program {
    uniforms: Record<string, unknown>;
    constructor(
      gl: WebGLRenderingContext | WebGL2RenderingContext,
      options: { vertex: string; fragment: string; uniforms?: Record<string, unknown> }
    );
  }
  export class Mesh {
    constructor(
      gl: WebGLRenderingContext | WebGL2RenderingContext,
      options: { geometry: unknown; program: unknown }
    );
  }
  export class Triangle {
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext);
  }
  export class Color {
    r: number;
    g: number;
    b: number;
    constructor(r?: number, g?: number, b?: number);
  }
  export class Vec3 {
    x: number;
    y: number;
    z: number;
    constructor(x?: number, y?: number, z?: number);
  }
}
