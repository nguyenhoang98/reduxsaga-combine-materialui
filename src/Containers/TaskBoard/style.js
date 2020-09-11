
const style = (theme)=>{
    return {
         taskboard : {
            display: 'flex' ,
            justifyContent: 'space-between' ,
            background : 'blue' ,
            padding:'20px',
         } ,
         shape : {
            flexBasis: '30% ',
            background : theme.shape.background ,
            color:'white' ,
            padding:'20px' ,
            borderRadius : theme.shape.borderRadius
         } ,
         modalConfigTextBold : {
          fontWeight:  'bold'
        }
    }
}
export default style ;
