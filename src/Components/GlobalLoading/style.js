const style = () => {
  return {
    globalbackground: {
      position: "fixed",
      top: '0px',
      left: '0px',
      width: "100%",
      height: "100%",
      background : 'rgba(190, 190, 190, 0.466)' ,
      zIndex : 99
    },
    loading: {
      position: 'absolute',
      top: "50%",
      left: "50%",
      transform: "translate(-50% , -50%)",
      width : '100px',
      height: '100px'
    },
    img : {
      width:'100%' ,
      height :'100%'
    }
  };
};
export default style;
