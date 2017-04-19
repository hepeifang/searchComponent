var React=require("react");
var SearchInput=React.createClass({
	componentDidUpdate:function(){
		if(this.props.flag=="result"){
			this.refs.resultSearchInput.focus();
		}
	},
	search:function(){
		var props=this.props;
		$.ajax({
			url:"./backTest/news.php",
			dataType:"json",
			success:function(data){
				props.getNews(data.news);
			},
			error:function(){
				console.log(111);
			}
		});
		$.ajax({
			url:"./backTest/page.php",
			dataType:"json",
			success:function(data){
				props.setPageStatus();
				props.getPage(data);
				if(props.flag=="result"){
					props.setCurrent(0);
				}
			},
			error:function(){
				console.log(222);
			}
		});
		if(props.flag!="result"){
			var inputValue=this.refs.indexSearchInput.value;
			if(inputValue!=""){
				props.changeSingle();
				props.changeInputValue(inputValue);
			}
		}
	},
	changeValue:function(){
		var inputValue=this.refs.resultSearchInput.value;
		this.props.changeInputValue(inputValue);
	},
	getInput:function(){
		var props=this.props;
		if(props.flag=="result"){
			return(
				<input type="text" className="searchInput" ref="resultSearchInput" value={props.value} onChange={this.changeValue}/>
			)
		}else{
			return (
				<input className="searchInput" ref="indexSearchInput"/>
			)
		}
	},
	render:function(){
		return(
			<div className="searchBar">
				{this.getInput()}
				<button className="searchButton" onClick={this.search}>搜索</button>
			</div>
		)
	}
});
module.exports=SearchInput;
