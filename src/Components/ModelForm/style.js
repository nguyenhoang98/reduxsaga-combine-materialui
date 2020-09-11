
const style = (theme)=>{
  return{
    Modal : {
      width : 400 ,
      height:'auto' ,
      background : 'white' ,
      position : 'absolute' ,
      top : '50%' ,
      left: '50%' ,
      transform: 'translate(-50% , -50%)' ,
      outline : 'none' ,
      padding:'0 20px 20px 20px',
      boxShadow : `1px 1px 1px #ccc , -1px -1px 1px #ccc` ,
    } ,
    header : {
      background :theme.color.primary ,
      padding:10 ,
      color:'white' ,
      margin : '0px -20px'
    } ,
    title : {
      textTransform : 'capitalize'
    } ,
    clearModal : {
      position : 'absolute' ,
      right:'20px' ,
      cursor: 'pointer'
    } ,
    content : {
      color : 'black '
    }
  }
}
export default style ;
