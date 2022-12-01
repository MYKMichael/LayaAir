#if !defined(TransformCommon_lib)
#define TransformCommon_lib

const float TINY = 1e-10;

// sRGB D65 to AP0 D60
// https://www.colour-science.org:8010/apps/rgb_colourspace_transformation_matrix CAT 02
const mat3 sRGB_to_AP0_MAT = mat3(
    vec3(0.4395856442, 0.0895395735, 0.0173871832),
    vec3(0.3839294030, 0.8147498351, 0.1087391143),
    vec3(0.1765327364, 0.0956836061, 0.8738205876));

// sRGB D65 to AP1 D60
// https://www.colour-science.org:8010/apps/rgb_colourspace_transformation_matrix CAT 02
const mat3 sRGB_to_AP1_MAT = mat3(
    vec3(0.6131178129, 0.0699340823, 0.0204629926),
    vec3(0.3411819959, 0.9181030375, 0.1067686634),
    vec3(0.0457873443, 0.0119327755, 0.8727159106));

const mat3 AP1_to_XYZ_MAT = mat3(
    vec3(0.6624541811, 0.2722287168, -0.0055746495),
    vec3(0.1340042065, 0.6740817658, 0.0040607335),
    vec3(0.1561876870, 0.0536895174, 1.0103391003));

const mat3 AP0_to_AP1_MAT = mat3(
    vec3(1.4514393161, -0.0765537734, 0.0083161484),
    vec3(-0.2365107469, 1.1762296998, -0.0060324498),
    vec3(-0.2149285693, -0.0996759264, 0.9977163014));

const mat3 AP1_to_AP0_MAT = mat3(
    vec3(0.6954522414, 0.0447945634, -0.0055258826),
    vec3(0.1406786965, 0.8596711185, 0.0040252103),
    vec3(0.1638690622, 0.0955343182, 1.0015006723));

const mat3 XYZ_to_AP1_MAT = mat3(
    vec3(1.6410233797, -0.6636628587, 0.0117218943),
    vec3(-0.3248032942, 1.6153315917, -0.0082844420),
    vec3(-0.2364246952, 0.0167563477, 0.9883948585));

const vec3 AP1_RGB2Y = vec3(0.2722287168, 0.6740817658, 0.0536895174);

float rgb_2_saturation(vec3 rgb)
{
    float rgbmax = vecmax(rgb);
    float rgbmin = vecmin(rgb);
    return (max(rgbmax, TINY) - max(rgbmin, TINY)) / max(rgbmax, 1e-2);
}

#endif // TransformCommon_lib