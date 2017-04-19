var React=require("react");
var ReactDOM=require("react-dom");
var SearchInput=require("./components/searchInput.react");
var NewsContent=require("./components/newsContent.react");
var Page=require("./components/page.react");
var Index=React.createClass({
	getInitialState:function(){
		return {
			"changeSingle":false,
			"inputValue":'',
			"news":[],
			"page":'',
			"current":0,
			"pageStatus":false,
			"hasPrevClass":''
		}
	},
	changeSingle:function(){
		this.setState({
			"changeSingle":true
		})
	},
	changeInputValue:function(data){
		this.setState({
			"inputValue":data
		})
	},
	getNews:function(data,page){
		this.setState({
			"news":data
		})
	},
	getPage:function(data){
		this.setState({
			"page":data
		})
	},
	setCurrent:function(data){
		this.setState({
			"current":data
		})
	},
	setPageStatus:function(){
		this.setState({
			"pageStatus":true
		})
	},
	setPrev:function(data){
		this.setState({
			"hasPrevClass":data
		})
	},
	render:function(){
		var state=this.state;
		return (
			<div>
				<div className="index" style={{"display":state.changeSingle?"none":"block"}}>
					<div className="indexTopBar">
						<ul className="outsideList">
							<li className="outsideListItem">
								<a href="http://www.xinhuanet.com" target="_black">新华网</a>
							</li>
							<li className="outsideListItem">
								<a href="http://www.xinhuanet.com" target="_black">test</a>
							</li>
						</ul>
					</div>
					<div className="indexMain">
						<SearchInput changeInputValue={this.changeInputValue} changeSingle={this.changeSingle}
						getNews={this.getNews} getPage={this.getPage} setPageStatus={this.setPageStatus}/>
					</div>
				</div>
				<div className="result" style={{"display":state.changeSingle?"block":"none"}}>
					<div className="resultTopBar">
						<a href="http://www.xinhuanet.cn" className="resultLogo">
							<img src="../img/logo.png"/>
						</a>
						<SearchInput flag="result" value={state.inputValue} singleStatus={state.changeSingle} changeInputValue={this.changeInputValue}
						getNews={this.getNews} getPage={this.getPage} setPageStatus={this.setPageStatus} setCurrent={this.setCurrent}/>
					</div>
					<div className="loading pl120" style={{"display":state.pageStatus?"none":"block"}}>...</div>
					<NewsContent news={state.news}/>
					<div style={{"display":state.pageStatus?"block":"none"}}>
						<Page page={state.page} setCurrent={this.setCurrent} current={state.current} getNewNews={this.getNews} 
						setPrev={this.setPrev} hasPrevClass={state.hasPrevClass}/>
					</div>
				</div>
			</div>
		)
	}
});
ReactDOM.render(<Index/>,document.getElementById("search"));
