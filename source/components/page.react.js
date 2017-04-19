var React=require("react");
var Page=React.createClass({
	getPageLi:function(){
		var page=this.props.page;
		var pageCount=page.pageCount;
		var arr=[];
		var _this=this;
		for(var i=0;i<pageCount;i++){
			arr.push(i+1);
		}
		var pageLi=arr.map(function(value,index){
			return(
				<li className={_this.getCurrentClass(index)} key={value}><a href="javascript:;" onClick={_this.goTo(index)}>{value}</a></li>
			)
		});
		return pageLi;
	},
	getCurrentClass:function(index){
		if(this.props.current==index){
			return "current";
		}
	},
	goTo:function(data){
		var props=this.props;
		var current=props.current;
		var setCurrent=props.setCurrent;
		var pageCount=props.page.pageCount;
		var index;
		return function(){
			if(data=="prev"){
				if(current>0){
					index=current-1;
				}else{
					index=0;
				}
			}else if(data=="next"){
				if(current<pageCount-1){
					index=current+1;
				}else{
					index=pageCount-1;
				}
			}else{
				index=data;
			}
			$.ajax({
				url:"./backTest/newNews.json",
				dataType:"json",
				success:function(data){
					props.getNewNews(data.news);
				}
			});
			props.setPrev("hasPrev");
			if(index==0){
				props.setPrev("");
			}
			setCurrent(index);
		}
	},
	render:function(){
		var _this=this;
		return(
			<div className="page pl120">
				<ul className={_this.props.hasPrevClass}>
					<li className="firstLi"><a href="javascript:;" className="first" onClick={_this.goTo(0)}>首页</a></li>
					<li className="prevLi"><a href="javascript:;" className="prev" onClick={_this.goTo("prev")}>上一页</a></li>
					{this.getPageLi()}
					<li className="nextLi"><a href="javascript:;" className="next" onClick={_this.goTo("next")}>下一页</a></li>
					<li><a href="javascript:;" className="last" onClick={_this.goTo(_this.props.page.pageCount-1)}>末页</a></li>
				</ul>
			</div>
		)
	}
});
module.exports=Page;
