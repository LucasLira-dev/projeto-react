function Container(props){
    return(
        <div className="w-[1200px] min-h-[75%] flex justify-between m-0 mx-auto flex-wrap-wrap">
            {props.children}
        </div>
    )
}

export default Container;