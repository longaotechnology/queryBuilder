/**
 * 测试key - value 连接符模型
 * @type {*[]}
 */
var opData = [{"value":"==","text":"等于"},{"value":"is null","text":"为Null"},{"value":"大于","text":">="}];

/**
 * 这是初始化的元数据
 * @type {*[]}
 */
var sourceData = [{"entityName":"User","properties":[{"name":"id","type":"string"},{"name":"name","type":"string"},{"name":"age","type":"int"},{"name":"depant_num","type":"foreign"}],"alias":["User1","User2"]},{"entityName":"Department","properties":[{"name":"id","type":"string"},{"name":"dep_name","type":"string"},{"name":"dep_nu","type":"int"}],"alias":["dept","dept2"]}];

/**
 * 保存的查询SQL的结构
 * @type {{rules: *[], rulesGroup: *[]}}
 */
var saveJson = {"rules":[{"entity":"User","alia":"User1","property":"id","type":"string","consy":"=","value":"372930"},{"entity":"User","alia":"User2","property":"name","type":"string","consy":"in","value":["郭鹏飞","武彩平"]}],"rulesGroup":[{"rules":[{"entity":"User","alia":"User1","property":"id","type":"string","consy":"=","value":"372930"},{"entity":"User","alia":"User2","property":"depant_num","type":"foreign","consy":"=","value":{"entity":"User","alia":"User1","property":"id"}}],"rulesGroup":[]}]};
//var saveJson = null;
/**
 * 所有的树形餐宿类型
 * @type {string[]}
 */
//var proMap = ["byte","short","int","float","double","long","string","date","timestamp","foreign"];

/**
 *key 和 连接符的映射关系
 * @type {*[]}
 */
var propertiesTypes = [{"byte":[{"value":"=","text":"等于","inputType":"intInput","tip":"请输入一个字节"},{"value":">=","text":"大于等于","inputType":"intInput","tip":"请输入一个字节"},{"value":"<=","text":"小于等于","inputType":"intInput","tip":"请输入一个字节"},{"value":"!=","text":"不等于","inputType":"intInput","tip":"请输入一个字节"}]},{"short":[{"value":"=","text":"等于","inputType":"intInput","tip":"请输入一个short数据"},{"value":">=","text":"大于等于","inputType":"intInput","tip":"请输入一个short数据"},{"value":"<=","text":"小于等于","inputType":"intInput","tip":"请输入一个short数据"},{"value":"!=","text":"不等于","inputType":"intInput","tip":"请输入一个short数据"}]},{"int":[{"value":"=","text":"等于","inputType":"intInput","tip":"请输入一个整数"},{"value":">=","text":"大于等于","inputType":"intInput","tip":"请输入一个整数"},{"value":"<=","text":"小于等于","inputType":"intInput","tip":"请输入一个整数"},{"value":"!=","text":"不等于","inputType":"intInput","tip":"请输入一个整数"}]},{"float":[{"value":"=","text":"等于","inputType":"intInput","tip":"请输入一个小数"},{"value":">=","text":"大于等于","inputType":"intInput","tip":"请输入一个小数"},{"value":"<=","text":"小于等于","inputType":"intInput","tip":"请输入一个小数"},{"value":"!=","text":"不等于","inputType":"intInput","tip":"请输入一个小数"}]},{"double":[{"value":"=","text":"等于","inputType":"intInput","tip":"请输入一个小数"},{"value":">=","text":"大于等于","inputType":"intInput","tip":"请输入一个小数"},{"value":"<=","text":"小于等于","inputType":"intInput","tip":"请输入一个小数"},{"value":"!=","text":"不等于","inputType":"intInput","tip":"请输入一个小数"}]},{"date":[{"value":"=","text":"等于","inputType":"intInput","tip":"请选择日期"},{"value":"!=","text":"不等于","inputType":"intInput","tip":"请选择日期"},{"value":">=","text":"大于等于","inputType":"intInput","tip":"请选择日期"},{"value":"<=","text":"小于等于","inputType":"intInput","tip":"请选择日期"}]},{"timestamp":[{"value":"=","text":"等于","inputType":"intInput","tip":"请选择日期"},{"value":"!=","text":"不等于","inputType":"intInput","tip":"请选择日期"},{"value":">=","text":"大于等于","inputType":"intInput","tip":"请选择日期"},{"value":"<=","text":"小于等于","inputType":"intInput","tip":"请选择日期"}]},{"string":[{"value":"=","text":"等于","inputType":"intInput","tip":"请输入一个字符串"},{"value":"!=","text":"不等于","inputType":"intInput","tip":"请输入一个字符串"},{"value":"in","text":"包含","inputType":"intInput","tip":"请输入多个字符串，以英文逗号分割"},{"value":"not in","text":"不包含","inputType":"intInput","tip":"请输入多个字符串，以英文逗号分割"},{"value":" is null","text":"为空","inputType":"null"}]},{"foreign":[{"value":"=","text":"等于","inputType":"sourceData"}]}];