import { NativeRenderStateCommand } from "../../../RenderEngine/RenderEngine/NativeGLEngine/NativeRenderStateCommand";
import { BufferUsage } from "../../../RenderEngine/RenderEnum/BufferTargetType";
import { IRenderEngineFactory } from "../../../RenderEngine/RenderInterface/IRenderEngineFactory";
import { UniformBufferObject } from "../../../RenderEngine/UniformBufferObject";
import { NativeShaderInstance } from "../../../d3/RenderObjs/NativeOBJ/NativeShaderInstance";
import { ShaderProcessInfo } from "../../../webgl/utils/ShaderCompileDefineBase";
import { ShaderPass } from "../../RenderShader/ShaderPass";
import { NativeCommandUniformMap } from "./NativeCommandUniformMap";
import { NativeUniformBufferObject } from "./NativeUniformBufferObject";


export class NativeGLRenderEngineFactory implements IRenderEngineFactory {
   

    createShaderInstance(shaderProcessInfo: ShaderProcessInfo, shaderPass: ShaderPass): any {
        let shaderins = new NativeShaderInstance();
        shaderins._create(shaderProcessInfo, shaderPass);
        return shaderins;
    }

    createRenderStateComand(): NativeRenderStateCommand {
        return new NativeRenderStateCommand();
    }


    createUniformBufferObject(glPointer: number, name: string, bufferUsage: BufferUsage, byteLength: number, isSingle: boolean): UniformBufferObject {
        return new NativeUniformBufferObject(glPointer, name, bufferUsage, byteLength, isSingle);
    }

    createGlobalUniformMap(blockName: string): NativeCommandUniformMap {
        return new NativeCommandUniformMap((window as any).conchCommandUniformMap.createGlobalUniformMap(blockName), blockName);
    }

    createEngine(config: any, canvas: any) {
        //TODO:
        return Promise.resolve();
    }
}