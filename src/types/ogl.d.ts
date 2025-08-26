declare module "ogl" {
  export class Renderer {
    gl: (WebGLRenderingContext | WebGL2RenderingContext) & { canvas: HTMLCanvasElement };
    constructor(options?: any);
    setSize(width: number, height: number): void;
    render(options: { scene: any; camera?: any; target?: any; clear?: boolean }): void;
  }
  export class Program {
    uniforms: Record<string, any>;
    constructor(gl: any, options: { vertex: string; fragment: string; uniforms?: Record<string, any> });
  }
  export class Mesh {
    constructor(gl: any, options: { geometry: any; program: any });
  }
  export class Triangle {
    constructor(gl: any);
  }
  export class Color {
    r: number;
    g: number;
    b: number;
    constructor(r?: number, g?: number, b?: number);
  }
}
