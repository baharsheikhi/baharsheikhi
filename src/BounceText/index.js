import './styles.css'
import classnames from 'classnames';

function BounceText(props) {

    return (
        <p className={classnames(props.childClassName, props.shake ? "BounceText-Content-Shaking" : "BounceText-Content")}>
            {props.children}
        </p>
    )
}

export default BounceText; 