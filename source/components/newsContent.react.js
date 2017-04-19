var React=require("react");
var NewsContent=React.createClass({
	getLi:function(){
		var props=this.props;
		var arr=[];
		var _this=this;
		var li=props.news.map(function(value){
			return(
				<li key={value.index} className="newsListItem">
					<a href="" className="newsTitle">{value.title}</a>
					<div className="news">
						<a href="" className="newsImg" style={{"display":value.imgSrc==undefined?"none":"block"}}><img src={value.imgSrc}/></a>
						<div className="newsOwn">
							<div className="newsSourceTime">
								<span className="newsSource">{value.source}</span>
								<span className="newsTime">{_this.getTime(value.time)}</span>
							</div>
							<div className="newsMain">{value.content}</div>
						</div>
					</div>
				</li>
			)
		});
		return li;
	},
	getTime:function(data){
		var data=new Date(parseInt(data));
		var year=data.getFullYear();
		var month=data.getMonth()+1;
		var day=data.getDate();
		var hour=data.getHours();
		var min=data.getMinutes();
		var second=data.getSeconds();
		var time=year+"-"+month+"-"+day+" "+hour+":"+min+":"+second;
		return time;
	},
	render:function(){
		return(
			<div className="newsContent pl120">
				<ul className="newsList">
					{this.getLi()}
				</ul>
			</div>
		);
	}
});
module.exports=NewsContent;
