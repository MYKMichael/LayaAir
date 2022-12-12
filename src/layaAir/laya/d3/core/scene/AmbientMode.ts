/**
 * 环境光模式
 */
export enum AmbientMode {
    /** 固定颜色。*/
    SolidColor,
    /** 球谐光照, 通过天空盒生成的球谐数据。 */
    SphericalHarmonics,
    /** 分别设置天空, 地平线, 地面的环境光颜色 */
    TripleColor
}
