import { Laya } from "Laya";
import { Camera } from "laya/d3/core/Camera";
import { Scene3D } from "laya/d3/core/scene/Scene3D";
import { Stage } from "laya/display/Stage";
import { Handler } from "laya/utils/Handler";
import { CameraMoveScript } from "../common/CameraMoveScript";
import { Shader3D } from "laya/RenderEngine/RenderShader/Shader3D";
import { Laya3DRender } from "laya/d3/RenderObjs/Laya3DRender";
import { WebUnitRenderModuleDataFactory } from "laya/RenderDriver/RenderModuleData/WebModuleData/WebUnitRenderModuleDataFactory"
import { RTUintRenderModuleDataFactory } from "laya/RenderDriver/RenderModuleData/RuntimeModuleData/RTUintRenderModuleDataFactory"
import { Web3DRenderModuleFactory } from "laya/RenderDriver/RenderModuleData/WebModuleData/3D/Web3DRenderModuleFactory"
import { RT3DRenderModuleFactory } from "laya/RenderDriver/RenderModuleData/RuntimeModuleData/3D/RT3DRenderModuleFactory"
import { WebGL3DRenderPassFactory } from "laya/RenderDriver/WebGLDriver/3DRenderPass/WebGL3DRenderPassFactory"
import { GLES3DRenderPassFactory } from "laya/RenderDriver/OpenGLESDriver/3DRenderPass/GLES3DRenderPassFactory"
import { WebGLRenderDeviceFactory } from "laya/RenderDriver/WebGLDriver/RenderDevice/WebGLRenderDeviceFactory"
import { GLESRenderDeviceFactory } from "laya/RenderDriver/OpenGLESDriver/RenderDevice/GLESRenderDeviceFactory"
import { LengencyRenderEngine3DFactory } from "laya/RenderDriver/DriverDesign/3DRenderPass/LengencyRenderEngine3DFactory"
import { LayaGL } from "laya/layagl/LayaGL";
import { WebGLRenderEngineFactory } from "laya/RenderDriver/WebGLDriver/RenderDevice/WebGLRenderEngineFactory";
import { GLESRenderEngineFactory } from "laya/RenderDriver/OpenGLESDriver/RenderDevice/GLESRenderEngineFactory";
import { URL } from "laya/net/URL";
import { LayaEnv } from "LayaEnv";
export class SceneLoad1 {
	constructor() {
		//Laya3DRender.renderDriverPassCreate = new GLESRenderDriverPassFactory();
		if ((window as any).conch&& !(window as any).conchConfig.conchWebGL) {
			
			LayaGL.unitRenderModuleDataFactory = new RTUintRenderModuleDataFactory();
			LayaGL.renderDeviceFactory = new GLESRenderDeviceFactory();
			LayaGL.renderOBJCreate = new GLESRenderEngineFactory();
			Laya3DRender.renderOBJCreate = new LengencyRenderEngine3DFactory();
			Laya3DRender.Render3DModuleDataFactory = new RT3DRenderModuleFactory();
			Laya3DRender.Render3DPassFactory = new GLES3DRenderPassFactory();
		}
		else
		{
			LayaGL.unitRenderModuleDataFactory = new WebUnitRenderModuleDataFactory();
			LayaGL.renderDeviceFactory = new WebGLRenderDeviceFactory();
			LayaGL.renderOBJCreate = new WebGLRenderEngineFactory();
			Laya3DRender.renderOBJCreate = new LengencyRenderEngine3DFactory();
			Laya3DRender.Render3DModuleDataFactory = new Web3DRenderModuleFactory();
			Laya3DRender.Render3DPassFactory = new WebGL3DRenderPassFactory();

		}
		
		//初始化引擎
		Laya.init(0, 0).then(() => {
			//Stat.show();
			Laya.stage.scaleMode = Stage.SCALE_FULL;
			Laya.stage.screenMode = Stage.SCREEN_NONE;
			Shader3D.debugMode = true;
			URL.basePath = "sample-resource/web";

			this.loadIDEResourcePakage();
			// //加载场景
			// Scene3D.load("res/threeDimen/scene/LayaScene_dudeScene/Conventional/dudeScene.ls", Handler.create(this, function (scene: Scene3D): void {
			// 	(<Scene3D>Laya.stage.addChild(scene));

			// 	// //获取场景中的相机
			// 	var camera: Camera = (<Camera>scene.getChildByName("Main Camera"));
			// 	// //移动摄像机位置
			// 	// camera.transform.position = new Vector3(0, 0.81, -1.85);
			// 	// //旋转摄像机角度
			// 	// camera.transform.rotate(new Vector3(0, 0, 0), true, false);
			// 	// //设置摄像机视野范围（角度）
			// 	// camera.fieldOfView = 60;
			// 	// //设置背景颜色
			// 	// camera.clearColor = new Color(0, 0, 0.6, 1);
			// 	// //加入摄像机移动控制脚本
			// 	// camera.addComponent(CameraMoveScript);

			// 	//设置灯光环境色
			// 	//scene.ambientColor = new Vector3(2.5, 0, 0);
			// }));
		});
	}

	loadIDEResourcePakage() {
		Laya.loader.loadPackage("").then(this.loadSceneResource);
	}

	loadSceneResource() {
		//加载场景
		Scene3D.load("test.ls", Handler.create(this, function (scene: Scene3D): void {
			(<Scene3D>Laya.stage.addChild(scene));

			// //获取场景中的相机
			var camera: Camera = (<Camera>scene.getChildByName("Main Camera"));
			// let directionLight = new Sprite3D();
			// let dircom = directionLight.addComponent(DirectionLightCom);
			// scene.addChild(directionLight);
			// //移动摄像机位置
			// camera.transform.position = new Vector3(0, 0.81, -1.85);
			// //旋转摄像机角度
			// camera.transform.rotate(new Vector3(0, 0, 0), true, false);
			// //设置摄像机视野范围（角度）
			// camera.fieldOfView = 60;
			// //设置背景颜色
			// camera.clearColor = new Color(0, 0, 0.6, 1);
			// //加入摄像机移动控制脚本
			camera.addComponent(CameraMoveScript);

			//设置灯光环境色
			//scene.ambientColor = new Vector3(2.5, 0, 0);
		}));
	}
}

