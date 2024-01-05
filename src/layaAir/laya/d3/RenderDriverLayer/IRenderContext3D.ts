import { InternalRenderTarget } from "../../RenderEngine/RenderInterface/InternalRenderTarget";
import { PipelineMode } from "../../RenderEngine/RenderInterface/RenderPipelineInterface/IRenderContext3D";
import { IRenderElement } from "../../RenderEngine/RenderInterface/RenderPipelineInterface/IRenderElement";
import { ShaderData } from "../../RenderEngine/RenderShader/ShaderData";
import { Color } from "../../maths/Color";
import { Vector4 } from "../../maths/Vector4";
import { SingletonList } from "../../utils/SingletonList";
import { Viewport } from "../math/Viewport";
import { ICameraNodeData, ISceneNodeData } from "./RenderModuleData/ICameraNodeData";

export interface IRenderContext3D {
    globalShaderData: ShaderData;
    sceneData: ShaderData;
    sceneModuleData: ISceneNodeData;
    cameraModuleData: ICameraNodeData;
    cameraData: ShaderData;

    sceneUpdataMask: number;
    cameraUpdateMask: number;
    pipelineMode: PipelineMode;
    invertY: boolean;
    setRenderTarget(value: InternalRenderTarget): void;
    setViewPort(value: Viewport): void;
    setScissor(value: Vector4): void;
    setClearData(clearFlag: number, clolor: Color, depth: number, stencil: number): number;
    drawRenderElementList(list: SingletonList<IRenderElement>): number;
    drawRenderElementOne(node: IRenderElement): number;
}