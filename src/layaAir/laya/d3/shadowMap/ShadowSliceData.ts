import { Plane } from "../math/Plane";
import { BoundSphere } from "../math/BoundSphere";
import { Matrix4x4 } from "../../maths/Matrix4x4";
import { Vector3 } from "../../maths/Vector3";
import { LayaGL } from "../../layagl/LayaGL";
import { BoundFrustum } from "../math/BoundFrustum";
import { ShaderData } from "../../RenderDriver/RenderModuleData/Design/ShaderData";



/**
 * camera裁剪数据
 */
export class CameraCullInfo {
    /**位置 */
    position: Vector3;
    /**是否遮挡剔除 */
    useOcclusionCulling: Boolean;
    /**锥体包围盒 */
    boundFrustum: BoundFrustum;
    /**遮挡标记 */
    cullingMask: number;
    /**静态标记 */
    staticMask: number;
}

/**
 * @internal
 * 阴影分割数据。
 */
export class ShadowSliceData {
    cameraShaderValue: ShaderData = LayaGL.unitRenderModuleDataFactory.createShaderData(null);
    position: Vector3 = new Vector3();
    offsetX: number;
    offsetY: number;
    resolution: number;
    viewMatrix: Matrix4x4 = new Matrix4x4();
    projectionMatrix: Matrix4x4 = new Matrix4x4();
    viewProjectMatrix: Matrix4x4 = new Matrix4x4();
    cullPlanes: Array<Plane> = [new Plane(new Vector3(), 0), new Plane(new Vector3(), 0), new Plane(new Vector3(), 0), new Plane(new Vector3(), 0), new Plane(new Vector3(), 0), new Plane(new Vector3(), 0), new Plane(new Vector3(), 0), new Plane(new Vector3(), 0), new Plane(new Vector3(), 0), new Plane(new Vector3(), 0)];
    cullPlaneCount: number;
    splitBoundSphere: BoundSphere = new BoundSphere(new Vector3(), 0.0);
    sphereCenterZ: number;
}

/**
 * @internal
 * 聚光灯阴影数据。
 */
export class ShadowSpotData {
    cameraShaderValue: ShaderData = LayaGL.unitRenderModuleDataFactory.createShaderData(null);
    position: Vector3 = new Vector3;
    offsetX: number;
    offsetY: number;
    resolution: number;
    viewMatrix: Matrix4x4 = new Matrix4x4();
    projectionMatrix: Matrix4x4 = new Matrix4x4();
    viewProjectMatrix: Matrix4x4 = new Matrix4x4();
    cameraCullInfo: CameraCullInfo = new CameraCullInfo();

}
