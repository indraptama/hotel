import {h,Component} from 'preact';
import anime from 'animejs';
import style from './style';


export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar_active: false,
      sidebar_position: 'left',
    }
  }

  componentWillUpdate() {
    this.setState({
      sidebar_active: this.props.sidebar_active,
    })
  }

  render() {
    return (
      <div className={style.SideBar}>
        <div className={style.SideBar_layer}></div>
        <div className={style.SideBar_container} style={sidebarContainerStyle(this.props.position, this.props.backgroundColor, this.props.width)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

function sidebarContainerStyle(pos,bgColor,width) {
  let style = {
    backgroundColor: bgColor,
    width: width,
  };

  if (pos === 'left') {
    style.left= 0;
    style.transform='translateX('+(-1*width)+'px)';
    return style
  } else if (pos === 'right') {
    style.right= 0;
    style.transform='translateX('+(1*width)+'px)';
    return style
  }
}
