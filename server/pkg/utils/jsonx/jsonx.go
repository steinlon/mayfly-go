package jsonx

import (
	"encoding/json"
	"mayfly-go/pkg/logx"

	"github.com/tidwall/gjson"
)

// json字符串转map
func ToMap(jsonStr string) (map[string]any, error) {
	if jsonStr == "" {
		return map[string]any{}, nil
	}
	return ToMapByBytes([]byte(jsonStr))
}

// json字符串转结构体
func To[T any](jsonStr string, res T) (T, error) {
	return res, json.Unmarshal([]byte(jsonStr), &res)
}

// json字节数组转map
func ToMapByBytes(bytes []byte) (map[string]any, error) {
	var res map[string]any
	err := json.Unmarshal(bytes, &res)
	return res, err
}

// 转换为json字符串
func ToStr(val any) string {
	if strBytes, err := json.Marshal(val); err != nil {
		logx.ErrorTrace("toJsonStr error: ", err)
		return ""
	} else {
		return string(strBytes)
	}
}

// 根据json字节数组获取对应字段路径的string类型值
//
// @param fieldPath字段路径。如user.username等
func GetStringByBytes(bytes []byte, fieldPath string) (string, error) {
	return gjson.GetBytes(bytes, fieldPath).String(), nil
}

// 根据json字符串获取对应字段路径的string类型值
//
// @param fieldPath字段路径。如user.username等
func GetString(jsonStr string, fieldPath string) (string, error) {
	return gjson.Get(jsonStr, fieldPath).String(), nil
}

// 根据json字节数组获取对应字段路径的int类型值
//
// @param fieldPath字段路径。如user.age等
func GetIntByBytes(bytes []byte, fieldPath string) (int64, error) {
	return gjson.GetBytes(bytes, fieldPath).Int(), nil
}

// 根据json字符串获取对应字段路径的int类型值
//
// @param fieldPath字段路径。如user.age等
func GetInt(jsonStr string, fieldPath string) (int64, error) {
	return gjson.Get(jsonStr, fieldPath).Int(), nil
}

// 根据json字节数组获取对应字段路径的bool类型值
//
// @param fieldPath字段路径。如user.isDeleted等
func GetBoolByBytes(bytes []byte, fieldPath string) (bool, error) {
	return gjson.GetBytes(bytes, fieldPath).Bool(), nil
}

// 根据json字符串获取对应字段路径的bool类型值
//
// @param fieldPath字段路径。如user.isDeleted等
func GetBool(jsonStr string, fieldPath string) (bool, error) {
	return GetBoolByBytes([]byte(jsonStr), fieldPath)
}
