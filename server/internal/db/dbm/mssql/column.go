package mssql

import (
	"fmt"
	"mayfly-go/internal/db/dbm/dbi"
)

var (
	DTOracleDate = dbi.DTDateTime.Copy().WithSQLValue(func(val any) string {
		// oracle date型需要用函数包裹：to_date('%s', 'yyyy-mm-dd hh24:mi:ss')
		return fmt.Sprintf("to_date('%s', 'yyyy-mm-dd hh24:mi:ss')", val)
	})
)

var (
	Bigint           = dbi.NewDbDataType("bigint", dbi.DTInt64).WithCT(dbi.CTInt8)
	Numeric          = dbi.NewDbDataType("numeric", dbi.DTNumeric).WithCT(dbi.CTNumeric)
	Bit              = dbi.NewDbDataType("bit", dbi.DTBit).WithCT(dbi.CTBit)
	Smallint         = dbi.NewDbDataType("smallint", dbi.DTInt16).WithCT(dbi.CTInt2)
	Decimal          = dbi.NewDbDataType("decimal", dbi.DTDecimal).WithCT(dbi.CTDecimal)
	Smallmoney       = dbi.NewDbDataType("smallmoney", dbi.DTDecimal).WithCT(dbi.CTDecimal)
	Int              = dbi.NewDbDataType("int", dbi.DTInt32).WithCT(dbi.CTInt4)
	Tinyint          = dbi.NewDbDataType("tinyint", dbi.DTInt8).WithCT(dbi.CTInt1)
	Money            = dbi.NewDbDataType("money", dbi.DTDecimal).WithCT(dbi.CTDecimal)
	Float            = dbi.NewDbDataType("float", dbi.DTNumeric).WithCT(dbi.CTNumeric)
	Real             = dbi.NewDbDataType("real", dbi.DTString).WithCT(dbi.CTVarchar)
	Date             = dbi.NewDbDataType("date", dbi.DTDate).WithCT(dbi.CTDate)
	Datetimeoffset   = dbi.NewDbDataType("datetimeoffset", dbi.DTDateTime).WithCT(dbi.CTDateTime)
	Datetime2        = dbi.NewDbDataType("datetime2", dbi.DTDateTime).WithCT(dbi.CTDateTime)
	Smalldatetime    = dbi.NewDbDataType("smalldatetime", dbi.DTDateTime).WithCT(dbi.CTDateTime)
	Datetime         = dbi.NewDbDataType("datetime", dbi.DTDateTime).WithCT(dbi.CTDateTime)
	Time             = dbi.NewDbDataType("time", dbi.DTTime).WithCT(dbi.CTTime)
	Char             = dbi.NewDbDataType("char", dbi.DTString).WithCT(dbi.CTVarchar)
	Varchar          = dbi.NewDbDataType("varchar", dbi.DTString).WithCT(dbi.CTVarchar)
	Text             = dbi.NewDbDataType("text", dbi.DTString).WithCT(dbi.CTVarchar)
	Nchar            = dbi.NewDbDataType("nchar", dbi.DTString).WithCT(dbi.CTVarchar)
	Nvarchar         = dbi.NewDbDataType("nvarchar", dbi.DTString).WithCT(dbi.CTVarchar)
	Ntext            = dbi.NewDbDataType("ntext", dbi.DTString).WithCT(dbi.CTVarchar)
	Binary           = dbi.NewDbDataType("binary", dbi.DTBytes).WithCT(dbi.CTBinary)
	Varbinary        = dbi.NewDbDataType("varbinary", dbi.DTBytes).WithCT(dbi.CTBinary)
	Cursor           = dbi.NewDbDataType("cursor", dbi.DTString).WithCT(dbi.CTVarchar)
	Rowversion       = dbi.NewDbDataType("rowversion", dbi.DTBytes).WithCT(dbi.CTBinary)
	Hierarchyid      = dbi.NewDbDataType("hierarchyid", dbi.DTString).WithCT(dbi.CTVarchar)
	Uniqueidentifier = dbi.NewDbDataType("uniqueidentifier", dbi.DTString).WithCT(dbi.CTVarchar)
	Sql_variant      = dbi.NewDbDataType("sql_variant", dbi.DTString).WithCT(dbi.CTVarchar)
	Xml              = dbi.NewDbDataType("xml", dbi.DTString).WithCT(dbi.CTVarchar)
	Table            = dbi.NewDbDataType("table", dbi.DTString).WithCT(dbi.CTVarchar)
	Geometry         = dbi.NewDbDataType("geometry", dbi.DTString).WithCT(dbi.CTVarchar)
	Geography        = dbi.NewDbDataType("geography", dbi.DTString).WithCT(dbi.CTVarchar)
)