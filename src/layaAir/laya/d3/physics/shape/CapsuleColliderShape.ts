import { Vector3 } from "../../math/Vector3";
import { Physics } from "../Physics";
import { ColliderShape } from "./ColliderShape";

/**
 * <code>CapsuleColliderShape</code> 类用于创建胶囊形状碰撞器。
 */
export class CapsuleColliderShape extends ColliderShape {
	/** @internal */
	public static _tempVector30: Vector3 = new Vector3();

	/**@internal */
	private _radius: number;
	/**@internal */
	private _length: number;
	/**@internal */
	private _orientation: number;

	/**
	 * 获取半径。
	 */
	get radius(): number {
		return this._radius;
	}

	/**
	 * 获取长度。
	 */
	get length(): number {
		return this._length;
	}

	/**
	 * 获取方向。
	 */
	get orientation(): number {
		return this._orientation;
	}

	/**
	 * 创建一个新的 <code>CapsuleColliderShape</code> 实例。
	 * @param 半径。
	 * @param 高(包含半径)。
	 * @param orientation 胶囊体方向。
	 */
	constructor(radius: number = 0.5, length: number = 1.25, orientation: number = ColliderShape.SHAPEORIENTATION_UPY) {
		
		super();
		this._radius = radius;
		this._length = length;
		this._orientation = orientation;
		this._type = ColliderShape.SHAPETYPES_CAPSULE;

		switch (orientation) {
			case ColliderShape.SHAPEORIENTATION_UPX:
				this._nativeShape = new Physics._physics3D.btCapsuleShapeX(radius, length - radius * 2);
				break;
			case ColliderShape.SHAPEORIENTATION_UPY:
				this._nativeShape = new Physics._physics3D.btCapsuleShape(radius, length - radius * 2);
				break;
			case ColliderShape.SHAPEORIENTATION_UPZ:
				this._nativeShape = new Physics._physics3D.btCapsuleShapeZ(radius, length - radius * 2);
				break;
			default:
				throw "CapsuleColliderShape:unknown orientation.";
		}
	}

		/**
		 * @inheritDoc
		 */
		/*override*/  _setScale(value: Vector3): void {
		var fixScale: Vector3 = CapsuleColliderShape._tempVector30;
		switch (this.orientation) {
			case ColliderShape.SHAPEORIENTATION_UPX:
				fixScale.x = value.x;
				fixScale.y = fixScale.z = Math.max(value.y, value.z);
				break;
			case ColliderShape.SHAPEORIENTATION_UPY:
				fixScale.y = value.y;
				fixScale.x = fixScale.z = Math.max(value.x, value.z);
				break;
			case ColliderShape.SHAPEORIENTATION_UPZ:
				fixScale.z = value.z;
				fixScale.x = fixScale.y = Math.max(value.x, value.y);
				break;
			default:
				throw "CapsuleColliderShape:unknown orientation.";
		}
		super._setScale(fixScale);
	}

		/**
		 * @inheritDoc
		 */
		/*override*/  clone(): any {
		var dest: CapsuleColliderShape = new CapsuleColliderShape(this._radius, this._length, this._orientation);
		this.cloneTo(dest);
		return dest;
	}

}


