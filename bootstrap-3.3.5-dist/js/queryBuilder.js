 $(function(){

     /**
      * 初始化一个and 、or连接符
      * @returns {*|jQuery}
      */
     function new_left_op(){
         var lefi_div = $(' <div class="btn-group btn-group-xs group_left" data-toggle="buttons">')
         lefi_div.append('<label class="btn btn-primary active"><input type="radio" name="options" autocomplete="off" value="and" checked>并且</label><label class="btn btn-primary"><input type="radio" name="options" value="or" autocomplete="off"> 或者</label>');
         return lefi_div;
     }

     /***
      * 初始化组级联操作
      * @param groupIsDis 删除组是否显
      * @returns {jQuery|HTMLElement}
      */
    function new_rig_op(groupIsDis){
         var rig_div = $('<div class="btn-group btn-group-xs group_right" role="group" aria-label="...">');
         rig_div.append('<button type="button" class="btn btn-primary"><span class="glyphicon glyphicon-align-justify" aria-hidden="true"></span>&nbsp;添加新行</button><button type="button" class="btn btn-info"><span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>&nbsp;添加新组</button><button type="button" class="btn btn-xs btn-danger" style="display: '+(groupIsDis?"block":"none")+'"><span class="glyphicon glyphicon-trash" aria-hidden="true" ></span>&nbsp;删除组</button>');
        return rig_div;
    }

    /***
     * 初始化删除行操作组件
     * @param delIsDis 删除行标签是否显示
     * @returns {jQuery|HTMLElement}
     */
    function new_op_del(delIsDis){
    	var div = $('<div class="sin_op">');
    	div.append('<img src="css/images/2.png" alt="Remove" class="remove '+(delIsDis?"head":"")+'" >');
    	return div;
    }
    
    
   /**
     * 生成第一个下拉组件
     * @param sour_data 下拉组件的元数据
     * @auther GuoPengfei
     * @returns {*|jQuery}
     */
    function new_fir_select(sour_data){
        var select = $('<select>').addClass("form-control selectpicker bs-select-hidden mobile-device fir_sele");
       select.append('<option >请选择</option>');
        $.each(sour_data,function(i,j){
            var entityName = this.entityName;
            var alias = this.alias;
            var properties = this.properties;
            $.each(alias,function(n,m){
                var group = $('<optgroup>').attr('label',entityName+"."+alias[n]);
                $.each(properties,function(o,p){
                    group.append('<option value="'+entityName+"."+alias[n]+"."+this.name+"."+this.type+'">'+this.name+'</option>');
                });
                select.append(group);
            });
        });
        return select;
    }


    /**
     * 生成一个key-value连服下拉组件
     * @param options  下拉的组件
     * @returns {*|jQuery}
     */
    function new_op_select(options){
        var select = $('<select>').addClass("form-control selectpicker bs-select-hidden mobile-device op_sele");
        $.each(options,function(i,j){
            select.append('<option value="'+this.value+'">'+this.text+'</option>');
        });
        return select;
    }
    
    /**
     * 生成一个时间输入框组件
     * @returns {*|jQuery}
     */
    function new_date_in (){
    	var div = $('<div class="sin_val">');
    	var date_in = $('<input size="16" type="text" value="2012-06-15 14:45" readonly class="form-control">');
    	date_in.datetimepicker({format: 'yyyy-mm-dd hh:ii',autoclose:true});
    	div.append(date_in);
//    	div.append('<span class="add-on"><i class="icon-remove"></i></span><span class="add-on"><i class="icon-th"></i></span>');
    	return div;
    }

     /**
      * 生成每条规则的删除操作组件
      * @param opIsDis 是否可操作
      * @returns {jQuery|HTMLElement}
      */
     function new_op_del(opIsDis){
         if(opIsDis){
             return $('<img src="css/images/2.png" alt="删除" class="remove"/>');
         }else{
             return $('<img src="css/images/2.png" alt="删除" class="remove head"/>');
         }
     }
     
     /**
      * 输入框提示组件
      * @param sourceData 提示数据源
      * @returns {jQuery|HTMLElement}
      */
     function new_val_typeahead(sourceData){
    	 var div = $('<div class="sin_val">');
     	 var data_in = $('<input size="16" type="text" class="form-control">');
     	data_in.typeahead({
			  source: sourceData,  // 绑定数据源
			  highlighter: function (item) {
			      return item.split("-\$-")[0];
			  },
			  updater: function (item) {
			      return item.split("-\$-")[0];
			  },
			  afterSelect: function (item) {
			  }
     	 });
     	 div.append(data_in);
     	 return div;
     };
     
     /**
      * 生成一个必须单选的下拉组件
      * @param options  下拉的组件
      * @returns {*|jQuery}
      */
     function new_val_select(options){
         var select = $('<select>').addClass("form-control selectpicker bs-select-hidden mobile-device");
         $.each(options,function(i,j){
             select.append('<option value="'+this.value+'">'+this.text+'</option>');
         });
         return select;
     }
     /**
      * 初始化第一个规则
      * @param sourceJson  元数据
      * @returns {*|jQuery}
      */
     function init_sin_con (sourceJson){
    	 var sin_div = $('<div class="sin_con">');
    	 var sin_key = $('<div class="sin_key">');
    	 sin_key.append(new_fir_select(sourceJson));
    	 sin_div.append(sin_key);
    	 return sin_div;
     }

     /**
      * 构建SQL Builder主方法
      * @param source_data 元数据
      * @param save_data  保存的SQL结构, 至少为[]数组
      * @param parNode 父类节点对象
      * @param ruleIsDis 删除规则是否显示
      **/
     function builderSQL(source_data,save_data,parNode,groupIsDis){

         var par_div = $('<div class="builder_main" align="center">');
         var op_div = $('<div class="l_op">');
         op_div.append(new_left_op());
         op_div.append(new_rig_op(groupIsDis));

         par_div.append(op_div);
         
         var  querystmts = $('<div class="querystmts">');

         if(saveJson == null || saveJson == undefined || saveJson == "" || 0 >= saveJson.length){
             //仅仅创建一个空白的界面，没有保存的额SQL结构
        	 querystmts.append(init_sin_con(source_data));
        	 par_div.append(querystmts);
        	 parNode.append(par_div);
             return false;
         }
    	 
         var rules = save_data.rules;
         $.each(rules, function (i) {
             //每条规则
            //
            //var rules = this.rules;
            // $.each(rules,function(i){

                var sin_div = $('<div class="sin_con">');
                 var sin_key = $('<div class="sin_key">');
                 var fir_sele = new_fir_select(source_data);
                 fir_sele.val(this.entity+"."+this.alia+"."+this.property+"."+this.type);  //设置选中
//                 fir_sele.on('change',function(){
//                     //第一个下拉发生改变时的事件?
//                    alert("第一个下拉的值为:"+$(this).val()+"改编后，将会影响后续的下拉选择");
//                 });
                 sin_key.append(fir_sele);//没有设置选中
                 sin_div.append(sin_key)

                 var sec_div = $('<div class="sin_connect">');
                 var propertypeType = this.type;
                 var consy = this.consy;
                 var proIsExist = false;
                 var sec_sel = null;
                 $.each(propertiesTypes,function(m){
                     //alert(JSON.stringify(propertiesTypes[m]))
                     //key 存在
                     if(propertypeType in propertiesTypes[m]){
                         sec_sel = new_op_select(propertiesTypes[m][propertypeType]);
                         sec_sel.val(consy);
//                         sec_sel.on('change', function () {
//                             alert("第二个下拉发生变化，将要影响到value的输出,产生回调函数，为value的输入做输入提示!")
//                         });
                         proIsExist = true;
                         return false;
                     }
                 });
                 /**
                  *进行判断选择的属性类型是否存在
                  */
                 if(!proIsExist){
                     alert("选择的属性"+this.entity+"."+this.alia+"的类型"+this.property+"没有对应的连接符，请确认是否添加此类型映射");
                     return false;
                 }
                 sec_div.append(sec_sel);

                 var th_div = $('<div class="sin_val">');
                 //此处可以通过propertypeType来确定要生成什么类型的ipnut输入值
                 
                 
                 var th_div = new_date_in();
                 
                 var for_div = new_op_del((i == 0?false:true));
                 
                 sin_div.append(sec_div).append(th_div).append(for_div);
                 querystmts.append(sin_div);
             });
         	par_div.append(querystmts);
            parNode.append(par_div);

             //规则组
             var rulesGroup = save_data.rulesGroup;
             $.each(rulesGroup, function () {
                 builderSQL(source_data,this,par_div,true);
             });
         //});
     }

     builderSQL(sourceData,saveJson,$('#sql_builder'),false);

     //第一个下拉发生改变
     $('.fir_sele').on('change',function(){
    	 var fullTemp = $(this).val();
    	 var all = fullTemp.split('.');
    	 var sec_div = $('<div class="sin_connect">');
    	 var sec_sel = null;
         $.each(propertiesTypes,function(m){
             //alert(JSON.stringify(propertiesTypes[m]))
             //key 存在
             if(all[3] in propertiesTypes[m]){
                 sec_sel = new_op_select(propertiesTypes[m][all[3]]);
//                 sec_sel.val(consy);
//                 sec_sel.on('change', function () {
//                     alert("第二个下拉发生变化，将要影响到value的输出,产生回调函数，为value的输入做输入提示!")
//                 });
                 proIsExist = true;
                 return false;
             }
         });
         sec_div.append(sec_sel);
         $(this).parents('.sin_key').next().remove();
         $(this).parents('.sin_key').next().remove();
         
         $(this).parents('.sin_con').append(sec_div);
         
    	 
     });
     
     //第二个下拉发生改变
     $('.op_sele').on('change',function(){
    	 //根据选择的树形类型和连接符，确定是否调用回调函数，如果需要调用回调函数，则需要等待接收回掉函数的返回值，并作用于等待填充的待选值的提示信息
    	 
     });
     

 });