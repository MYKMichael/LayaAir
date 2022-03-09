import { LayaGL } from "../../layagl/LayaGL"
import { BufferTargetType, BufferUsage } from "../../RenderEngine/RenderEnum/BufferTargetType";
import { IRenderBuffer } from "../../RenderEngine/RenderInterface/IRenderBuffer";

export class Buffer {

	protected _glBuffer: IRenderBuffer;
	protected _buffer: any;//可能为Float32Array、Uint16Array、Uint8Array、ArrayBuffer等。

	protected _bufferType: number;
	protected _bufferUsage: number;

	_byteLength: number = 0;

	get bufferUsage(): number {
		return this._bufferUsage;
	}

	constructor(targetType: BufferTargetType, bufferUsageType: BufferUsage) {
		this._glBuffer = LayaGL.renderEngine.createBuffer(targetType,bufferUsageType);
	}

	/**
	 * @private
	 * 绕过全局状态判断,例如VAO局部状态设置
	 */
	_bindForVAO(): void {
	}

	/**
	 * @private
	 */
	bind(): boolean {
		return this._glBuffer.bindBuffer();
	}

	unbind():void{
		this._glBuffer.unbindBuffer();
	}

	/**
	 * @private
	 */
	destroy(): void {
		if (this._glBuffer) {
			this._glBuffer.destroy();
			this._glBuffer = null;
		}
	}
}

