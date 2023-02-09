    import classes from './modal.module.scss'
    import {Fragment} from "react";
    import ReactDOM from "react-dom";
    /* eslint-disable-next-line */
    export interface Modal {
        children:any
        onClose:any
    }
    export interface Backdrop {
        onClose:any
    }
    export interface ModalOverlay {
        children:any
    }
    export function Backdrop (props:Backdrop){
        return(
            <div className={classes.backdrop} onClick={props.onClose}></div>
        )
    }
    export function ModalOverlay (props:ModalOverlay){
        return(
            <div className={classes.modal}>
                <div className={classes.content}>{props.children}</div>
            </div>
        )
    }
        const portalElement:any = document.getElementById('overlay')
    export function Modal(props: Modal) {
      return(
        <Fragment>
            { ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement) }
            { ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
      );
    }

    export default Modal;
